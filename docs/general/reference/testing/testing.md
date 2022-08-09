---
sidebar_position: 2
title: E2E Election Testing
---

Sequent platform contains a set of E2E (End-to-End) Integration Tests that test
the whole Sequent deployment. You can launch this kind of tests directly from the
Admin console and view the results through, using the `Actions` > 
`Launch self-test task..` command.

<video width="100%" controls>
  <source
    src={require('./assets/tasks-howto.mp4').default}
    type="video/mp4"
    />
  Your browser does not support the video tag.
</video>

In the video above you can see the normal operation of launching a self-test and 
executing it. For demonstration purposes, we intentionally show the workflow of
cancelling a self-test and what the results are.

A self-test executes multiple end-to-end tests. Among them:

- Creating the election.
- Creating a set of ballots.
- Casting the ballots using the voting booth interface.
- Tallying the election.
- Obtaining the election results.

There are other ways to test specific parts of the process. For example if you
only want to test the process in relation with the election authorities, you can
use the eocommand as explained in the [corresponding Deployment Guide section](../../guides/deployment#test-the-connection-between-the-authorities).