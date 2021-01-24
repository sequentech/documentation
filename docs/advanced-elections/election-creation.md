---
id: election-creation
title: Election Creation
sidebar_label: Election Creation
slug: /advanced-elections/election-creation
---

In the Admin interface, given enough permissions you can create new
elections using the `New Election` buttons highlighted below:

![Highlighted Create New Election Buttons in Admin interface](./assets/admin_elections_list__create_new_highlighted.png)

Once you click there, you will something like the following, where you can
graphically configure the main settings of an election like the election title,
description, etc:

![New Election interface](./assets/create_new_election.png)

Using the left sidebar, you can access other configuration sections like
`Questions` or `Authentication`. However, it is currently not possible to 
graphically configure some more advanced election settings. To be able to 
configure these advanced, settings, click in the last sidebar item 
`Create Election`:

![Create Election section](./assets/create_new_election_last_section.png)

The `Create Election` sidebar section is the last step of election configuration, 
where you can review the configuration before creating the election. At this 
point, the election is configured - with some sample configuration if you 
didn't change anything.

If in the `Create Election` sidebar section you click in the pencil icon at the 
top, you will access the `Edit Election Json` dialog, in which you can directly
edit in JSON format the election configuration:

![Edit JSON Dialog](./assets/create_new_election_edit_json.png)

## Election JSON settings

<!-- 
Note that we name this file ./assets/sample_config.yml even if it is a JSON file
because otherwise it would fail to compile and it would force us to put assets 
in /static/ directory, which results in a much a less self-contained file tree.
-->
In this section we will describe the different options that can be configured 
in the Edit JSON Dialog for Election Creation.  You review an example of a 
[sample election JSON configuration here](./assets/sample_config.yml).

As can be seen in the last screenshot, the JSON Format starts with a list. This
is a list of [Elections](#election-object). This means you can directly create 
multiple elections at once like this:

```json title="multiple_elections.json"
[
  {
    ...Election 1 configuration..
  },
  {
    ...Election 2 configuration..
  },
  {
    ...Election 3 configuration..
  },
]
```

Once you click on the `Finish edit` in the `Edit Election Json` dialog, if you
have added multiple elections this will be reflected in the interface.

## Creating elections

In the `Create election` sidebar section, you can review (and edit the json) of
the election(s) you are about to create in the system. At this point, the 
elections are usually not yet created in the backend and exists only as a JSON
configuration in your web browser. There's an exception to that, that we will
discuss later in this section.

Election creation compromises multiple steps. As seen in
[Election Creation JSON settings](#election-creation-json-settings)), multiple
elections can be created at once in the `Create election` sidebar section. 

For each election, the web browser will request in order to execute the 
following steps:
1. **Create the AuthEvent**: An Authevent represents an event which has some 
specific voter authentication configuration and census of voters.
2. **Add the voter census**: The voter census data is added to the just 
registered AuthEvent.
3. **Register the Election**: The election is registed in `agora-elections`, the
ballot box API.

When an election is registered in `agora-elections`, the election public keys 
and private are not yet created and no communication with the election 
authorities has happened yet. At this stage, the election configuration can be
modified later on.

If you look at the `Create election` sidebar section, there's a checkbox option
below to choose if just registering the election or also creating it:

![Create Election section checkbox](./assets/create_new_election_last_section_checkbox.png)

This checkbox is checked by default but can be disabled just by clicking on it.
If disabled, the elections will just be registered but not created. This allows
for changing the elections later on as will be discussed in the next section.

If the checkbox is checked, then the elections' public and private keys will be
created. This will happen after the previous three steps of AuthEvent creation,
census import and election registration has happened for all the elections. The 
creation of the public and private keys is the slowest part of the process and 
it takes around 30 seconds for each question with two election authorities.

Election's public and private keys creation can be requested later when an 
election is in `registered` state by clicking in `Create` button from the 
election dashboard:

![Create button in Election dashboard](./assets/election_dashboard_registered_create_button_highlighted.png)

## Modifying elections

:::caution
Elections can only be modified in `agora-elections` if virtual elections are
allowed in the deployment configuration, which can be enabled with the
`config.agora_elections.virtualElectionsAllowed` setting in the `config.yml`
deployment configuration file. This setting is set to `false` by default 
because for security reasons virtual elections should not be enabled in 
multi-tenant deployments.
:::

When creating and configuring an election and more so if we are perhaps talking
about advanced election configuration options set in JSON for a set of multiple
elections, it's useful to register it but be able to edit it later.

One straightforward way to do this is having the elections' JSON configuration
in a file, copy and paste it into the `Edit Election JSON` dialog inside the 
`Create election` sidebar section, and click the `Create the elections` button
with the checkbox `Not only register the election, but also create it at the election authorities. This means you won't be able to modify the election.` unchecked. You will have to
ensure that each election has a specific id assigned in the elections' JSON
configuration.

Once the elections are registered, you can enter each election dashboard and
from there access the Demo voting booth and see if it works as expected, and
you can even start or stop the elections and try to vote to see if the
authentication worked. You won't be able to vote and the voting booth will fail
to encrypt the ballot because at this point the elections' private and public
keys are not created yet.

If there's any detail that you need to change, you can edit the elections JSON
configuration file, and then proceed again to follow the steps before for 
creating the election: copy and paste the configuration into the 
`Edit Election JSON` dialog inside the `Create election` sidebar section and
click again to create the elections. This will update the elections' 
configuration as the system will have detected when an election with the 
specified id already exists and can be edited as it's registered but not created.

Once the final elections configuration is in place, you can try to follow the 
same election creation/update procedure, but ensuring the checkbox to create
the elections is checked.

In that case, the elections will first be updated (first the AuthEvent, then the
census, and then the election), and then the public and private keys will be
created.
## Election object

Within the Election JSON settings that can be set using the `Edit Election JSON` dialog, each election can have the following settings:

### Election: `id`

- **Property name**: `id`
- **Type:** `Positive Integer`
- **Required:** No
- **Default:** -
- **Example:** `345`

Election's unique id. It will automatically be assigned one if none is set. If the election already exists and the user has permissions to edit it, the election configuration will be updated if the election is registered but not yet created ([details here](#modifying-elections)).

### Election: `title`

- **Property name**: `title`
- **Type:** `Short String`
- **Required:** Yes
- **Default:** -
- **Example:** `"New election"`

Election's title. It will appear in the admin election list, and as the election title in the public election site and in the voting booth start screen.

### Election: `description`

- **Property name**: `description`
- **Type:** `Long String`
- **Required:** Yes
- **Default:** -
- **Example:** `"This is the description of the election. You can add simple html like <strong>bold</strong> or <a href=\"https://nvotes.com\">links to websites</a>.\n\n<br><br>You need to use two br element for new paragraphs."`

Election's description. It will appear below the title in the public election site and in the voting booth start screen. As shown in the example it allows for some basic HTML.

### Election: `start_date`

- **Property name**: `start_date`
- **Type:** `String`
- **Required:** Yes
- **Default:** -
- **Example:** `""`

DEPRECATED. This field is required but should really be an empty string as it is currently unused.

### Election: `end_date`

- **Property name**: `end_date`
- **Type:** `String`
- **Required:** Yes
- **Default:** -
- **Example:** `""`

DEPRECATED. This field is required but should really be an empty string as it is currently unused.

### Election: `director`

- **Property name**: `director`
- **Type:** `String`
- **Required:** Yes
- **Default:** -
- **Example:** `"auth1"`

The name of the election authority that will act as the director for this election. Its eopackage needs to be installed in the backend server ([see details](../deployment/guide#connecting-web-servers-with-authorities)).

### Election: `authorities`

- **Property name**: `authorities`
- **Type:** `List<String>`
- **Required:** Yes
- **Default:** -
- **Example:** `["auth2", "auth3"]`

List of names of all the election authorities that should be included in this election, excluding the director authority name. Its eopackages needs to be installed in the backend server ([see details](../deployment/guide#connecting-web-servers-with-authorities)).

### Election: `presentation`

- **Property name**: `presentation`
- **Type:** [Election Presentation](#election-presentation-object)
- **Required:** Yes
- **Default:** -
- **Example:** 
```json
{
      "theme": "default",
      "share_text": [
        {
          "network": "Twitter",
          "button_text": "",
          "social_message": "I have just voted in election __URL__, you can too! #nvotes"
        },
        {
          "network": "Facebook",
          "button_text": "",
          "social_message": "__URL__"
        }
      ],
      "urls": [],
      "theme_css": ""
    }
```

Describes presentation options related to the whole election. See 
[Election Presentation](#election-presentation-object) for more details.

### Election: `has_ballot_boxes`

- **Property name**: `has_ballot_boxes`
- **Type:** `Boolean`
- **Required:** No
- **Default:** `false`
- **Example:** `true`

If set to true enables the usage of ballot boxes, which means that you can later
on register tally sheets that can be used to be used in the results 
calculations.

### Election: `ballot_boxes`

- **Property name**: `ballot_boxes`
- **Type:** `List<Short String>`
- **Required:** No
- **Default:** `[]`
- **Example:** `["Postal Ballots", "Onsite Paper Ballots"]`

This configuration option is only used if 
[has_ballot_boxes](#election-has_ballot_boxes) is set to true. It contains a
list of ballot boxes to be created.

### Election: `layout`

- **Property name**: `layout`
- **Type:** `String`
- **Required:** Yes
- **Default:** -
- **Example:** `"simple"`

Specifies the election-wide layout. For now this settings remains unused and it
must always be set to `"simple"`.

### Election: `num_successful_logins_allowed`

- **Property name**: `num_successful_logins_allowed`
- **Type:** `Positive Integer`
- **Required:** Yes
- **Default:** -
- **Example:** `0`

Specifies the number of votes that can be cast, because *successful logins* is
a generic and fancy way to call 'votes cast' in a generic way within AuthApi.
If set to zero, no specific limitation in `authapi` will happen regarding the 
authentication process. If set to a number higher than zero, for example 1 or 3,
that will be the limit in the number of votes that can be cast.

Once the limitation is hit, the voter won't be able to authenticate again to
cast a vote.

:::note
There might be other limitations on the number of votes that a voter can cast.
For example `agora-elections` has a deployment level configuration setting
that limits the number of votes that can be cast (this setting's path is 
`config.agora_elections.max_revotes` in the `config.yml` ansible configuration).
This `agora-elections` configuration setting will be applied independently of
`num_successful_logins_allowed`.
:::

### Election: `resultsConfig`

- **Property name**: `resultsConfig`
- **Type:** List<[Results Config Pipes](#results-config-pipes)>
- **Required:** No
- **Default:** -
- **Example:**
```json
[
  [
    "agora_results.pipes.results.do_tallies",
    {
      "ignore_invalid_votes": true
    }
  ],
  [
    "agora_results.pipes.sort.sort_non_iterative",
    {
      "question_indexes": [0]
    }
  ]
]
```

Specifies how election results will be calculated. It is set of pipes to be 
applied, together with each pipe configuration, that will be used during the 
calculation of election results. See [Results Config Pipes](#results-config-pipes)
for more details.

## Election Presentation Object

This json object type describes presentation options related to the whole 
election. It is used [here](#election-presentation) and can have the following 
properties:

### Election Presentation: `theme`

- **Property name**: `theme`
- **Type:** `String`
- **Required:** Yes
- **Default:** -
- **Example:** `"default"`

Theme that will be used in the public election website and in the voting booth
of this election. Existing themes exist in the [themes directory](https://github.com/agoravoting/agora-gui-common/tree/master/themes) of the agora-gui-common repository. You can write
your own if need be, by following the same directory and file structure as any
of those. The `default` theme uses simple colors and not very specific, with 
the idea of being able to be used in most cases. It is also the most widely used
and thus battle-tested.

### Election Presentation: `share_text`

- **Property name**: `share_text`
- **Type:** List<[Share Text](#share-text-object)>
- **Required:** Yes
- **Default:** -
- **Example:**
```json
[
  {
    "network": "Twitter",
    "button_text": "",
    "social_message": "I have just voted in election __URL__, you can too! #nvotes"
  },
  {
    "network": "Facebook",
    "button_text": "",
    "social_message": "__URL__"
  }
]
```

Describes a series of social network or other kind of links to be shown at the 
top of the election public website and at the success screen of the voting 
booth. See [Share Text](#share-text) for more details. It can be an empty list.

### Election Presentation: `urls`

- **Property name**: `urls`
- **Type:** `List<Election URL>`
- **Required:** Yes
- **Default:** -
- **Example:** `[]`

DEPRECATED. Just leave it as an empty list.

### Election Presentation: `theme_css`

- **Property name**: `theme_css`
- **Type:** `String`
- **Required:** Yes
- **Default:** -
- **Example:** `""`

DEPRECATED. Just leave it as an empty string.

### Election Presentation: `extra_options`

- **Property name**: `extra_options`
- **Type:** [Election Presentation Extra Options](#election-presentation-extra-options-object)
- **Required:** No
- **Default:** -
- **Example:** 
```json
{
  "start_screen__skip": true
}
```

A set of additional of election configuration options, currently used to modify
the voting booth presentation behaviour. This property is not required, but can
be useful. See more 
[details about Election Presentation Extra Options here](#election-presentation-extra-options-object).

## Share Text Object

Object describing a series of social network links or any other type of link
to be shown at the top of the election public website and at the success screen 
of the voting  booth. It  is used [here](#election-presentation-share_text) and
it can have the following properties:

### Share Text: `network`

- **Property name**: `network`
- **Type:** `String`
- **Required:** Yes
- **Default:** -
- **Example:** `"Twitter"`

Specifies the social network this link is for. Currently only `"Twitter"` and 
`"Facebook"` special cases are detected. If you use any of those, then a given
social network icon will be shown and the url will be set to share the 
specified [social message](#share-text-social_message).

### Share Text: `button_text`

- **Property name**: `button_text`
- **Type:** `String`
- **Required:** Yes
- **Default:** -
- **Example:** `""`

Specifies the text to show with this share link. It's usually set to an empty
string as the network icon is usually set.

### Share Text: `social_message`

- **Property name**: `social_message`
- **Type:** `String`
- **Required:** Yes
- **Default:** -
- **Example:** `"I have just voted in election __URL__, you can too! #nvotes"`

When users click on the share link, it will try automatically default to share
in Twitter/Facebook this message. It is a template string, where `__URL__` will
be automatically replaced to a link to this election's public website.

Currently unused.

## Election Presentation Extra Options Object

An object describing a set of additional of election configuration options, 
currently used to modify the voting booth presentation behaviour. It is used 
[here](#election-presentation-extra_options) and it can have the following 
properties:

### Election Presentation Options: `start_screen__skip`

- **Property name**: `start_screen__skip`
- **Type:** `Boolean`
- **Required:** No
- **Default:** -
- **Example:** `true`

If set, this optional property will modify the voting booth behaviour and the
start screen of the voting booth will not be shown.

### Election Presentation Options: `public_title`

- **Property name**: `public_title`
- **Type:** `String`
- **Required:** No
- **Default:** -
- **Example:** `"Approval of the accounts 2022"`

If set, this optional property will modify the voting booth behaviour so that
instead of showing the title of election in the voting booth, it will show this
other title instead.
### Election Presentation Options: `success_screen__hide_ballot_tracker`

- **Property name**: `success_screen__hide_ballot_tracker`
- **Type:** `Boolean`
- **Required:** No
- **Default:** -
- **Example:** `true`

If set, this optional property will modify the voting booth behaviour and the
success screen will not show the ballot tracker hash. This option does not hide
the QR code nor the link to download the ballot ticket PDF.
### Election Presentation Options: `success_screen__hide_qr_code`

- **Property name**: `success_screen__hide_qr_code`
- **Type:** `Boolean`
- **Required:** No
- **Default:** -
- **Example:** `true`

If set, this optional property will modify the voting booth behaviour and the
success screen will not show the QR code that encodes a link to the ballot 
tracker URL. This option does not hide the ballot tracker hash nor the link
to download the ballot ticket PDF.
### Election Presentation Options: `success_screen__hide_download_ballot_ticket`

- **Property name**: `success_screen__hide_download_ballot_ticket`
- **Type:** `Boolean`
- **Required:** No
- **Default:** -
- **Example:** `true`

If set, this optional property will modify the voting booth behaviour and the
success screen will not show the link to download the ballot ticket PDF. This 
option does not hide the ballot tracker hash nor the QR code to the ballot 
tracker.
### Election Presentation Options: `success_screen__redirect_to_login`

- **Property name**: `success_screen__redirect_to_login`
- **Type:** `Boolean`
- **Required:** No
- **Default:** -
- **Example:** `true`

If set, this optional property will modify the voting booth behaviour so that 
the success screen will show a link to redirect to the voter login page. Use
together with [`success_screen__redirect_to_login__text`](#election-presentation-options-success_screen__redirect_to_login__text)
because the link will have that text, so you need to set it.

### Election Presentation Options: `success_screen__redirect_to_login__text`

- **Property name**: `success_screen__redirect_to_login__text`
- **Type:** `Boolean`
- **Required:** No
- **Default:** -
- **Example:** `Go to login`

If set, this optional property will modify the voting booth behaviour so that 
the redirect to login link in the  success screen will have the text specified
in this string. Use
together with [success_screen__redirect_to_login](#election-presentation-options-success_screen__redirect_to_login)
because the link will only appear if that option is set to `true`.
### Election Presentation Options: `disable_voting_booth_audit_ballot`

- **Property name**: `disable_voting_booth_audit_ballot`
- **Type:** `Boolean`
- **Required:** No
- **Default:** -
- **Example:** `true`

If set, this optional property will modify the voting booth behaviour so that 
the review ballot screen, shown before casting the vote, will not show the hash
of the ballot nor the link to audit the ballot.

### Election Presentation Options: `success_screen__redirect_to_login__auto_seconds`

- **Property name**: `success_screen__redirect_to_login__auto_seconds`
- **Type:** `Positive Integer`
- **Required:** No
- **Default:** -
- **Example:** `10`

If set, this optional property will modify the voting booth behaviour so that 
once the ballot is cast and the success screen is shown, after the specified
number of seconds the voter will be automatically redirected to the login page.

## Results Config Pipes

A results config pipe is used to specify how election results will be calculated. 
Results configuration is set of pipes to be applied, together with each pipe 
configuration, that will be used during the  calculation of election results. It
is configured at the election level with the 
[resultsConfig setting](#election-resultsconfig).

Each pipe is a list with two items (a pair):
1. The pipe import path
2. An object with that specific pipe configuration

For example, a config pair could be:

```json
[
  "agora_results.pipes.sort.sort_non_iterative",
  {
    "question_indexes": [0]
  }
]
```

The pipes are interpreted and applied by 
[agora-results](https://github.com/agoravoting/agora-results), which in turn is
called by `agora-elections`. There are multiple available pipes and we will 
document in this section most of them, what they do, what you can use them for 
and what are their configuration  options.

:::note
There's a deployment level configuration setting that specifies a whitelist of
pipes that can be used. This setting's path is 
`config.agora_results.pipes_whitelist` in the `config.yml` ansible 
configuration). If you need to use a specific pipe, please ensure you
have whitelisted it in the deployment configuration.
:::

`agora-results` is called with multiple input data:
- The path to the list of votes to be decrypted.
- The path to the election results configuration with all the pipes to be run.
- The path to the election tally tarball. This tarball is generated by election
authorities and contains among other things a file with the list of questions,
the different options available for each question, the tally mechanism, etc.
- The `output directory` where the election tally results in different formats 
should be written in different files.
- The election id.
- The path to a file containing the whitelisted pipes.

`agora-results` works by loading the election questions configuration, and 
passing it from pipe to pipe as the first argument of each pipe, called 
`data_list`. It also untars the election tally tarball in a temporal directory, 
which some pipes might use to output some temporal files too.

In virtual elections, `agora-results` not only receives as an input the tarball
of the virtual election, but also the tarball of all the virtual subelections. 
In that case, `agora-results` will also load that election's question 
configuration in the `data_list` pipes argument and extract each tally tarball
in a different temporal directory. This is what allows us to do
results consolidation from multiple elections into a single one. In virtual
elections, the first element in `data_list` is the configuration of the virtual
election and then follows in order the list of virtual subelections as per the
configuration of the election in `agora-elections`. Within each element in
`data_list` there's an additional key `extract_dir` that pipes can use to 
access the details of the tally tarball of a specific subelection.

The output of `agora-results` is usually directly to stdout in a specific 
format. This is read by `agora-elections` and stored in the database as the 
electoral results. But it also outputs the same electoral results in different
formats in the election `output directory`: `csv`, `json`, `pretty` (plain
text) and `pdf`.

What follows is a list of the results configuration pipes in no particular
order:

### Pipe: `do_tallies`

- **Pipe path**: `agora_results.pipes.results.do_tallies`

This pipe is used to execute the `tally` algorithm of the election questions.

TODO