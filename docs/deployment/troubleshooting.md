---
id: troubleshooting
title: Deployment Troubleshooting
sidebar_label: Deployment Troubleshooting
slug: /deployment/troubleshooting
---

## Problems when creating the election

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

## The election tally never succeeds

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

## Supervisor is not running

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

## Problems provisioning

Sometimes the provisioning fails. This can be related to some syntax changes on
ansible's playbooks format. Check that you have Ansible 2.x or superior. If you
are using vagrant to provision a virtual machine, you need to install ansible 2.x 
on the host machine, not on the guest.

On Ubuntu, you can install the latest version of Ansible by executing:

    $ sudo apt-get install software-properties-common pwgen -y
    $ sudo apt-add-repository ppa:ansible/ansible -y
    $ sudo apt-get update
    $ sudo apt-get install ansible -y

## Issues deploying High Availability / Load Balancer

If you encounter the following issue when deploying:

```bash
fatal: [localhost]: FAILED! => {"changed": true, "cmd": "/usr/lib/postgresql/9.4/bin/repmgr -f /etc/repmgr/repmgr.conf master register", "delta": "0:00:00.009032", "end": "2020-12-30 10:16:05.318695", "failed_when_result": true, "msg": "non-zero return code", "rc": 6, "start": "2020-12-30 10:16:05.309663", "stderr": "[2020-12-30 10:16:05] [ERROR] connection to database failed: fe_sendauth: no password supplied", "stderr_lines": ["[2020-12-30 10:16:05] [ERROR] connection to database failed: fe_sendauth: no password supplied"], "stdout": "", "stdout_lines": []}
```

It's usually related to a misconfiguration of the `/etc/hosts` file. Please 
verify that when you execute within the deployed machine `ping <machine-name>` 
it should be answering with the private ip address you configured in 
`config.private_ipaddress`. Edit `/etc/hosts` to fix that if it is not.

## Correctly recreating the TLS certificate

Sometimes a misconfiguration of the `config.hostname` or 
`config.ballot-box.domain` deployment variables happen. For example, you 
might have used the wrong DNS or hostname by error, or maybe you need to change 
it to their new value(s). 

Here we will document what needs to be done depending on the type of machine 
that is affected if this happens. 

Please review the [Connecting Authorities section](./guide#connecting-authorities)
of the [deployment guide](./guide) to understand the general procedures when connecting
the authorities and the sequent servers.

### For an election authority

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

### For an sequent server

The process with an sequent server is similar but a bit more nuanced because the
certificate lies in multiple places. Before redeploying, you need to uninstall
all the eopeers installed in the server using `eopeers --list` and 
`eopeers --uninstall <hostname> [<hostname> ..]`.

Then, you need to remove the files `/home/ballotbox/keystore.jks` and
`/home/ballotbox/certs.p12`. Afterwards, you can follow the instructions
in the previous section to redeploy and redistribute the certificate to the
peers. Finally, you need to re-install the certificates of the peers in the
sequent server again.
