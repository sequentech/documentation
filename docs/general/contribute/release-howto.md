---
sidebar_position: 2
title: Release How-to
---

In this howto we will explain how can a new release be published step by step.
Please refer to the [Release Lifecycle](release-lifecycle.md) document to
know more about when to do what type of release.

# Setup

Releases are managed using the 
[release-tool project](https://github.com/sequentech/release-tool). Each 
repository can be released independently.

Please install and setup release-tool as described in the repository's
README file.

# Release commands

Publishing a release is actually compromised of multiple (and sometimes 
optional) steps:

1. Changing the version in the code

The code of the software platform itself usually has some reference to the
release. As we are creating a new release, this code needs to be updated.

2. Creating a release branch

For example `5.0.x` branch, so that other patch releases fork from there.
This branch needs to be created locally and pushed to the public repository.

3. Creating a release git tag

Creating the git tag and pushing it to the repository.

4. Publishing a github release.

We can do all this in one go with the following command:

```bash
./release.py \
    --version 5.0.0-beta.1 \
    --change-version \
    --base-branch master \
    --create-branch 5.0.x \
    --create-tag \
    --release-title "5.0.0-beta.1 release" \
    --generate-release-notes \
    --prerelease \
    --create-release \
    --path ../election-portal
```

Also note that the `release.py` script in this configuration will:
- Stash your current changes in the `election-portal` repository
- Remove all untracked files and directories (except those ignored by `.gitignore`)
- Create a branch from origin/master, commit the changes and force push it to
the origin
- Create tag from the just created commit and force push it to the origin
- Create a release from the just created tag

If you are releasing in an existing branch for a minor release, the command
would probably be more similar to:

```bash
./release.py \
    --version 5.0.0-beta.2 \
    --change-version \
    --base-branch 5.0.x \
    --push-current-branch \
    --create-tag \
    --release-title "5.0.0-beta.2 release" \
    --previous-tag-name '5.0.0-beta.1' \
    --generate-release-notes \
    --create-release \
    --path ../election-portal
```

Note that here:
- We are not creating the `5.0.x`  branch, because it already exists. Instead,
we are pushing current branch (5.0.x, set with `--base-branch 5.0.x`).
- We are specifying `--previous-tag-name '5.0.0-beta.1'`, because otherwise the
github-generated release notes would use the most recent release as a base, and
that might not be what we want as the previous release might have been for 
a different major version.

To do a full plataform release, these are all the projects that need to be 
released using the previous command:
- common-ui
- admin-console
- election-portal
- voting-booth
- ballot-box
- deployment-tool
- tally-methods
- tally-pipes
- election-verifier
- frestq
- election-orchestra
- iam
- misc-tools
- mixnet
- documentation
- ballot-verifier
- release-tool

Note that the order listed above is important for automatic unit tests. For
example, `election-verifier` uses `tally-pipes`, which in turn depends on
`tally-methods`. Please do the releasing in order. If you don't, you'll get some
github actions failed. If this happens, just rerun the github actions after all
the releases have been done and that should fix the problem.

You can automate the release of all these repositories with a script like:

```bash
export REPOS=(common-ui admin-console election-portal voting-booth ballot-box deployment-tool tally-methods tally-pipes election-verifier frestq election-orchestra iam misc-tools mixnet documentation ballot-verifier release-tool)

for i in $REPOS
do
    ./release.py \
        --version 6.1.0 \
        --change-version \
        --base-branch '6.1.x' '6.0.x' \
        --push-current-branch \
        --create-tag \
        --release-title "6.1.0 release" \
        --previous-tag-name '6.0.3' \
        --generate-release-notes \
        --create-release \
        --path ../$i
done
```

Note that we specified multiple branch names with `--base-branch`. This is 
because in some of the repositories, there might not be any new commits or they
might be in the previous `6.0.x` branch. The first name of the base-branch will
always indicate the final branch to push, and it will use that branch as a base
if it does exist. If it's not yet created, the release script will try to use
the other given branch names as a base, in order.

# Release Testing and version schedule

For any major release, first a `<major>.<minor>.<patch>-beta.1` should be
created. After this has been done for the whole platform:
1. All automatic unit testing should pass.
2. All [E2E integration tests](../reference/testing/) should pass.
3. Enough time for doing additional manual testing bug fixing should be
   allocated.

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

Also we should automate the releases for the documentation itself, allowing
having multiple version of the documentation, to match with the releases.