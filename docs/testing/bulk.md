---
id: bulk
title: Bulk Election Testing
sidebar_label: Bulk Election Testing
slug: /testing/bulk
---

This document describes how to run a somewhat realistic comprehensive election 
test, which includes the following steps:
1. Creating the election
2. Creating a set of ballots
3. Casting the ballots using a realistic user interface test
4. Tallying the election

We will be able to measure all and each of the steps, so it can be used for 
benchmarking and stress testing.

There are other ways to test specific parts of the process. For example if you
only want to test the process in relation with the election authorities, you can
use the eocommand as explained in the [corresponding Deployment Guide section](../deployment/guide#test-the-connection-between-the-authorities).