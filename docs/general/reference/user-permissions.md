---
sidebar_position: 6
title: User Permissions
---

Users of the admin portal can have fine grained-permissions. Different actions and
admin sections require certain permissions. A user can have any aggregate of the
following permissions:

# Permissions list

## Permission: `view`

This is the most basic permission. With it, the user will see the election in the
election list and they will be able to see the election dashboard as well as the
election configuration screens. For example they will be able to see the 
`Basic Details`, `Questions`, `Authentication` and `Census Configuration` screens
but not the `Census Data` or `Activity Log`, or the unpublish election results.
They will not be able to do almost any action either.

## Permission: `edit`

This is one of the most powerful permissions. The user will be able to perform
almost any action, except for example `create`.

## Permission: `create`

This permission allows the user to create elections. It's also required to edit
the user own metadata.

## Permission: `register`

This permission allows the user to register elections. Not required if the user
already has the `edit` permission.

## Permission: `update`

This permission allows the user to update the election configuration. Not required
if the user already has the `edit` permission.

## Permission: `update-share`

This permission allows the user to update the election social links configuration.
Not required if the user already has the `edit` permission.

## Permission: `delete`

This permission allows the user to delete an election. Not required if the user
already has the `edit` permission.

## Permission: `send-auth`

This permission allows the user to send authentication messages to selected voters
from the election census. Not required if the user already has the `edit` permission.

## Permission: `send-auth-all`

This permission allows the user to send authentication messages to all voters
from the election census. Not required if the user already has the `edit` permission.

## Permission: `view-archived`

This permission allows the user to view archived elections. Not required if the user
already has the `edit` permission.

## Permission: `view-results`

This permission allows the user to view the unpublished election results. Not required
if the user already has the `edit` permission.

## Permission: `view-stats`

This permission allows the user to view the tally status of an election. Not required
if the user already has the `edit` permission.

## Permission: `view-voters`

This permission allows the user to view the part of the census that have already cast their
ballot in an election. Not required if the user already has the `edit` permission.

## Permission: `view-census`

This permission allows the user to view the part of the census of an election. Not required
if the user already has the `edit` permission.

## Permission: `start`

This permission allows the user to set the election status as started, and to set the start
date for an election. Not required if the user already has the `edit` permission.

## Permission: `stop`

This permission allows the user to set the election status as stopped, to set the stop
date for an election, as well as its tally date. Not required if the user already has 
the `edit` permission.

## Permission: `allow-tally`

This permission allows the user to allow the election to be tallied. Not required if the
user already has the `edit` permission.

## Permission: `tally`

This permission allows the user to start the tally process for an election. Not required
if the user already has the `edit` permission.

## Permission: `calculate-results`

This permission allows the user to start the results calculation for an election. Not required
if the user already has the `edit` permission.

## Permission: `publish-results`

This permission allows the user to publish/unpublish the results of an election. Not required
if the user already has the `edit` permission.

## Permission: `census-add`

This permission allows the user to add users to the census of an election. Not required
if the user already has the `edit` permission.

## Permission: `census-delete`

This permission allows the user to remove users from the census of an election, but only if those
users haven't voted yet. Not required if the user already has the `edit` permission.

## Permission: `census-delete-voted`

This permission allows the user to remove users from the census of an election, even if those
users have voted already. Not required if the user already has the `edit` permission.

## Permission: `census-activation`

This permission allows the user to activate/deactive users from the census of an election. Not
required if the user already has the `edit` permission.

## Permission: `add-ballot-boxes`

This permission allows the user to add ballot boxes to an election. Not required if the user
already has the `edit` permission.

## Permission: `list-ballot-boxes`

This permission allows the user to list the ballot boxes from an election. Not required if the user
already has the `edit` permission.

## Permission: `delete-ballot-boxes`

This permission allows the user to delete ballot boxes from an election. Not required if the user
already has the `edit` permission.

## Permission: `add-tally-sheets`

This permission allows the user to add tally sheets to an election. Not required if the user
already has the `edit` permission.

## Permission: `override-tally-sheets`

This permission allows the user to override existing tally sheets in an election. Not required
if the user already has the `edit` permission.

## Permission: `list-tally-sheets`

This permission allows the user to list the tally sheets of an election. Not required if the user
already has the `edit` permission.

## Permission: `delete-tally-sheets`

This permission allows the user to delete tally sheets from an election. Not required if the user
already has the `edit` permission.

## Permission: `archive`

This permission allows the user to archive an election. Not required if the user already has 
the `edit` permission.

## Permission: `unarchive`

This permission allows the user to unarchive an election. The `edit` permission is NOT sufficient
for this action.

## Permission: `event-view-activity`

This permission allows the user to see the list of actions in an election. Not required if the user
already has the `edit` permission.

## Permission: `event-receiver-view-activity`

This permission allows the user to see the list of actions in an election, filtered by the receiver id.
Not required if the user already has the `edit` or `event-view-activity` permission.

## Permission: `generate-auth-code`

This permission allows the user to generate authentication codes for users from the census of an election.
Not required if the user already has the `edit` permission.

## Permission: `reset-voter`

This permission allows the user to reset a voter's registration fields to a pre-registration state.
Not required if the user already has the `edit` permission.

## Permission: `suspend`

This permission allows the user to set the election status to `suspended`. Not required if the user
already has the `edit` permission.

## Permission: `resume`

This permission allows the user to resume the voting period in an stopped election. Not required if
the user already has the `edit` permission.

## Permission: `set-public-candidates`

This permission allows the user to configure whether the candidates in an election are public or not.
Not required if the user already has the `edit` permission.

## Permission: `set-authenticate-otl-period`

This permission allows the user to configure the authentication OTL period for users in an election.
Not required if the user already has the `edit` permission.

## Permission: `update-ballot-boxes-results-config`

This permission allows the user toupdate the ballot box results configuration and update the results
in an election. Not required if the user already has the `edit` permission.
