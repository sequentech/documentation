---
sidebar_position: 2
title: Release How-to
---

In this how-to we will explain how can a new release be published step by step.
Please refer to the [Release Lifecycle] document to know more about when to do
what type of release.

## Setup

Releases are managed using the [release-tool project]. Each repository can be
released independently.

Please install and setup release-tool as described in the repository's
README file:
- We typically release using the latest version of the release-tool
which is in `master` branch.
- The installation is also very simple, just download the repository and install
with pip the requirements in a virtualenv.
- The setup requires creating a github token that has permissions to perform
the actions related to the release process.

## Preflight checklist: Before creating a release

1. Please review the [Production Readiness Checklist] and ensure everything is
ready to create a release. 
2. Also, review the [Release Lifecycle] to know when to create what kind of
release.
3. The release scripts rely on Pull Requests referring to any parent issue with
a line `Parent issue: https://path/to/parent/issue/1`. If you are not sure this
has been done for all PRs, use the `update_parent_issue.py` script to solve it.
It will look for closed issues in the [meta repository] (where usually parent
issues land) and add the `Parent issue: http:/...` line to all linked PRs.

## Release procedure overview

Publishing a release is compromised of multiple  steps, done for each of the 
platform repositories:

1. Changing the version in the code

The code of the software platform itself usually has some reference to the
release. As we are creating a new release, this code needs to be updated.

2. Creating a release branch

For example `5.0.x` branch, so that other patch releases fork from there.
This branch needs to be created locally and pushed to the public repository. We
use [Release Flow] branching methodology.

3. Creating a release git tag

Creating the git tag and pushing it to the repository.

4. Publishing a github release.

5. Generating the comprehensive release notes.

Each platform repository has now a release, but we want to also generate a
comprehensive release notes that merge all the release notes from each platform
repository without duplication.

6. Removing old and stale release branches. See the [Release Lifecycle] to
know more about release support lifecycle.

## Release commands

### 1. Create the release

You can launch the release of the Sequent platform repositories with the 
following script, executing steps 1 to 4 detailed previously:

```bash
export REPOS=(common-ui admin-console election-portal voting-booth ballot-box deployment-tool tally-methods tally-pipes election-verifier frestq election-orchestra iam misc-tools mixnet documentation ballot-verifier release-tool)

for i in $REPOS
do
    ./release.py \
        --version 7.4.0 \
        --change-version \
        --base-branch '7.4.x' '7.3.x' \
        --push-current-branch \
        --create-tag \
        --release-title "7.4.0 release" \
        --previous-tag-name '7.3.0' \
        --generate-release-notes \
        --create-release \
        --path ../$i
done
```

Notes:
1. We specified multiple branch names with `--base-branch`. This is 
because in some of the repositories, there might not be any new commits or they
might be in the previous `7.3.x` branch. The first name of the base-branch will
always indicate the final branch to push, and it will use that branch as a base
if it does exist. If it's not yet created, the release script will try to use
the other given branch names as a base, in order.
2. We are doing a full release of the full Sequent platform. This requires
having cloned all the related repositories locally in the appropriate path (see
the `../$i` in the script).
3. It's wise to try first only with one of the repositories to see that
everything goes as expected. You can change the first line to 
`export REPOS=(common-ui)` for example to give it a try.
4. Note that the order of the platform repositories listed in the `export REPOS`
line is important for automatic unit tests. For example, `election-verifier`
uses `tally-pipes`, which in turn depends on `tally-methods`. Please do the
releasing in order. If you don't, you'll get some github actions failed. If this
happens, just rerun the github actions after all the releases have been done and
that should fix the problem.
5. You can add the `--prerelease` to tag a release as a prerelease such as a
beta. This command also support more options, use `--help` to view them all.

The `release.py` script in this configuration will:
- Stash your current changes in the `election-portal` repository
- Remove all untracked files and directories (except those ignored by `.gitignore`)
- Create a branch from origin/master, commit the changes and force push it to
the origin
- Create tag from the just created commit and force push it to the origin
- Create a release from the just created tag

### 2. Generating the comprehensive release notes

Comprehensive release notes are published in the [meta repository]. This action
can be performed executing the following command:

```bash
python comprehensive_release_notes.py 7.3.0 7.4.0 --dry-run
```

The first release version is the previous release (`7.3.0` in the example) and 
the second is the new release which we want to create. Remove the `--dry-run` to
actually create it. This command also support more options, use `--help` to view
them all.

### 3. Removing old and stale release branches

Old releases will go out of support, meaning no new bugfix patch releases are
expected to happen. You should go to each of the platform repositories and
remove release branches related to them for housekeeping. Right now this is not
automated, so you will have to do this manually.

# Future

In the future, we should automate the release management command and include
them within each different project instead of having a separate repository to
handle this.

Some tools we might take a look at to do so:
- https://github.com/marketplace/actions/automatic-releases

Also we should automate the releases for the documentation itself, allowing
having multiple version of the documentation, to match with the releases.

[Release Lifecycle]: release-lifecycle.md
[release-tool project]: https://github.com/sequentech/release-tool
[Release Flow]: http://releaseflow.org/
[Production Readiness Checklist]: production-readiness.md
[meta repository]: https://github.com/sequentech/meta