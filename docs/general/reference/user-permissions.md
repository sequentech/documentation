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
`
## Permission: `update-share`

This permission allows the user to update the election social links configuration.
Not required if the user already has the `edit` permission.
`
## Permission: `delete`

This permission allows the user to delete an election. Not required if the user
already has the `edit` permission.
`
## Permission: `send-auth`

This permission allows the user to send authentication messages to selected voters
from the election census. Not required if the user already has the `edit` permission.
`
## Permission: `send-auth-all`

This permission allows the user to send authentication messages to all voters
from the election census. Not required if the user already has the `edit` permission.
`
## Permission: `view-archived`
`
## Permission: `view-results`
`
## Permission: `view-stats`
`
## Permission: `view-voters`
`
## Permission: `view-census`
`
## Permission: `start`
`
## Permission: `stop`
`
## Permission: `allow-tally`
`
## Permission: `tally`
`
## Permission: `calculate-results`
`
## Permission: `publish-results`
`
## Permission: `census-add`
`
## Permission: `census-delete`
`
## Permission: `census-delete-voted`
`
## Permission: `census-activation`
`
## Permission: `add-ballot-boxes`
`
## Permission: `list-ballot-boxes`
`
## Permission: `delete-ballot-boxes`
`
## Permission: `add-tally-sheets`
`
## Permission: `override-tally-sheets`
`
## Permission: `list-tally-sheets`
`
## Permission: `delete-tally-sheets`
`
## Permission: `archive`
`
## Permission: `unarchive`
`
## Permission: `event-view-activity`
`
## Permission: `event-receiver-view-activity`
`
## Permission: `generate-auth-code`
`
## Permission: `reset-voter`
`
## Permission: `suspend`
`
## Permission: `resume`
`
## Permission: `set-public-candidates`
`
## Permission: `set-authenticate-otl-period`
`
## Permission: `update-ballot-boxes-results-config`
`

