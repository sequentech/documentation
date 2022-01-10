---
id: release-howto
title: Release Howto
sidebar_label: Release Howto
slug: /contribute/release-howto
---

In this howto we will explain how can a new release be published step by step.
Please refer to the [Release Lifecycle](../contribute/release-lifecycle) document to
know more about when to do what type of release.

# Setup

Releases are managed using the 
[agora-release project](https://github.com/agoravoting/agora-release). Each 
repository can be released independently.

Please install and setup agora-release as described in the repository's
README file.

# Release commands

Publishing a release is actually compromised of multiple (and sometimes 
optional) steps:

1. Changing the version in the code

The code of the software platform itself usually has some reference to the
release. As we are creating a new release, this code needs to be updated.

2. Creating a release branch

For example `4.0.x` branch, so that other patch releases fork from there.
This branch needs to be created locally and pushed to the public repository.

3. Creating a release git tag

Creating the git tag and pushing it to the repository.

4. Publishing a github release.

We can do all this in one go with the following command:

```bash
./release.py \
    --version 4.0.0-beta.1 \
    --change-version \
    --base-branch master \
    --create-branch 4.0.x \
    --create-tag \
    --release-title "4.0.0-beta.1 release" \
    --generate-release-notes \
    --prerelease \
    --create-release \
    --path ../agora-gui-elections
```

Also note that the `release.py` script in this configuration will:
- Stash your current changes in the `agora-gui-elections` repository
- Remove all untracked files and directories (except those ignored by `.gitignore`)
- Create a branch from origin/master, commit the changes and force push it to
the origin
- Create tag from the just created commit and force push it to the origin
- Create a release from the just created tag

If you are releasing in an existing branch for a minor release, the command
would probably be more similar to:

```bash
./release.py \
    --version 4.0.0-beta.2 \
    --change-version \
    --base-branch 4.0.x \
    --push-current-branch \
    --create-tag \
    --release-title "4.0.0-beta.2 release" \
    --previous-tag-name '4.0.0-beta.1' \
    --generate-release-notes \
    --prerelease \
    --create-release \
    --path ../agora-gui-elections
```

Note that here:
- We are not creating the `4.0.x`  branch, because it already exists. Instead,
we are pushing current branch (4.0.x, set with `--base-branch 4.0.x`).
- We are specifying `--previous-tag-name '4.0.0-beta.1'`, because otherwise the
github-generated release notes would use the most recent release as a base, and
that might not be what we want as the previous release might have been for 
a different major version.

To do a full plataform release, these are all the projects that need to be 
released using the previous command:
- agora-gui-common
- agora-gui-admin
- agora-gui-elections
- agora-gui-booth
- agora_elections
- agora-dev-box
- agora-tally
- agora-results
- agora-verifier
- frestq
- election-orchestra
- authapi
- agora-tools
- vfork
- admin-manual
- agora-airgap
- agora-release

Note that the order listed above is important for automatic unit tests. For
example, `agora-verifier` uses `agora-results`, which in turn depends on
`agora-tally`. Please do the releasing in order. If you don't, you'll get some
github actions failed. If this happens, just rerun the github actions after all
the releases have been done and that should fix the problem.

# Release Testing and version schedule

For any major release, first a `<major>.<minor>.<patch>-beta.1` should be created. 
After this has been done for the whole platform, automatic unit testing
should work. Also, manual testing (for those tests that are not yet 
automated) should be performed, and enough time for doing the manual testing 
[TBD] and bug fixing should be allocated.

After this bugfixing, either a new beta or a final release should be created,
with all the bugfixes being applied in the release branch which should be
called `<major>.<minor>.x`. This should happen after 7 or more days after the 
initial beta. A second beta (or even a third one and so on) can happen if the
previous beta release was not deemed to be stable enough even after some 
bugfixes have been applied.

Also, even if no bugfix is applied, a new final (with `--prerelease`) release
should be created, named `<major>.<minor>.0`, with patch version `0`. 

# Future

In the future, we should automate the release management command and include
them within each different project instead of having a separate repository to
handle this.

Some tools we might take a look at to do so:
- https://github.com/marketplace/actions/automatic-releases

Also we should automate the releases for the admin-manual itself, allowing
having multiple version of the documentation, to match with the releases.