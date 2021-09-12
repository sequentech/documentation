---
id: guide
title: Deployment Guide
sidebar_label: Deployment Guide
slug: /deployment/guide
---

This document describes the complete deployment of an Agora Voting project
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
and execute for each of the machines in the deployment (agora master, slave,
auth1, auth2..).

### Machine provisioning

As mentioned earlier, you should provision each VM with Ubuntu 16.04 LTS,
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
if it hasn't been created yet. We'll use **agora** for that:

```
root@prod-s1 # adduser agora agora --gecos "FullName,RoomNumber,WorkPhone,HomePhone" --disabled-password
```

Afterwards, you should add the permissions that the agora user requires for
administration and deployment.

This is how you do it in the two servers that will be used as authorities:

```
root@prod-s1 # wget https://raw.githubusercontent.com/agoravoting/agora-dev-box/next/doc/production/auth.sudoers
root@prod-s1 # cat auth.sudoers >> /etc/sudoers
```

And this is how you do it for the two other servers that will be used as master
and slave machines:

```
root@prod-s1 # wget https://raw.githubusercontent.com/agoravoting/agora-dev-box/next/doc/production/agora.sudoers
root@prod-s1 # cat agora.sudoers >> /etc/sudoers
```

### Install and configure deployment dependencies

Within the provisioned machine (for example `prod-s1`), there are a series of 
steps required for a  proper and successful deployment. We will from now on 
assume we are using the root user (`sudo -s`) inside the provisioned VM to 
execute all the tasks.

We will first do some updates, install some dependencies, configure the
timezone and reboot:

```bash
ln -sf /usr/share/zoneinfo/Europe/Madrid /etc/localtime
dpkg-reconfigure -f noninteractive tzdata
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
git clone https://github.com/agoravoting/agora-dev-box.git $NAME
cd $NAME
git checkout master

# needed for ansible. If you are deploying an election authority use
# doc/production/playbook.auth.yml instead
echo "localhost ansible_connection=local" > inventory 
cp doc/production/playbook.agora.yml playbook.yml

# copy the config file to /root/$NAME/root.yml
cp /home/ubuntu/config.yml config.yml

# update and set random passwords. NOTE: Do not do that for the slave machines, 
# it needs to be using the same passwords as the master.
DATE=$(date); cp config.yml "config_base_$DATE.yml"; python3 helper-tools/manage_config_pwd.py -c "config_base_$DATE.yml" -l 40 -o config.yml

pip install ansible==2.9.18
```

After this, one should edit the config.yml file and edit the appropiate values,
please read below about how to do that. 

For the slave machine (for example `prod-s2`) one would copy the config.yml 
from `prod-s1` and not change the the passwords with the `manage_config_pwd.py`
script. 

Even for the election authorities' machines, it's easiest to just copy the
`config.yml` file from `prod-s1` and use it as a base. However, we provide 
sample production config files for both agora and auth machines in the 
`doc/production` directory.

## Web servers master & slave deployment

Both machines prod-s1 and prod-s2 should be setup with the same passwords,
because they will be a replica of each other: the slave will be in hot standby
configuration. The only difference between the configuration file of **prod-s1**
and **prod-s2** should be the following config keys:

* config.hostname
* config.public_ipaddress
* config.private_ipaddress
* config.load_balancing.repmgr_node_id

Please read the comments and instructions inside the configuration file
and accordingly. Both machines for deploy purposes should have the
**config.load_balancing.is_master** set to **true** and The
**config.load_balancing.master.slave_postgres_ssh_keys** and
**config.load_balancing.master.slave_agoraelections_ssh_keys** set to **[]**
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

If you have assigned a FQDN to for example 'agora.example.com' to the machine
and the name resolution is set up correctly in your personal machine via DNS or
by adding 'agora.example.com ipaddr' to your '/etc/hosts', you should be able to login
as an administrator entering in 'https://agora.example.com/admin/login' using
the credentials you specified in the config.yml file.

We recommend to use the /etc/hosts file to change the ip address of the
webserver from prod-s1 to prod-s2 ip easily for testing purposes.

### Configure the slave

To configure prod-s2 as a slave, we need to import the ssh keys from the
agoraelections and postgres users in ***prod-s1*** to add them in ***prod-s2**.

To get the keys execute these commands in ***prod-s2***:

```bash
sudo -u agoraelections cat /home/agoraelections/.ssh/id_rsa.pub
sudo -u postgres cat /var/lib/postgresql/.ssh/id_rsa.pub
```

Copy those keys and set them in the **prod-s1** **config.yml** file in
the variables **config.load_balancing.master.slave_agoraelections_ssh_keys**
and **config.load_balancing.master.slave_postgres_ssh_keys**.

Then, execute again ansible in ***prod-s1*** to apply the changes:

```bash
date; time ansible-playbook -i inventory playbook.yml; date
```

After that, then you can change the **config.yml** for **prod-s2** to set
the variable **config.load_balancing.is_master** to **false**,
**config.load_balancing.slave.master_hostname** to the hostname of **prod-s1** 
and **config.load_balancing.repmgr_node_id** to **2**.

If your machine is behind a proxy, you need to specify that in the
**config.has_https_proxy** variable.

Then you can run again ansible in **prod-s2** to apply the changes, using the
slave specific playbook, which can only work after having executed
**playbook.agora.yml**:

```bash
root@prod-s2:/root/prod-s2/ $ cp doc/production/playbook.slave.yml playbook.yml
root@prod-s2:/root/prod-s2/ $ time sudo ansible-playbook -i inventory playbook.yml
```

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

Execute the following in **prod-a1**:

```bash
root@prod-a1:/root/prod-a1/ $ eopeers --show-mine
```

Copy the output to a file in **prod-a2**, then install it:

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
root@prod-a1:/root/prod-a1/ $ eotest full --vmnd --vcount 100
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

The following commands should be executed in both **prod-s1** and **prod-s2**
machines:

Create **prod-a1.pkg** and **prod-a2.pkg** files with the configuration of both
authorities. Then install them:

```bash
root@prod-s1:/root/prod-s1/ $ eopeers --install prod-a1.pkg --keystore /home/agoraelections/keystore.jks
root@prod-s1:/root/prod-s1/ $ eopeers --install prod-a2.pkg
root@prod-s1:/root/prod-s1/ $ service nginx restart
```

Before completion, the installation of the certificate of the **prod-s1** and
**prod-s2** servers needs to be installed in the election authorities, because
even though i'ts the same TLS cert, they have different hostnames. So copy
them (get it with "eopeers --show-mine") to the authorities and install them:

```bash
root@prod-a1:/root/prod-a1/ $ eopeers --install prod-s1.pkg
root@prod-a1:/root/prod-a1/ $ eopeers --install prod-s2.pkg
root@prod-a1:/root/prod-a1/ $ service nginx restart
```

### Create a test election

Go to https://prod-s1/admin/login and create a test election. Then execute
the following to create some votes. Change '2' in the following commands with
your election number:

```bash
root@prod-s1:/root/prod-s1/ $ su - agoraelections
agoraelections@prod-s1:~ $ source ~/env/bin/activate
agoraelections@prod-s1:~ $ cd ~/agora-elections/admin
agoraelections@prod-s1:~ $ export ELECTION_ID=2
agoraelections@prod-s1:~/agora-elections/admin/ $ ./admin.py dump_pks $ELECTION_ID
agoraelections@prod-s1:~/agora-elections/admin/ $ echo '[1,0]' > votes.json
agoraelections@prod-s1:~/agora-elections/admin/ $ ./admin.py encrypt $ELECTION_ID
```

start the election, cast the votes, stop it and tally it:

```bash
agoraelections@prod-s1:~/agora-elections/admin/ $ ./admin.py start $ELECTION_ID
agoraelections@prod-s1:~/agora-elections/admin/ $ ./admin.py cast_votes $ELECTION_ID
agoraelections@prod-s1:~/agora-elections/admin/ $ ./admin.py count_votes $ELECTION_ID 
# it will output: "2 (2)" which means 2 votes cast, 2 unique voters
agoraelections@prod-s1:~/agora-elections/admin/ $ ./admin.py stop $ELECTION_ID
agoraelections@prod-s1:~/agora-elections/admin/ $ ./admin.py tally $ELECTION_ID
```

### Check high availability and load balancing

The high availability configuration in this configuration basically means that
**prod-s2** is a server that is replicating in a hot standby mode the database of
**prod-s1**. **prod-s2** has also replicated everything needed to be able to
change the server from slave to master at any time.

To test that **prod-s2** is correctly deployed as a slave, you can directly
connect to https://prod-s2/admin/login and it should allow you to access and work
normally, because **prod-s2** is a slave that also works as a web server
(authapi, agora-elections) connected directly to the **prod-s1** master database
server.

If you list the files inside the datastore and the server certificate in
both **prod-s1** and **prod-s2**, it should list the same files:

```bash
root@prod-s1:/root/prod-s1/ $ sudo -u agoraelections find /home/agoraelections/datastore/ -type f | xargs md5sum
05b76ec89dd7a32b76427d389a5778c1  /home/agoraelections/datastore/public/2/pks

root@prod-s1:/root/prod-s1/ $ find /srv/certs/selfsigned/ -type f | xargs md5sum
d811c3e92162ade25f21f1d782f32c6e  /srv/certs/selfsigned/calist
54a67dfe2a9fde364a833135d9bfdd3b  /srv/certs/selfsigned/key-nopass.pem
a9bf327511b67100c096aebed5b46c94  /srv/certs/selfsigned/cert.pem
```

### Test changing a slave to be a master and do a tally

This requires to create an election in **prod-s1** and cast some votes, then
launch the tally successfully from within the authorities.

To promote **prod-s2** to be a master, change set to **true** the config.yml
config variable **config.load_balancing.is_master**, then execute again ansible:

```bash
date; time ansible-playbook -i inventory playbook.yml; date
```

To be able to receive successfully the tally, prod-s2 needs to "impersonate"
prod-s1 in the director election authority. This can be done by:

1. removing the prod-s1 eopeer package:

```bash
agora@prod-a1:~ $ sudo eopeers --remove prod-s1
```

2. adding an alias to /etc/hosts in **prod-a1** config.yml variable **config.hosts**,
   setting it to something like:

```yaml
hosts:
- hostname: prod-s1
  ip: 192.168.50.14 # this should be the ip of the new master
```

3. re-executing ansible in **prod-a1**:

```bash
date; time ansible-playbook -i inventory playbook.yml; date
```

## Troubleshooting

For troubleshooting please read the [Deployment Troubleshooting](./troubleshooting).
