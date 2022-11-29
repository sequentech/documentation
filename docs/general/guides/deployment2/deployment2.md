---
sidebar_position: 5
title: Deployment Guide 2
---

This document describes the complete deployment of an Sequent Tech project
with two Authorities for a production environment in virtual machines.

## Requirements

You need 4 Linux x64 host machines with at least 4GB of RAM each and a clean
Ubuntu 20.04 LTS installed and around 30GB of HD.

The structure of the four machines is:

- prod-s1
  used as master web server

- prod-s2
  used as slave web server

- prod-a1
  used as election authority 1

- prod-a2
  used as election authority 2

The instructions in the requirements section should be executed in all 4
machines. We asume that either:

a. A fith machine can be used as the load balancer and for high availability 
purposes and act as the public interface to the Internet. This is not a 
requirement, you can just point the DNS to the master and change it manually
if it fails, but then only the master will be serving requests. The load 
balancer can be provided by the cloud provided if you use one. We do not have
any ansible deployment script to configure the load balancer.

b. Otherwise, prod-s1 will be used as the public interface interface to the 
Internet unless it fails, then prod-s2 will be used for continuing operations.

## Ops environment

It’s recommended to minimize the number of publicly reachable machines to 
minimize attack surface. That’s why other than the publicly serving machines like load 
balances and such, all the communications should be done through an internal
network unreachable through the Internet.

To reach to this internal network, we suggest to use an `ops` machine as a 
single point of access for increased security and simplicity. For example, in
our case as we usually use Amazon Web Services EC2, our `ops` machine is called 
`aws-ops`. This machine allows us to access all the other ones via ssh.

If you are using vagrant for local development, your `ops` machine might just
be the physical host.

WARNING: Currently the vagrant configuration is outdated and needs changes to
work.

Some other recommendations to minimize attack surface:
- Use wisely security groups: only open ports to the Internet if you really 
  need to.
- Do not setup a public ip address to a machine if it can keep being private.
  All machines should only be accessible through ssh via the `ops` machine, 
  with the root@aws-ops user and to the root user of the destination machine.

### Configuring access to each VM inside the ops machine

Each machine should have its own static private ip address inside the private
network and its own name. This should be configured in the `ops` machine to
access them by name.

By default, ssh access to this deployment machines is done through the `ubuntu`
user, and only from that you can `sudo -s` to root or other users. In order for
not to need to specify this user everytime you login and for every new machine,
we suggest you add the following two lines to the `/root/.ssh/config` file:

```
Host *
User ubuntu
```

### Configuring ops hosts

For each machine, you will need to add a line in `/etc/hosts` in the `ops` 
machine, for example  `192.168.1.2 prod-s1`.

In case of using vagrant for local deployment, this won't be needed as it's
already configured by vagrant.

### Collaborate sharing with tmuxinator

To help collaboration during operations among employees and to ease operations 
and monitorization of a deployment, we recommend to execute everything under a 
single shared `tmux` session per deployment in the `ops` machine. 

We use `tmuxinator` to help managing these `tmux` sessions. Please install it
in the `ops` machine in the root user.

You can access our base skeleton configuration for a deployment in the
[deployment-skel.yml](./assets/deployment-skel.yml) file. You can:

1. Install `tmux` and `tmuxinator` in the `ops` machine:

```bash
apt install tmux tmuxinator -y
```

2. Add an `mux` alias to your `/root/.bashrc`: 

```bash
echo "alias mux='tmuxinator'" >> /root/.bashrc
```

3. Create the base tmuxinator config file that you'll copy for each deployment
by copying the file [deployment-skel.yml](./assets/deployment-skel.yml) into the 
file `/root/.tmuxinator/deployment-skel.yml` of the `ops` machine, and also the
file [.tmux.conf](./assets/tmux.conf.yml) into `/root/.tmux.conf` of the `ops`
machine.

4. Learn the basic tmuxinator & tmux commands:
 - `mux list`: List the available projects
 - `mux copy deployment-skel prod`: Copy the deployment-skel to create a `prod`
   project. This commands directly enters into your configured editor, to edit
   the project before creating it. If you are using the base skel we mentioned 
   earlier and you are using vim as the editor, you can easily just do a quick
   find & replace all with the command: `:%s/BASE/prod/g` or similar.
 - `mux prod`: Attaches to the `prod` project session, starting it first if it 
    wasn't started.
 - `mux del prod`: Removes the prod project.
 - `mux stop prod`: Stops the prod project session.
 - Ctrl+a, d: Once in a session, detaches from this session.
 - Ctrl+a, c: Adds a new tab terminal to the current session.
 - Ctrl+Left/Right arrow: moves from one tab terminal to the other.

### Creating the mux project

Each deployment is compromised of multiple machines. As mentioned earlier, we 
recommend to create a tmuxinator project for each deployment.

Use `mux copy deployment-skel <deployment-name>`: Copy the deployment-skel to 
create a `<deployment-name>` project. Do a quick find & replace all in vim 
inside the file with the command: `:%s/BASE/<deployment-name>/g` then save and
exit with `:wq`.


## For each machine

Refer to this section for the configuration steps you need to take into account
and execute for each of the machines in the deployment (sequent master, slave,
auth1, auth2..).

### Machine provisioning

As mentioned earlier, you should provision each VM with Ubuntu 20.04 LTS,
4GB of RAM and usually around 30GB HD. The machine requirements might 
vary depending on the size and number of the elections that these machines will
be used for.

For a faster deployment we recommend to increase the number of cores. This can
be reduced later to even just 1 core and 2GB of RAM.

In AWS EC2 we usually use the free `Ubuntu 20.04 LTS - Focal` AWS Marketplace 
AMI provided by `Canonical Group Limited`. If you are using vagrant, it will 
take care of the provisioning of the VMs.

It's customary for us to name each machine by the hostname it will use. For 
example in AWS EC2 an instance whose hostname is `prod-a1` (trustee #1 for the
production deployment) would be called `prod-a1`. Also, the name of the related
volume (the hard disk) would have the same name.

### Machine configuration

Once the machines are provisioned, we should configure them individually. The
ansible deployment script is typically executed within the deployed machine. 
This allows us to have different deployments with different ansible versions
all reachable through the `ops` machine.

### Network, firewall & DNS

We use static private (and public) ip addresses. All the machines in the 
deployment should be able to see each other and be reachable via the `ops` 
machine.

To do that, for example in AWS we assign a security group called `internal`
that has the following rule:

- Type: All traffic
- Protocol: All
- Port range: All
- Source: 172.31.0.0/16

Firewall rules should be created to allow the following kind of connections:

-  **postgresql:** prod-s1 **<<tcp:5432>>** prod-s2
-  **postgresql's rsync:** prod-s1 **<<tcp:22>>** prod-s2
-  **memcached:** prod-s1 **<<udp:11211>>** prod-s2
-  **web site:** [prod-s1, prod-s2] **<<tcp:443>>** Internet
-  **sentry api:** [prod-s1, prod-s2] **<<tcp:9090>>** Internet
-  **sentry web site:** [prod-s1, prod-s2] **<<tcp:8443>>** Internet
-  **eotest:** prod-a1 **<<tcp:5000>>** prod-a2
-  **mixnet:** prod-a1 **<<tcp:4081>>** prod-a2
-  **mixnet:** prod-a1 **<<udp:8081>>** prod-a2
-  **private ballots download:** [prod-s1, prod-s2] **<<tcp:14453>>** [prod-a1, prod-a2]

You can create the appropiate rules to allow this access to the different 
services. For example if one or more of the trustee machines are external, 
you will have to open the appropiate ports so that they can communicate with
the `prod-s1` and `prod-s2` machines and with the trustee machines in the
internal network.

We also typically configure the public access to the servers through cloudflare.
To make it work, you need to give public access to the 80,443 and 8443 ports
to [cloudflare ips](https://www.cloudflare.com/ips/). In AWS we use a 
`cloudflare` security group for that and apply it either to the master machine
(`prod-s1`) or to the load balancer, and then assign a Public Static IP 
address for that machine and point to that IP Address in Cloudflare's DNS.

### Backups

In AWS EC2 we use `AWS Backup` to automate backups. They are done at the VM 
level and they can be easily created by simply assigning a tag to the Volumnes
of the VMs.

AWS Backup creates and manages (also deleting old ones) snapshots of volumes. 
BTW we usually configure the instances to be encrypted, and thus snasphots are
also encrypted. 

We usually have a backup plan in `AWS Backup` that is applied to any volume
with the `backup-normal` tag, with the following configuration:

- 1 daily backup, save 6 last.
- 1 weekly backup, save 4 last.
- 1 monthly backup, save 24 last.
- 1 each 3 hours, save 7 last.

To restore a backup, you just need to create a volume out of this snapshot in
the same Availability Zone as the instance you want to attach it to. 

We usually do that manually with a name similar to the original volume name, for
example it could be `prod-a1-restored-1`. You could stop the `prod-a1` instance,
detach the `prod-a1` volume, attach the new `prod-a1-restored-1` volume as 
`/dev/sda1`.

### Non-root permissions (optional)

One can use a non-root use for deployment. Unless a requirement, we don't 
usually do it. Thus, this step is not very well tested lately. Deployment is
typically done within the Ubuntu machine as the root user. You can skip this
step.

To configure non-root permissions in the VM, first create the deployment user  
if it hasn't been created yet. We'll use **sequent** for that:

```
root@prod-s1 # adduser sequent sequent --gecos "FullName,RoomNumber,WorkPhone,HomePhone" --disabled-password
```

Afterwards, you should add the permissions that the sequent user requires for
administration and deployment.

This is how you do it in the two servers that will be used as authorities:

```
root@prod-s1 # wget https://raw.githubusercontent.com/sequentech/deployment-tool/next/doc/production/auth.sudoers
root@prod-s1 # cat auth.sudoers >> /etc/sudoers
```

And this is how you do it for the two other servers that will be used as master
and slave machines:

```
root@prod-s1 # wget https://raw.githubusercontent.com/sequentech/deployment-tool/next/doc/production/sequent.sudoers
root@prod-s1 # cat sequent.sudoers >> /etc/sudoers
```

### Timezones details

Once deployed, the server will be configured to use UTC timezone. This is
automatically done by the ansible deployment scripts. This is considered a
[good practice](http://yellerapp.com/posts/2015-01-12-the-worst-server-setup-you-can-make.html),
and is performed by the ansible deployment scripts by executing the following
commands automatically:

```bash
ln -sf /usr/share/zoneinfo/UTC /etc/localtime
dpkg-reconfigure -f noninteractive tzdata
```

Server logs, therefore, will all be in UTC.

Any date and time you input in your data will be in UTC timezone. You can
configure the output timezone and date format of the election results PDFs using
the
[configure_pdf pipe](../../reference/election-creation-json#pipe-configure_pdf).
See [Results Config Pipes](../../reference/election-creation-json#results-config-pipes)
for more information about how this works.

### Install and configure deployment dependencies

Within the provisioned machine (for example `prod-s1`), there are a series of 
steps required for a  proper and successful deployment. We will from now on 
assume we are using the root user (`sudo -s`) inside the provisioned VM to 
execute all the tasks.

We will first install some dependencies and reboot:

```bash
echo "source /usr/share/virtualenvwrapper/virtualenvwrapper.sh" >> /root/.bashrc
apt-get update && apt-get dist-upgrade -y && apt install virtualenvwrapper -y  && reboot 
```

We usually have a copy of the configuration file in `ops` then copy it to the 
machine (we cannot directly ssh to it for security reasons). So we usually have 
a generic config file in ops machine. Then from ops, copy it to the provisioned 
machine, for example in prod-s1:

```bash
scp config-base.yml prod-s1:/home/ubuntu/config.yml
```

The previous step is not really required, but it is required for the following
steps to have the `config.yml` inside the `/home/ubuntu`. You can for example 
use the config file from [config.master.yml](./assets/config.master.yml) as a 
base, copying it instead.

Then in the provisioned machine as root, we install dependencies and move the
config file where it needs to be (for example `/root/prod-s1/root.yml`):

```bash
# change the NAME var to the appropiate name
export NAME="prod-s1"
export LC_ALL="en_US.UTF-8"
export LC_CTYPE="en_US.UTF-8"
mkvirtualenv ansible -p $(which python3)
deactivate
workon ansible

# should return Python 3.8.5:
python --version 
cd /root
git clone https://github.com/sequentech/deployment-tool.git $NAME
cd $NAME
git checkout master

# needed for ansible. If you are deploying an election authority use
# doc/production/playbook.auth.yml instead
echo "localhost ansible_connection=local" > inventory 
cp doc/production/playbook.sequent.yml playbook.yml

# copy the config file to /root/$NAME/root.yml
cp /home/ubuntu/config.yml config.yml

# update and set random passwords. NOTE: Do not do that for the slave machines, 
# it needs to be using the same passwords as the master.
DATE=$(date); cp config.yml "config_base_$DATE.yml"; python3 helper-tools/manage_config_pwd.py -c "config_base_$DATE.yml" -l 40 -o config.yml

pip install ansible==2.9.22
```

After this, one should edit the config.yml file and edit the appropiate values,
please read below about how to do that. 

For the slave machine (for example `prod-s2`) one would copy the config.yml 
from `prod-s1` and not change the the passwords with the `manage_config_pwd.py`
script. 

Even for the election authorities' machines, it's easiest to just copy the
`config.yml` file from `prod-s1` and use it as a base. However, we provide 
sample production config files for both sequent and auth machines in the 
`doc/production` directory.

## Web servers master & slave deployment

Both machines prod-s1 and prod-s2 should be setup with the same passwords,
because they will be a replica of each other: the slave will be in hot standby
configuration. The only difference between the configuration file of `pro-s1`
and `prod-s2` should be the following config keys:

* config.hostname
* config.public_ipaddress
* config.private_ipaddress
* config.load_balancing.repmgr_node_id

Please read the comments and instructions inside the configuration file
and accordingly. Both machines for deploy purposes should have the
**config.load_balancing.is_master** set to **true** and The
**config.load_balancing.master.slave_postgres_ssh_keys** and
**config.load_balancing.master.slave_ballotbox_ssh_keys** set to **[]**
(which means empty list) at this stage of deployment.

If your machine is behind a proxy, you need to specify that in the
**config.has_https_proxy** variable.

After setting the configuration, you should set the playbook that we will use
for deploying as master the machines, we already configured the inventory for
deploying locally. The next step is to deploy with ansible:

```bash
date; time ansible-playbook -i inventory playbook.yml; date
```
Once this is done, the initial as-master deployment has been successful.

If you have assigned a FQDN to for example 'sequent.example.com' to the machine
and the name resolution is set up correctly in your personal machine via DNS or
by adding 'sequent.example.com ipaddr' to your '/etc/hosts', you should be able to login
as an administrator entering in 'https://sequent.example.com/admin/login' using
the credentials you specified in the config.yml file.

We recommend to use the /etc/hosts file to change the ip address of the
webserver from prod-s1 to prod-s2 ip easily for testing purposes.

### Configure the slave

To configure prod-s2 as a slave, we need to import the ssh keys from the
ballotbox and postgres users in *`prod-s1`* to add them in *`prod-s2`.

To get the keys execute these commands in *`prod-s2`*:

```bash
sudo -u ballotbox cat /home/ballotbox/.ssh/id_rsa.pub
sudo -u postgres cat /var/lib/postgresql/.ssh/id_rsa.pub
```

Copy those keys and set them in the `prod-s1` **config.yml** file in
the variables **config.load_balancing.master.slave_ballotbox_ssh_keys**
and **config.load_balancing.master.slave_postgres_ssh_keys**.

Then, execute again ansible in *`prod-s1`* to apply the changes:

```bash
date; time ansible-playbook -i inventory playbook.yml; date
```

After that, then you can change the **config.yml** for `prod-s2` to set
the variable **config.load_balancing.is_master** to **false**,
**config.load_balancing.slave.master_hostname** to the hostname of `prod-s1` 
and **config.load_balancing.repmgr_node_id** to **2**.

If your machine is behind a proxy, you need to specify that in the
**config.has_https_proxy** variable.

Then you can run again ansible in `prod-s2` to apply the changes, using the
slave specific playbook, which can only work after having executed
**playbook.sequent.yml**:

```bash
root@prod-s2:/root/prod-s2/ $ cp doc/production/playbook.slave.yml playbook.yml
root@prod-s2:/root/prod-s2/ $ time sudo ansible-playbook -i inventory playbook.yml
```

See the [High availability and load balancing (HA/LB)](#high-availability-and-load-balancing-halb)
section to see more information about how to check if everything is working
and how to promote the slave to be master and also change it back to be a slave.

## Deployment of authorities

Please follow the steps of the [For Each Machine section](#for-each-machine) to 
do the initial provisioning and configuration of the election authorities,
prod-a1, prod-a2. Afterwards, continue reading this section.

We'll use an authority config file as a base:

```bash
root@prod-a1:/root/prod-a1/ $ cp doc/production/config.auth.yml config.yml
```

Edit the config.yml file following the instructions inside. Specifically, don't forget to edit:

* config.hostname
* config.public_ipaddress
* config.private_ipaddress
* config.hosts

In particular, you need to ensure that the FQDN points to the private network
IP Address of the master machine using config.hosts, using a configuration 
similar to:

```yaml
hosts:
- hostname: demo.example.com
  ip: 192.168.50.14 # this should be the ip of the new master
```

Note that the above is required only if the authority is in a private network
and cannot reach to this web server using the public ip address.

Then deploy as usual:

```bash
root@prod-a1:/root/prod-a1/ $ date; time ansible-playbook -i inventory playbook.yml; date
```

### Connecting authorities

Authorities communicate with other authorities using ssl and client
certificates so the authority server doesn't accept queries from unknown
servers. In a real election system it's a good idea to not publish the ips
and ports of the authorities to avoid malicious attacks.

The deployment script creates a certificate for each authority in
/srv/cert/selfsigned/ and we manage the authority communication and
certificate sharing with the eopeers tool.

Execute the following in `prod-a1`:

```bash
root@prod-a1:/root/prod-a1/ $ eopeers --show-mine
```

Copy the output to a file in `prod-a2`, then install it:

```bash
root@prod-a2:/root/prod-a2/ $ eopeers --install prod-a1.pkg
root@prod-a2:/root/prod-a2/ $ service nginx restart
```

Then do the same the other way around:

```bash
root@prod-a1:/root/prod-a1/ $ eopeers --show-mine
root@prod-a1:/root/prod-a1/ $ eopeers --install prod-a2.pkg
root@prod-a1:/root/prod-a1/ $ service nginx restart
```

### Test the connection between the authorities

A tool is installed to test the real connection between the authorities.
Open two terminal windows.  Open `eolog` in one of the terminal windows:

```bash
root@prod-a1:/root/prod-a1/ $ sudo eolog
```

Run eotest in the other terminal window from the other auth server:

```bash
root@prod-a1:/root/prod-a1/ $ eotest full --vmnd --vcount 100 --peers prod-a2
```

You should see the software working as eolog output will appear in the
first terminal window. Once it the eotest command finishes, you can also close
prod-a2 connection to eolog. Congratulations, you have run a complete test 
between the two authorities in which:

1. **Create:** Election public and private keys have been created.
2. **Encrypt:** Test ballots have been created and encrypted.
3. **Tally:** Those encrypted votes have been mixed and decrypted.

:::tip
The `eotest` command is useful to test election authorities. You can change the 
number of votes to use in the test using the `--vcount`  option. In our example
above we used 100 votes, but you could tally 100,000 or any other number. This
can help you find out how much time the tally would take and if the authority 
machine configuration and hardware would work with a specific number of votes.

By default eotest uses all connected authorities, but you can also specify with 
which other authorities you want to do the test using the `--peers` option. 
You can execute each of the steps individually using `create`, `encrypt` or
`tally` options instead of `full`. Find more information with `eotest --help`.
:::

### Connecting web servers with authorities

The following commands should be executed in both `prod-s1` and `prod-s2`
machines:

Create **prod-a1.pkg** and **prod-a2.pkg** files with the configuration of both
authorities. Then install them:

```bash
root@prod-s1:/root/prod-s1/ $ eopeers --install prod-a1.pkg --keystore /home/ballotbox/keystore.jks
root@prod-s1:/root/prod-s1/ $ eopeers --install prod-a2.pkg
root@prod-s1:/root/prod-s1/ $ service nginx restart
root@prod-s1:/root/prod-s1/ $ supervisorctl restart ballot-box
```

Please note that there's a difference between the first two eopeers commands.
The first one is configured to be executed to add the key to ballot-box
keystore for the director authority `prod-a1`. Afterwards, we need to restart
not only `nginx` but also `ballot-box` precisely because this service needs
to reload the ``prod-a1` TLS certificate keys.

Before completion, the installation of the certificate of the `prod-s1` and
`prod-s2` servers needs to be installed in the election authorities, because
even though i'ts the same TLS cert, they have different hostnames. So copy
them (get it with "eopeers --show-mine") to the authorities and install them:

```bash
root@prod-a1:/root/prod-a1/ $ eopeers --install prod-s1.pkg
root@prod-a1:/root/prod-a1/ $ eopeers --install prod-s2.pkg
root@prod-a1:/root/prod-a1/ $ service nginx restart
```

## Create a test election

Go to https://prod-s1/admin/login and create a test election. Then execute
the following to create some votes. Change '2' in the following commands with
your election number:

```bash
root@prod-s1:/root/prod-s1/ $ su - ballotbox
ballotbox@prod-s1:~ $ source ~/env/bin/activate
ballotbox@prod-s1:~ $ cd ~/ballot-box/admin
ballotbox@prod-s1:~ $ export ELECTION_ID=2
ballotbox@prod-s1:~/ballot-box/admin/ $ ./admin.py dump_pks $ELECTION_ID
ballotbox@prod-s1:~/ballot-box/admin/ $ echo '[1,0]' > votes.json
ballotbox@prod-s1:~/ballot-box/admin/ $ ./admin.py encrypt $ELECTION_ID
```

start the election, cast the votes, stop it and tally it:

```bash
ballotbox@prod-s1:~/ballot-box/admin/ $ ./admin.py start $ELECTION_ID
ballotbox@prod-s1:~/ballot-box/admin/ $ ./admin.py cast_votes $ELECTION_ID
ballotbox@prod-s1:~/ballot-box/admin/ $ ./admin.py count_votes $ELECTION_ID 
# it will output: "2 (2)" which means 2 votes cast, 2 unique voters
ballotbox@prod-s1:~/ballot-box/admin/ $ ./admin.py stop $ELECTION_ID
ballotbox@prod-s1:~/ballot-box/admin/ $ ./admin.py tally $ELECTION_ID
```

## High availability and load balancing (HA/LB)

Sequent platform can be configured to support both load balancing and high
availability, using a master-slaves configuration.

High availability means that the slaves contain a replica of the master, so in
the event of the master machine failing, one of the slaves can take over by
being promoted to master. This is a process that currently have to be executed
manually following the steps in the 
[Promoting a slave to be master](#promoting-a-slave-to-be-master) section.

Load balancing allows to partially scale horizontally, allowing to serve more
http requests per second. Sequent platform allows to perform load balancing only
in the web servers (`prod-s1`, `prod-s2`, etc) but not in the election authority
servers (`prod-a1`, `prod-a2`, etc). For scaling election authorities, currently
the only way to do it is either subdividing an electoral process in multiple
elections with different election authority servers, or scaling vertically the
election authorities by adding more CPU/RAM/Disk resources to these machines.

The way Sequent deploys the master and the slave means that the master
(`prod-s1` in this guide) has the readwrite instance of the PostgreSQL database
and the slaves (`prod-s2`) have only a read-only database replica.

However, other than that, all the backend services are replicated in both master
and slaves machines (`iam`, `iam_celery`, `ballot-box` and `nginx`).
`ballot-box` uses `memcached` to cache queries and improve performance, and
all slaves connect directly to the `memcached` instance of the master machine.

On the other hand, there are currently some limitations on the load balancing:
`iam`, `iam_celery` and `ballot-box` connect directly to the master
PostgreSQL instance, and no load balancing is performed in the database level,
only at the application level.

Finally, `iam_celery` uses `RabbitMQ` as its broker to manage messages and 
queues. Each server, independing of it being a master or a slave, currently
runs its own `RabbitMQ` queue. That means that a task to send an SMS message
scheduled by `prod-s1` will only be run by `prod-s1`, and same for any other
server (for example `prod-s2`).

### Checking the cluster

The master/slave configuration in this configuration basically means that:
1. `prod-s2` is a server that is replicating in a hot standby mode the database
   of `prod-s1`. 
2. `prod-s2` has also replicated everything needed to be able to change the
   server from slave to master at any time.

### Checking that the slave works using a Load Balancer

One simple way to test that the slave machines work is simply using a load
balancer. You can deregister the master from the load balancer, and then only
the slave machines will receive requests. You can check that this is true
by watching the logs of `nginx`, `ballot-box`, or `iam` in both
machines, and checking that only the slave is receiving requests with the 
following commands:

```bash
supervisorctl tail -f ballot-box
supervisorctl tail -f iam
tail -F /var/log/nginx/access.log
```

Note that you can configure the load balancer to establish a health check to
the PATH `/admin-api/iam/api/auth-event/1/`. This should return a HTTP
status 200 through TLS and port 443, when iam is running.

#### Checking database replication

You can also test that the database replication is working both `prod-s2` and
`prod-s1` that the following command has this kind of output:

```bash
sudo -u postgres /usr/lib/postgresql/12/bin/repmgr -f /etc/repmgr/repmgr.conf cluster show

 ID | Name        | Role    | Status    | Upstream    | Location | Priority | Timeline | Connection string
----+-------------+---------+-----------+-------------+----------+----------+----------+--------------------------------------------
 1  | prod-s1     | primary | * running |             | default  | 100      | 1        | host=prod-s1 user=repmgr dbname=repmgr
 2  | prod-s2     | standby |   running | prod-s1     | default  | 100      | 1        | host=prod-s2 user=repmgr dbname=repmgr
```

Execution in either of them should result in the same results. Additionally, you
can verify that any change in the database in `prod-s1` is reflected in
`prod-s2`. For example, if you have created elections using the UI or otherwise,
they should appear in both machines:

```bash
sudo -u postgres psql ballot_box -tAc "select id,state from election;"
5001|registered
5002|registered
5003|registered
5005|results_ok
```

#### Checking certificates and public keys synchronization

If you list the files inside the datastore and the server certificate in
both `prod-s1` and `prod-s2`, it should list the same files:

```bash
root@prod-s1:/root/prod-s1/ $ sudo -u ballotbox find /home/ballotbox/datastore/ -type f | xargs md5sum
05b76ec89dd7a32b76427d389a5778c1  /home/ballotbox/datastore/public/2/pks

root@prod-s1:/root/prod-s1/ $ find /srv/certs/selfsigned/ -type f | xargs md5sum
d811c3e92162ade25f21f1d782f32c6e  /srv/certs/selfsigned/calist
54a67dfe2a9fde364a833135d9bfdd3b  /srv/certs/selfsigned/key-nopass.pem
a9bf327511b67100c096aebed5b46c94  /srv/certs/selfsigned/cert.pem
```

#### Checking memcached configuration

Memcached is a service used by `ballot-box` to cache data to avoid hitting
the database and improve performance. Only master's memcached instance is used.
The `ballot-box` process in the slave machines will connect to it.

You can review the following:

**1. Check that the memcached service is running in the master (`prod-s1`)**

```bash
service memcached status

● memcached.service - memcached daemon
     Loaded: loaded (/lib/systemd/system/memcached.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2021-12-02 08:32:13 CET; 3h 37min ago
       Docs: man:memcached(1)
   Main PID: 219127 (memcached)
      Tasks: 10 (limit: 4693)
     Memory: 1.5M
     CGroup: /system.slice/memcached.service
             └─219127 /usr/bin/memcached -m 64 -p 11211 -u memcache -l 127.0.0.1,172.31.43.83 -P /var/run/memcached/memcached.pid

Dec 02 08:32:13 test-500-s1 systemd[1]: Started memcached daemon.
```

Note that the memcached process is listening on (UDP) port 11211 for both local
(127.0.0.1) and the private IP of the master machine (in this example, 
172.31.43.83).

Remember that as described in the
[Network, firewall & DNS](#network-firewall--dns) section, UDP Port 11211 needs
to be open in the private network between the servers for memcached to work 
properly.

**2. Check the statistics of the memcached within the master**

You can see some statistics of the master machine with memcache-top:

```bash
git clone https://github.com/eculver/memcache-top.git
perl memcache-top/memcache-top --instances=127.0.0.1
memcache-top v0.7       (default port: 11211, color: on, refresh: 3 seconds)

INSTANCE                USAGE   HIT %   CONN    TIME    ITEMS   EVICT/s READ/s  WRITE/s
127.0.0.1:11211         0.0%    0.0%    4       1.3ms           0.0     2       639

AVERAGE:                0.0%    0.0%    4       1.3ms           0.0     2       639

TOTAL:          0B/     64.0MB          4       1.3ms           0.0     2       639
(ctrl-c to quit.)
```

**3. Check conectivity to master from a slave machine**

You can use again memcached-top to see if you can connect to the master 
(`prod-s1`) from the slave machine (`prod-s2`), executing memcached-top in
the slave (`prod-s2`):

```bash
git clone https://github.com/eculver/memcache-top.git
perl memcache-top/memcache-top --instances=prod-s1
memcache-top v0.7       (default port: 11211, color: on, refresh: 3 seconds)

INSTANCE                USAGE   HIT %   CONN    TIME    ITEMS   EVICT/s READ/s  WRITE/s
prod-s1:11211           0.0%    0.0%    4       1.3ms           0.0     2       639

AVERAGE:                0.0%    0.0%    4       1.3ms           0.0     2       639

TOTAL:          0B/     64.0MB          4       1.3ms           0.0     2       639
(ctrl-c to quit.)
```

If the connection to `prod-s1` had not been working, it would have shown 
something like:

```bash
perl memcache-top/memcache-top --instances=prod-s1
memcache-top v0.7       (default port: 11211, color: on, refresh: 3 seconds)

INSTANCE                USAGE   HIT %   CONN    TIME    ITEMS   EVICT/s READ/s  WRITE/s
test-500-s3:11211 is DOWN.

AVERAGE:                0.0%    0.0%            0.0ms           0.0     0       0

TOTAL:          0B/     0B                      0.0ms           0.0     0       0
```

**4. Check the correct configuration of `ballot-box` in both master and slaves**

You can check that memcached is being properly configured in `ballot-box``
in both the master:

```bash
grep memcache /home/ballotbox/ballot-box/conf/application.local.conf -C 1

# memcached
ehcacheplugin=disabled
memcached.host="127.0.0.1:11211"
logger.memcached=WARN
```

And within the slave:

```bash
grep memcache /home/ballotbox/ballot-box/conf/application.local.conf -C 1

# memcached
ehcacheplugin=disabled
memcached.host="prod-s1:11211"
logger.memcached=WARN
```

### Promoting a slave to be master

In this example we would be:
1. Creating an election in `prod-s1`.
2. Casting some votes.
3. Promoting the `prod-s2` to master.
4. Continue casting votes.
5. Sucessfully tally the election.

We'll be asuming you know how to perform steps 1 and 2.

#### Step 3: Promoting the `prod-s2` to master

You should first ensure that now `prod-s1` is either demoted to be configured
as a slave or is not receiving any more requests from the client. Otherwise, you
could end up with two different servers acting as Database Masters, and thus
with some votes arriving to one server and not in the other. You don't want 
that.

Thus, if you are using a load balancer, configure it to prevent `prod-s1` from
receiving votes. Otherwise, you could point voters to `prod-s2` reassigning the 
public IP of the server `prod-s1` to `prod-s2`, or something along the lines.

Another option is to temporarily stop the Postgres database of `prod-s1` with:

```bash
sequent@prod-s1:~ $ sudo service postgresql stop
```

Afterwards, to promote `prod-s2` to be the master, change set to `true` the
`config.yml` config variable `config.load_balancing.is_master`, and then execute
ansible for `prod-s2` with the `playbook.sequent.yml` playbook:

```bash
date; time ansible-playbook -i inventory playbook.yml -vvvv 2>&1 | tee log.txt; date
```

This may fail while deploying the `iam` or `oneserver` playbooks with an error similar
to `Could not load auth.User(pk=1): cannot execute UPDATE in a read-only transaction`. 
In that case edit the `playbook.yml` file to only run the `halb` tasks and then redeploy again:


```yaml
---
- hosts: all

  tasks:
    - include_vars: config.yml
    - include_vars: repos.yml

#    - import_tasks: packages.yml
#    - import_tasks: system.yml
#    - import_tasks: hardening/main.yml
#    - import_tasks: sudoers/main.yml
#    - import_tasks: misc-tools/main.yml
#    - import_tasks: eorchestra/main.yml
#    - import_tasks: ballot-box/main.yml
#    - import_tasks: iam/main.yml
#    - import_tasks: sentry/main.yml
#    - import_tasks: sequent-ui/main.yml
#    - import_tasks: oneserver/main.yml
#    - import_tasks: election-verifier/main.yml
    - import_tasks: halb/main.yml
#    - import_tasks: postgres_backups.yml
#    - import_tasks: crontab.yml
```

#### Step 4 (optional): demoting `prod-s1` to slave

If you want to still keep using `prod-s1`, to demote it to slave, change the `config.yml` file and redeploy.

#### Step 5: Continue casting votes

Once step 3 is done, you can continue casting the votes normally if needed.

#### Step 6: Run the tally

To be able to receive successfully the tally, prod-s2 needs to "impersonate"
prod-s1 as the director election authority. This can be done by:

1. removing the prod-s1 eopeer package:

```bash
sequent@prod-a1:~ $ sudo eopeers --remove prod-s1
```

2. adding an alias to /etc/hosts in `prod-a1` config.yml variable **config.hosts**,
   setting it to something like:

```yaml
hosts:
- hostname: prod-s1
  ip: 192.168.50.14 # this should be the ip of the new master
```

3. re-executing ansible in `prod-a1`:

```bash
date; time ansible-playbook -i inventory playbook.yml; date
```


## Troubleshooting
### Problems when creating the election

This is usually a problem with election authorities. Unfortunately, most of the
issues related to election authorities do not get reported to the user nor the
superadmins, although it's also true that most of these issues are solved when
doing the deployment.

To debug and analyze the situation, you can use the following commands in the
election authorities or the sequent server:

1. See if the requests are reaching to nginx reading its log:

    $ sudo tail -f /var/log/nginx/access.log

nginx is in charge of filtering and accepting only https requests from http
clients (i.e. other "eopeers" or "sequent" servers) whose client tls certificate
is installed in the peer.

If requests are being received but rejected with status 401 Unauthorized, it's
usually because:

a) the client TLS certificate has not been correctly installed, in which case
you just need to install the eopeer package (and restart nginx)

b) the client TLS certificate has correctly been installed, but it hasn't been
applied because you forgot to restart nginx with:

    $ service nginx restart

If on the other hand the requests are reaching to nginx but somehow are not
being processed, this is usually because previously an error happened during the
processing of an action of an election and the processing of the action was
never marked to a finished state, and election-orchestra is configured to
execute only one task at once. There's an easy way to solve this isssue; just
restart election-orchestra:

    $ supervisorctl restart eorchestra

2. You should also take a look at election-orchestra log:

    $ sudo supervisorctl tail -f eorchestra

election-orchestra is the software that organizes the creation of the keys
and the tallying of the election inside election authority servers,
communicating with other authorities and the sequent servers.

You might find this kind of error in the eorchestra log:

    ConnectionError: HTTPConnectionPool(host='sequent', port=14443): Max retries exceeded with url: /api/election/103/keydone (Caused by <class 'socket.error'>: [Errno 110] Connection timed out)

This happens when election keys have been created, but the last step, which is
to send the public keys to the requester sequent server, has failed. This might
have happened because the sequent TLS certificate is correctly installed (with
the peer package), but the ip address in the peer package was invalid, for
example because the communication with the sequent server should be through its
private ip-address and it's been configured to be done through its public ip, or
viceversa. If it's the former, what you'd do is:

    # generate the correct sequent peer package, with the private ip address
    sequentServer $ sudo eopeers --show-mine --private > sequent.pkg

    # copy the sequent peer package to the election authorities
    scp blah blah

    # uninstall the old sequent peer package, install the new one and reinstall
    # nginx
    authX $ sudo eopeers --uninstall sequent
    authX $ sudo eopeers --install sequent.pkg && sudo service nginx restart

An alternative way of correcting the ip-address issue is to just add another
alias directly in /etc/hosts. This can be done in the deployment config.yml file
in the "config.hosts" variable.

3. Take a look at ballot-box log:

    $ sudo supervisorctl tail -f ballot-box

ballot-box is the application run in sequent web servers that is in charge of
collecting cast ballots (the electronic ballot box) and also connecting with
election authorities to trigger the creation of election keys and launching
the tally.

When you launch an election, it might inmmediatly fail if the sequent web server
doesn't have the election eopeer packages correctly installed. Please check
that:

a) The authority packages are installed with:

    $ sudo eopeers --list

b) The authority packages are installed with the correct ip-addresses. Bear in
mind that they might be installed with the public-ip address and maybe they
should be installed with the public ip address or viceversa. You can see a peer
package installed ip-address with:

    $ sudo eopeers --list <NAME>

c) check that the director authority peer package, which is the authority that
orchestrates the communication with other authorities, has been installed with
the eopeers "--keystore /home/ballotbox/keystore.jks" parameter. This is
needed because the TLS certificate of this authority needs to be accessible not
only to nginx but also directly to ballot-box.

Also, if you ever need to uninstall the peer package of this election authority,
remember to do --uninstall with the
"--keystore /home/ballotbox/keystore.jks" parameter.

d) Check that you have restarted both nginx and ballot-box if you have
changed any peer package:

    $ sudo supevisorctl restart ballot-box && sudo service nginx restart

e) Check that the list of election authorities are correctly configured in
ballot-box in the file
/home/ballotbox/ballot-box/conf/application.local.conf. This is
/configured during deployment in the "config.authorities", "config.director" and
"config.auths" variables in "config.yml".

4. Bear in mind that if you are using a production environment deployment, you
will have two or more front-end web servers with ballot-box. This means
that any of these servers might connect with the election authorities. The
configuration of the election authorities in that case is that one of them is
deemed to be the master sequent server, and even though any of those sequent servers
(with different private ip addresses) might be the initiator of a request to
the director election authority, the callback url will always point to the
same master sequent server ip address. Also, note that the TLS certificate of
all the sequent servers will be the same.

### The election tally never succeeds

a) If the election public keys are correctly created, this means that the
connection between election authorities and the sequent servers are usually all
ok; except for a couple things:

This usually happens when an election authority that is not the director
election authority hasn't got correctly configured the ip address or TLS
certificate of the sequent server, and thus it has failed to download the list of
ballots from that server. This can be checked looking at the "eorchestra" log
in that election authority:

    authX $ sudo supervisorctl tail -f eorchestra

Or taking a look at nginx log in the sequent server, in which the request would
not reach because it's going to another ip address:

    $ sudo tail -f /var/log/nginx/access.log

Note that this issue can also happen if in the sequent server's nginx log the
request is logged (and thus the server is being reached) but with status
401 Unauthorized because the sequent web server hasn't got properly configured
the TLS certificate of that election authority. The TLS certificate is included
in the peer package of the election authority.

To solve peer packages problems, see section 1.

b) If there is an error during the tally of plaintexts of the ballots (i.e.
after the anonymization and decryption step done by the election authorities).

In some rare cases, if there's an issue in tally-pipes configuration or a bug
in tally-pipes or tally-methods, this might happen. To detect this issue, take
a look at the log in ballot-box when receiving the plaintexts of the
ballots when calculating the tally:

    sequent $ sudo supervisorctl tail -f ballot-box

### Supervisor is not running

If the login page (/admin/login) loads but the form doesn't show up, and when
you analyze traffic some queries (for example  https://sequent/iam/api/auth-event/1/) return
"502 Bad Gateway", this might be because supervisor is dead. This is a bug
that we don't know how to fix yet but has a simple solution: restart supervisor:

You can check that supervisor is down when this happens:


    $ cd sequent
    sequent $ vagrant ssh -c "sudo supervisorctl status"

        unix:///var/run/supervisor.sock no such file
        Connection to 127.0.0.1 closed.

If that's the case, restart it:

    $ cd sequent
    sequent $ vagrant ssh -c "sudo /etc/init.d/supervisor* restart"

Afterwards, supervisor status should return something like this, which is ok:

    $ cd sequent
    sequent $ vagrant ssh -c "sudo supervisorctl status"

        ballot-box                  RUNNING    pid 7665, uptime 0:00:04
        iam                          RUNNING    pid 7663, uptime 0:00:04
        iam_celery                   RUNNING    pid 7667, uptime 0:00:04
        sentry                           RUNNING    pid 7664, uptime 0:00:04
        sentry_celery                    RUNNING    pid 7666, uptime 0:00:04
        Connection to 127.0.0.1 closed.

### Problems provisioning

Sometimes the provisioning fails. This can be related to some syntax changes on
ansible's playbooks format. Check that you have Ansible 2.x or superior. If you
are using vagrant to provision a virtual machine, you need to install ansible 2.x 
on the host machine, not on the guest.

On Ubuntu, you can install the latest version of Ansible by executing:

    $ sudo apt-get install software-properties-common pwgen -y
    $ sudo apt-add-repository ppa:ansible/ansible -y
    $ sudo apt-get update
    $ sudo apt-get install ansible -y

### Issues deploying High Availability / Load Balancer

If you encounter the following issue when deploying:

```bash
fatal: [localhost]: FAILED! => {"changed": true, "cmd": "/usr/lib/postgresql/9.4/bin/repmgr -f /etc/repmgr/repmgr.conf master register", "delta": "0:00:00.009032", "end": "2020-12-30 10:16:05.318695", "failed_when_result": true, "msg": "non-zero return code", "rc": 6, "start": "2020-12-30 10:16:05.309663", "stderr": "[2020-12-30 10:16:05] [ERROR] connection to database failed: fe_sendauth: no password supplied", "stderr_lines": ["[2020-12-30 10:16:05] [ERROR] connection to database failed: fe_sendauth: no password supplied"], "stdout": "", "stdout_lines": []}
```

It's usually related to a misconfiguration of the `/etc/hosts` file. Please 
verify that when you execute within the deployed machine `ping <machine-name>` 
it should be answering with the private ip address you configured in 
`config.private_ipaddress`. Edit `/etc/hosts` to fix that if it is not.

### Correctly recreating the TLS certificate

Sometimes a misconfiguration of the `config.hostname` or 
`config.ballot-box.domain` deployment variables happen. For example, you 
might have used the wrong DNS or hostname by error, or maybe you need to change 
it to their new value(s). 

Here we will document what needs to be done depending on the type of machine 
that is affected if this happens. 

Please review the [Connecting Authorities section](#connecting-authorities) to
understand the general procedures when connecting the authorities and the
sequent servers.

#### For an election authority

You need to set the `config.yml` variables (`config.hostname` and/or 
`config.ballot-box.domain`) to their new value.

You also need to set the `config.cert.force_create` to `'true'` and re-deploy. 
This will force regeneration of the TLS self-signed certificate of the machine.
After redeploying, it's **important** to set back `config.cert.force_create` to 
the default value (`'false'`). Otherwise, in future redeployments you might 
forget about this setting but still re-generate the TLS self-signed certificate,
and thus other machines will stop working with the redeployed machine because
they won't have this new certificate installed.

After redeploying the affected machine, you just need to uninstall the old
certificate in the connected peers and install the new one. Let's say that in
our example we have a deployment with three machines, `focal-s1`, `focal-a1` and
`focal-a2` and we are changing the hostname of the election authority `focal-a2`
to `focal-a3`.

These would be the steps:
1. Obtain the new eopeer package executing `sudo eopeers --show-mine` (or 
`sudo eopeers --show-mine --private-ip` if it's going to be used in a local 
network). Write that certificate in a file called `focal-a3.pkg` that we will
use later, both in `focal-s1` and `focal-a1`.
2. Uninstall the previous eopeer package for `focal-a2` in `focal-s1` and 
`focal-a1` executing `sudo eopeers --uninstall focal-a2`. Note that if the 
election authority being uninstalled is the master authority in the sequent server
and was installed using `--keystore /home/ballotbox/keystore.jks`, then the
uninstall in `focal-s1` also needs to have that parameter to remove the 
certificate also from there. In that case, the command to execute would be
`eopeers --uninstall focal-a2 --keystore /home/ballotbox/keystore.jks`.
3. Install the new eopeer package in for `focal-a3` in `focal-s1` and 
`focal-a1` executing `sudo eopeers --install focal-a3.pkg`. Again, if this 
authority is to be the master authority in the sequent server, then append
`--keystore /home/ballotbox/keystore.jks` to that command when being 
executed in `focal-s1`.

#### For an sequent server

The process with an sequent server is similar but a bit more nuanced because the
certificate lies in multiple places. Before redeploying, you need to uninstall
all the eopeers installed in the server using `eopeers --list` and 
`eopeers --uninstall <hostname> [<hostname> ..]`.

Then, you need to remove the files `/home/ballotbox/keystore.jks` and
`/home/ballotbox/certs.p12`. Afterwards, you can follow the instructions
in the previous section to redeploy and redistribute the certificate to the
peers. Finally, you need to re-install the certificates of the peers in the
sequent server again.
