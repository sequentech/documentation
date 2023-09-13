---
sidebar_position: 3
title: Translation Guide
---

This document describes how to translate the Sequent Tech project to a new 
language.

## Introduction

The Sequent Tech project user interface is written in javascript using Angular 1
and uses [i18next](https://www.i18next.com/) and 
[ng-i18next](https://www.npmjs.com/package/ng-i18next) for internationalization 
(i18n for short).

The user interface is divided in 4 different repositories:
- **common-ui**: A common library used by the other three.
- **admin-console**: The election administrator interface.
- **election-portal**: The public election interface.
- **voting-booth**: The voting booth interface.

Each repository has its own set of translation files. The format of these files
is in JSON and is [roughly defined here (JSON v1 i18next format)](https://www.i18next.com/misc/json-format#i-18-next-json-v1).

There's also translation files in **tally-pipes**, currently just for 
generating PDF results in the chosen language. These work with `gettext` `.po`
and `.pot` files. 

This guide is grouped in two sections:
1. How to translate `sequent-ui-*`.
2. How to translate `tally-pipes`.

## How to translate `sequent-ui`

### Step 1. Writing or exporting the translations

The English version of the translation JSON files is usually the most up to 
date, and it is the most international language. For these reasons, to create
your translation we recommend to base it on the English JSON file for each
repository. This English base translation is located in the `locales/en.json` 
in each repository:

- [common-ui/locales/en.json](https://github.com/sequentech/common-ui/blob/master/locales/en.json)
- [admin-console/locales/en.json](https://github.com/sequentech/admin-console/blob/master/locales/en.json)
- [election-portal/locales/en.json](https://github.com/sequentech/election-portal/blob/master/locales/en.json)
- [voting-booth/locales/en.json](https://github.com/sequentech/voting-booth/blob/master/locales/en.json)

To create a translation, just copy each of those files into the same `locales/`
directory as a new file with a name following the pattern 
`<language-code>.json`. The language code for each language is defined in 
ISO 639-1 and a [table of codes can be found in Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). For example, the language code for Spanish is `es`
and for German is `de`.

Currently the Sequent Tech Project contains translations for the following 
languages:

- English (en)
- Spanish (es)
- French (fr)
- Italian (it)
- Catalan (ca)
- Finnish (fi)
- Galician (gl)
- Swedish (sv)

We internally use [POEditor](https://poeditor.com/) for managing and updating
some of these translations. To upload the translations from POEditor follow
these instructions:
1. Log in to [POEditor](https://poeditor.com/). Please request to the project
managers to be added as a POEditor collaborator if you are not yet added there.
2. Enter into the `Sequent Voting Platform` project
3. Choose the language to export (for example `Italian`)
4. Click in the `Export` tab.
5. Chose the `Key-Value Export Format (.json)`
6. Click to enable the `Advanced export options` and in the `Advanced Options`
sidebar choose `Order` to be `Terms A-Z`, so that it's always sorted in the same
manner.

This will download a file with a name such as `sequent_it.json`. However, this
file contains all the translated strings for that language, and now we need to
export the appropriate strings to a file for each of the repositories
(`common-ui`, `voting-booth`, etc).

We have a handy python tool in the `misc-tools` repository. Please do a 
`git clone https://github.com/sequentech/misc-tools.git` of the misc-tools 
repository and then execute a series of command such as featured below to update
the translations:

```bash
export LANG=it
export BASE_LANG=en
export I18N_FILE=~/Downloads/sequent_it.json
export REPOS=(common-ui admin-console election-portal voting-booth)

for REPO in $REPOS
do
  python misc-tools/utils/i18n.py \
    --base "${REPO}/locales/${BASE_LANG}.json" \
    --i18n "${I18N_FILE}" \
    --out "${REPO}/locales/${LANG}.json"
done
```

This command will filter the strings in the exported i18n file using the base
language file for each repository.

### Step 2. Building the translations

Once we have written the translation files and put them in the corresponding 
`locales/` directories with the proper file names, we are not finished yet. We 
have to modify the building system to incorporate these files.

The `sequent-ui-*` repositories use the [GruntJS](https://gruntjs.com/) task 
runner  for building and bundling the javascript code. In each of the 
`sequent-ui-*` repositories you will find a top level file called `Gruntfile.js` 
that we will need to modify.

The required modifications are pretty simple. Just search for the string 
`locales/` inside the file `Gruntfile.js` and you will find usually one or two 
places where i18n files are processed. For example, in [common-ui/Gruntfile.js](https://github.com/sequentech/common-ui/blob/master/Gruntfile.js#L207) around line 207 you will find 
something like:

```js title="common-ui/Gruntfile.js fragment"
    "merge-json": {
      main: {
        files: {
            "dist/locales/en.json": ["locales/en.json", "plugins/**/locales/en.json"],
            "dist/locales/es.json": ["locales/es.json", "plugins/**/locales/es.json"],
            "dist/locales/gl.json": ["locales/gl.json", "plugins/**/locales/gl.json"],
            "dist/locales/sv.json": ["locales/sv.json", "plugins/**/locales/sv.json"],
            "dist/locales/fi.json": ["locales/fi.json", "plugins/**/locales/fi.json"],
            "dist/locales/ca.json": ["locales/ca.json", "plugins/**/locales/ca.json"]
        }
      }
    },
```

If you are adding a translation for Icelandic (`is` language code), you should 
add the following line in between:

```js title="common-ui/Gruntfile.js fragment"
            "dist/locales/is.json": ["locales/is.json", "plugins/**/locales/is.json"],
```

Ending up with the `merge-json` task inside the file `Gruntfile.js` being as
follows:

```js title="common-ui/Gruntfile.js fragment" {7}
    "merge-json": {
      main: {
        files: {
            "dist/locales/en.json": ["locales/en.json", "plugins/**/locales/en.json"],
            "dist/locales/es.json": ["locales/es.json", "plugins/**/locales/es.json"],
            "dist/locales/gl.json": ["locales/gl.json", "plugins/**/locales/gl.json"],
            "dist/locales/is.json": ["locales/is.json", "plugins/**/locales/is.json"],
            "dist/locales/sv.json": ["locales/sv.json", "plugins/**/locales/sv.json"],
            "dist/locales/fi.json": ["locales/fi.json", "plugins/**/locales/fi.json"],
            "dist/locales/ca.json": ["locales/ca.json", "plugins/**/locales/ca.json"]
        }
      }
    },
```

This `merge-json` task joins the translation files for each language from the 
`locales/` directory and from the `plugins` directory. 

You'll notice that the  string `locales/` appears in another section inside the 
file `Gruntfile.js`, in the `uglify` section around [line 226](https://github.com/sequentech/common-ui/blob/master/Gruntfile.js#L226):

```js title="common-ui/Gruntfile.js fragment" {15-17}
    uglify: {
      main: {
        options:{
          mangle: false,
          compress: {},
          beautify: true
        },
        files: {
          'dist/appCommon-v20.2.0.js': 'temp/app.js',
          'dist/libCommon-v20.2.0.js': 'temp/lib.js',
          'dist/libnocompat-v20.2.0.js': 'temp/libnocompat.js',
          'dist/libcompat-v20.2.0.js': 'temp/libcompat.js',
          'dist/avWidgets.js': 'avWidgets.js',

          "dist/locales/moment/es.js": "node_modules/moment/locale/es.js",
          "dist/locales/moment/gl.js": "node_modules/moment/locale/gl.js",
          "dist/locales/moment/ca.js": "node_modules/moment/locale/ca.js"
        }
```

This is related to the usage of the [momentjs](https://momentjs.com/) library,
used for internationalization of times and dates. You can add a new line there
also for loading the moment internationalization file for your language if there
is one.

We have done this for the `common-ui` project. We would have to repeat
the process for the other three `sequent-ui-*` projects for which we are adding
translation support for a new language.

### Step 3. Translation deployment and configuration

We have now translated the interface to a new language and incorporated the
translations in the building process. The next step is to configure our 
deployment to include and use the new language translation.

:::info
To deploy the Sequent Tech project, please follow the 
[Deployment Guide](../../guides/deployment).
:::

The configuration is fairly simple. In the `config.yml` file inside the 
`sequent_ui` section you can find the following configurations keys:

```yaml title="config.yml fragment"
    # Default language of the application
    language: en

    # Forces the default language
    forceLanguage: false

    # Specifies the set language query string
    detectLanguageQueryString: lang

    # Specifies what translations will be available
    languagesWhitelist:
      - en
      - es
      - gl
      - ca
```

For example if you want to specify that the default language is going to be 
Polish  (`po` language code), you would change the `sequent_ui.language` key to 
`po` and add `po` to the `languagesWhitelist`:

```yaml title="config.yml fragment" {2,16}
    # Default language of the application
    language: po

    # Forces the default language
    forceLanguage: false

    # Specifies the set language query string
    detectLanguageQueryString: lang

    # Specifies what translations will be available
    languagesWhitelist:
      - en
      - es
      - gl
      - ca
      - po
```

If you are doing a deployment only in Polish, you could remove other languages
from the whitelist so that the user won't be able to choose any other language: 

```yaml title="config.yml fragment" {2,12}
    # Default language of the application
    language: po

    # Forces the default language
    forceLanguage: false

    # Specifies the set language query string
    detectLanguageQueryString: lang

    # Specifies what translations will be available
    languagesWhitelist:
      - po
```

Or maybe you might want to support a secondary language (English for example)
but force the default language to be Polish. By default, the user interface will
try to detect the preferred language of the web browser, but this behaviour can 
be overridden using the `sequent_ui.forceLanguage` setting:

```yaml title="config.yml fragment" {5,13}
    # Default language of the application
    language: po

    # Forces the default language
    forceLanguage: true

    # Specifies the set language query string
    detectLanguageQueryString: lang

    # Specifies what translations will be available
    languagesWhitelist:
      - po
      - en
```

You might have integrated the Sequent Tech project deployment with some other 
platform. If voters access to the Sequent Tech interface from some third-party
interface, this first interface might have some specific language configuration
for each user. When accessing to an Sequent Tech deployment link from some other 
web site, you can modify the access link to force a specific default language 
adding a query string such as `?lang=pl`. The name of this URL query string 
paramenter is specified with the `sequent_ui.detectLanguageQueryString` 
configuration  parameter.

### Step 4. Send the Pull Request

We welcome your contributions. This is an open source project and we'll be happy 
to accept your pull request adding support for a new language or updating an 
existing translation. Please ensure you read and follow the step in the 
[Contribution Guide](../../contribute/contribute-guide) to do so.


## How to translate `tally-pipes`

### Step 1. Writing the translations

`tally-pipes` is written in Python and executes in the backend. It uses the
standard [gettext](https://docs.python.org/3/library/gettext.html) library for 
internationalization in Python projects. We use 
[Babel](http://babel.pocoo.org/en/latest/) for extracting i18n strings
and for compiling them and loosely followed 
[this guide](https://www.mattlayman.com/blog/2015/i18n/).

The i18n strings inside the code are directly in English language and located
currently only the [`tally_pipes/pipes/pdf.py`](https://github.com/sequentech/tally-pipes/blob/master/tally_pipes/pipes/pdf.py) file. The translation template is located in 
[`tally_pipes/pipes/locale/pipes.pot`](https://github.com/sequentech/tally-pipes/blob/master/tally_pipes/pipes/locale/pipes.pot) and the translation for each language are
to be located in a path following the pattern 
`tally_pipes/pipes/locale/<lang-code>/LC_MESSAGES/pipes.po`.

To create a translation, just copy `tally_pipes/pipes/locale/pipes.pot`
into a new file following the previously mentioned pattern 
`tally_pipes/pipes/locale/<lang-code>/LC_MESSAGES/pipes.po`. The language code
for each language is defined in 
ISO 639-1 and a [table of codes can be found in Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). For example, the language code for Spanish is `es`
and for German is `de`.

Currently `tally-pipes` contains translations for the following languages:
- English (en, the default)
- Spanish (es)

### Step 2. Building the translations

Each time an i18n string is changed, removed or added to the code, you should 
run the following command to update the translation template (the 
`tally_pipes/pipes/locale/pipes.pot` file):

```bash
# run in the `tally-pipes` directory
python setup.py extract_messages
``` 

After updating a translation or adding a new one, you should rebuild the
translation files. Even if translations are written in plaintext (`.po` format),
they are used in compiled format, as this is the way the venerable `gettext` 
library (+30 years old) works. This compilation can be done with the following
command in the `tally-pipes` directory:

```bash
# run in the `tally-pipes` directory
python setup.py compile_catalog
``` 

### Step 3. Choosing the PDF results language 

By default, the election results are shown in english. Of course, this can be
changed. The PDF election results are generated by `tally-pipes`. The way to
apply any configuration to `tally-pipes` is through the 
[Results config pipes](../../reference/election-creation-json#results-config-pipes).

By default, the language is English and the default election results config
pipes is the following:

```json title="election_pipes.json fragment" {7}
{
  "version": "1.0",
  "pipes": [
    {
      "type": "tally_pipes.pipes.pdf.configure_pdf",
      "params": {
        "languages": ["en"] 
      }
    },
    {
      "type": "tally_pipes.pipes.results.do_tallies",
      "params": {}
    },
    {
      "type": "tally_pipes.pipes.sort.sort_non_iterative",
      "params": {}
    }
  ]
}
```

You can specify the language of the PDF election results changing the 
highlighted line. For example, if you want the election results in Spanish,
the line would be `"languages": ["es"]` instead.

### Step 4. Send the Pull Request

We welcome your contributions. This is an open source project and we'll be happy 
to accept your pull request adding support for a new language or updating an 
existing translation. Please ensure you read and follow the step in the 
[Contribution Guide](../../contribute/contribute-guide) to do so.