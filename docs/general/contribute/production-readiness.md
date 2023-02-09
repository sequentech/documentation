---
sidebar_position: 5
title: Production Readiness Checklist
---

## Introduction

Sequent's Production Readiness Checklist (PRC) contains a list of criteria that
needs to be met to ensure the software is ready for production.

There are two different PRCs:
1. Software PRC: criteria that needs to be met for a production release.
2. Deployment PRC: criteria that needs to be met for using a production release
in a specific deployment.

Since the development of new modules is currently ongoing, we will be applying
the PRC only to the newly developed modules for a smooth transition. 

As a reference for what is a PRC, what are its benefits and what can be
included, please take a look at this reference material:
- https://www.opslevel.com/blog/production-readiness-in-depth/
- https://www.cortex.io/post/how-to-create-a-great-production-readiness-checklist
- https://www.techtarget.com/searchsoftwarequality/tip/A-production-readiness-checklist-for-software-development
- https://gruntwork.io/devops-checklist/

## Software PRC

The Software PRC defines the criteria that needs to be met for a production
release.

This checklist is grouped into categories. You can access the source code of
this page to copy and paste the list markdown syntax and paste it into a Github
issue before the release:

**Documentation**

- [ ] **[Code Owners]** are identified.
- [ ] **README**: The project's README contains all the basic information for
  the project and links for further information.
- [ ] **Documentation**: There's appropiate and complete published project
  documentation, with tutorials, How-tos, Reference and Explanation
  categorizations following the [Divio documentation structure].

**Security Automation**

- [ ] **Continuous Integration**: When commits are pushed, Github Actions are
  triggered to perform builds, tests and other automatic checks.
- [ ] **Release automation**: Release publishing is automated and triggered
  using Github Actions. This includes automation of the generation of the
  Release Notes.
- [ ] **Unit tests**: There are unit tests and they run on the CI pipeline.
- [ ] **Integration tests**: If appropriate, there are integration tests and
  they run on the CI pipeline.
- [ ] **Broken tests**: Failing tests break the CI pipeline.
- [ ] **Coverage**: Tests coverage is monitored in the CI pipeline.
- [ ] **Static analysis**: static code analysis tools are configured to run in
  the CI pipeline.
- [ ] **Code format and lint**: standard code format and linting tools is
  checked to run in the CI pipeline.
- [ ] **CI Dependencies vulnerabilities**: Dependencies are checked
  automatically in the CI pipeline against vulnerable versions.

**Repository security**

- [ ] **Repo permissions**: Repository permissions is set using Github teams
  ([@Admins] and [@Devs] respectively).
- [ ] **Dependabot alerts**: Dependabot is configured to send alerts regularly
  (at least every week) when a dependency has a vulnerability in supported 
  branches.
- [ ] **Security policy**: A [security policy] is configured in the repository.
  The security policy defines what is a vulnerability and how to report it and what is
  the fixing and disclusure process.

**Build and development**

- [ ] **Reproducible builds**: The project uses Nix when possible to generate
  reproducible builds.
- [ ] **Dev Containers**: The project is configured to use Dev Containers to
  make it as easy and reproducible as possible to develop and debug.

**Compliance**

- [ ] **Dependencies licenses**: Dependencies are checked automatically in the
  CI pipeline to have compatible/allowed licenses.
- [ ] **Code license**: License for each file is checked in the CI pipeline with
[REUSE].
- [ ] **Compatibility**: Compatibility with browsers/platforms is checked in the
  CI pipeline.

**Other**
- [ ] **Benchmarks**: An automated benchmark suite should be run in the CI
  pipeline, allowing it to be the base for future load/stress testing in the
  Deployment PRC.
- [ ] **Accessibility**: The interface is fully WCAG 2.1 compliant, according to
  the [Accessibility Guide](accessibility-guide.md).

## Deployment PRC

TODO


[Code Owners]: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners
[Divio documentation structure]: https://documentation.divio.com/introduction/
[REUSE]: https://reuse.software/
[security policy]: https://docs.github.com/en/code-security/getting-started/adding-a-security-policy-to-your-repository
[@Admins]: https://github.com/orgs/sequentech/teams/admins
[@Devs]: https://github.com/orgs/sequentech/teams/devs