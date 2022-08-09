---
sidebar_position: 0
title: Contribution Guide
---

## Introduction

We are glad you are interested in contributing to the Sequent Tech project. Our 
aim is to make your contribution as easy as possible. To make them easy, we 
have detailed here the guidelines that you need to follow to contribute.

## Legal

We manage a lot of open source repositories, and to make community contributions 
legal we have setup a **Contributor License Agreement (CLA)** to have agreements 
with everyone who contributes. With the CLA, you give us permission over your 
contributions. You still own the copyright over your work — so you retain the 
right to re-license, modify your code and use your work elsewhere if you want.

To complete the CLA and become a contributor you need to:

1.  Read the [CLA](./assets/AV_CLA_1.0.pdf).
2.  Print the CLA.
3.  Fill the details requested in the CLA.
4.  Sign the printed CLA, marking all the pages.
5.  Scan the CLA.
6.  Send the signed and scanned CLA in PDF form to [legal@sequentech.io](mailto:legal@sequentech.io)

Once we have received the signed CLA, we'll review the request. You will only 
need to do this once. Contact us at [legal@sequentech.io](mailto:legal@sequentech.io) 
if you have anything doubt about the procedure.

## Branches and feature branches

In Sequent Tech repositories we develop changes and new features in a new 
**feature branches**. The a pull request is used to merge them into the 
**master** branch.

Sequent Tech repositories accept bugfix pull requests (PRs) from your bug fix 
branch or fork to the **master** branch of the Sequent Tech git repository. 
Sequent Tech repositorites also accept new features PRs. For a feature PR to 
be accepted, design discussions needs to happen. Design discussion can take 
one of two forms:
1. A feature request in the github issue tracker has been marked as approved. 
Feature requests need to be accompanied by full design specification.
2. the PR must be accompanied by a full design specification and this spec is 
later approved in the open design discussion inside the PR.

Full Design specification means:

- If the feature affects an API, the API is fully defined and documented.
- If the feature affects an user interface, the user interface behavior and 
looks is fully defined and documented.

Features are evaluated against their complexity, impact on other features, 
roadmap alignment, and maintainability. These are some of the requirements for 
a PR to be accepted:

- Include a description of what your change intends to do.
- Include a detailed step by step description of how to reproduce the current 
behaviour (if any), and how -reproduce the new behaviour.
- Be a child commit of the latest commit in the **master** branch.
- Pass all unit tests.
- Have clear, useful and descriptive commit messages.
- Include appropiate copyright headers in each file.
- The requester has signed the CLA.
- Include adequate tests:
 - At least one test should fail in the absence of your non-test code changes. 
 If your PR does not  -ch this criteria, please specify why it can't be done.
 - Tests should include reasonable permutations of the target fix/change.
 - The unit tests code coverage cannot decrease with the PR.

Submissions that have met these requirements will be assigned to a Sequent 
company team member for additional testing. Submissions must meet functional 
and performance expectations. This means you may be asked to fix and resubmit
your pull request against a new open test case if it fails one of these tests.

The Sequent Tech project is an organically grown codebase. Follow the general
coding conventions adhered to in the code surrounding your changes. Pull
requests that reformat the code will usually not be accepted.

## Releases

The **master** branch will be the latest version of the project. Specific 
releases (for example 4.0.0) will be marked with git tags. Currently we don't
maintain older versions of the software because we currently lack the resources
to do it. Please ensure you use the latest release or **master** to ensure you
are up to date.
