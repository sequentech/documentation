---
sidebar_position: 9
title: Cron Tasks Guide
---

Using `config.yml` from `deployment-tool`, you can configure the system to schedule jobs using [Cron](https://en.wikipedia.org/wiki/Cron). This can be useful to perform election tasks such as:

- Starting/Stopping an election at a certain time.
- Tallying an election at a certain time.
- For elections with progressive tallies, updating the result with certain frequency.

# Schedule starting an election

In this example we schedule a server to start an election (with id `4`) at a specific time by 
using the `admin.py` tool from the `ballot-box` project. Edit the `config.crontab_tasks` variable
in the `config.yml` file of the web server with this configuration:

```yaml
  crontab_tasks:
  - name: start-election
    # job is the command to be run. The command should not contain line
    # breaks.
    job: 'bash -c "source /home/ballotbox/tenv/bin/activate; /home/ballotbox/ballot-box/admin/admin.py auth_start 4 >> /home/ballotbox/crontab.log 2>&1"'
    # The specific user whose crontab should be modified.
    user: 'ballotbox'
    # minute when the job should run ( 0-59, *, */2, etc )
    minute: 0
    # hour when the job should run ( 0-23, *, */2, etc )
    hour: 15
    # Day of the month the job should run ( 1-31, *, */2, etc )
    day: '17'
    # day of the week that the job should run ( 0-6 for Sunday-Saturday, *, etc )
    weekday: '*'
    # Month of the year the job should run ( 1-12, *, */2, etc )
    month: '9'
  ``````

Ensure that the line `- import_tasks: crontab.yml` in the `playbook.yml` file is uncommented.
Then deploy the configuration with ansible:

```
    date; time unbuffer ansible-playbook -i inventory playbook.yml -vvvv 2>&1 | tee log.txt; date
```

# Tally an election every 5 minutes

In this example the web server will be tallying an election every 5 minutes,
to update the results as new votes are cast.

First you need to enable progressive tallying. This means you'll be able to perform multiple tallies
for the same election. Every time a new tally is performed, the data from the previous tally will be
erased. Progressive tallying is required for certain types of elections, but be aware of its security
implications.

The first step is to set the `config.enable_multiple_tallies` variable in the `config.yml` file
to `True` and deploy this configuration in the master web server and all authorities.

Then you also need to add a cron task to the `config.yml` file in the master web server. In this case
the election id is `34562754` and it has two children elections `34562755,34562756`. The task will run
every 5 minutes and you can read the log at `/home/ballotbox/crontab.log`.

```yaml
  crontab_tasks:
  - name: progressive-tally
    # job is the command to be run. The command should not contain line
    # breaks.
    job: 'bash -c "source /home/ballotbox/tenv/bin/activate; /home/ballotbox/ballot-box/admin/admin.py --children-election-ids 34562755,34562756 --force-tally force-all --mode active trigger_tally 34562754 >> /home/ballotbox/crontab.log 2>&1"'
    # The specific user whose crontab should be modified.
    user: 'ballotbox'
    # minute when the job should run ( 0-59, *, */2, etc )
    minute: '*/5' 
    # hour when the job should run ( 0-23, *, */2, etc )
    hour: '*'
    # Day of the month the job should run ( 1-31, *, */2, etc )
    day: '*'
    # day of the week that the job should run ( 0-6 for Sunday-Saturday, *, etc )
    weekday: '*'
    # Month of the year the job should run ( 1-12, *, */2, etc )
    month: '*'
  ``````