---
id: guide
title: Translation Guide
sidebar_label: Translation Guide
slug: /translation/guide
---

This document describes how to translate the Agora Voting project to a new 
language.

## Introduction

The Agora Voting project user interface is written in javascript using Angular 1
and uses [i18next](https://www.i18next.com/) and 
[ng-i18next](https://www.npmjs.com/package/ng-i18next) for internationalization 
(i18n for short).

The user interface is divided in 4 different repositories:
- **agora-gui-common**: A common library used by the other three.
- **agora-gui-admin**: The election administrator interface.
- **agora-gui-elections**: The public election interface.
- **agora-gui-booth**: The voting booth interface.

Each repository has its own set of translation files. The format of these files
is in JSON and is [roughly defined here (JSON v1 i18next format)](https://www.i18next.com/misc/json-format#i-18-next-json-v1).

## How to translate

### Step 1. Writing the translations

The English version of the translation JSON files is usually the most up to 
date, and it is the most international language. For these reasons, to create
your translation we recommend to base it on the English JSON file for each
repository. This English base translation is located in the `locales/en.json` 
in each repository:

- [agora-gui-common/locales/en.json](https://github.com/agoravoting/agora-gui-common/blob/master/locales/en.json)
- [agora-gui-admin/locales/en.json](https://github.com/agoravoting/agora-gui-admin/blob/master/locales/en.json)
- [agora-gui-elections/locales/en.json](https://github.com/agoravoting/agora-gui-elections/blob/master/locales/en.json)
- [agora-gui-booth/locales/en.json](https://github.com/agoravoting/agora-gui-booth/blob/master/locales/en.json)

To create a translation, just copy each of those files into the same `locales/`
directory as a new file with a name following the pattern 
`<language-code>.json`. The language code for each language is defined in 
ISO 639-1 and a [table of codes can be found in Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). For example, the language code for Spanish is `es`
and for German is `de`.

Currently the Agora Voting Project contains translations for the following 
languages:
- Catalan (ca)
- English (en)
- Finnish (fi)
- Galician (gl)
- Spanish (es)
- Swedish (sv)

### Step 2. Building the translations

Once we have written the translation files and put them in the corresponding 
`locales/` directories with the proper file names, we are not finished yet. We 
have to modify the building system to incorporate these files.

The `agora-gui-*` repositories use the [GruntJS](https://gruntjs.com/) task 
runner  for building and bundling the javascript code. In each of the 
`agora-gui-*` repositories you will find a top level file called `Gruntfile.js` 
that we will need to modify.

The required modifications are pretty simple. Just search for the string 
`locales/` inside the file `Gruntfile.js` and you will find usually one or two 
places where i18n files are processed. For example, in [agora-gui-common/Gruntfile.js](https://github.com/agoravoting/agora-gui-common/blob/master/Gruntfile.js#L207) around line 207 you will find 
something like:

```js title="agora-gui-common/Gruntfile.js fragment"
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

```js title="agora-gui-common/Gruntfile.js fragment"
            "dist/locales/is.json": ["locales/is.json", "plugins/**/locales/is.json"],
```

Ending up with the `merge-json` task inside the file `Gruntfile.js` being as
follows:

```js title="agora-gui-common/Gruntfile.js fragment" {7}
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
file `Gruntfile.js`, in the `uglify` section around [line 226](https://github.com/agoravoting/agora-gui-common/blob/master/Gruntfile.js#L226):

```js title="agora-gui-common/Gruntfile.js fragment" {15-17}
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

We have done this for the `agora-gui-common` project. We would have to repeat
the process for the other three `agora-gui-*` projects for which we are adding
translation support for a new language.

### Step 3. Translation deployment and configuration

We have now translated the interface to a new language and incorporated the
translations in the building process. The next step is to configure our 
deployment to include and use the new language translation.

:::info
To deploy the Agora Voting project, please follow the 
[Deployment Guide](../deployment/guide).
:::

The configuration is fairly simple. In the `config.yml` file inside the 
`agora_gui` section you can find the following configurations keys:

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
Polish  (`po` language code), you would change the `agora_gui.language` key to 
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
be overridden using the `agora_gui.forceLanguage` setting:

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

You might have integrated the Agora Voting project deployment with some other 
platform. If voters access to the Agora Voting interface from some third-party
interface, this first interface might have some specific language configuration
for each user. When accessing to an Agora Voting deployment link from some other 
web site, you can modify the access link to force a specific default language 
adding a query string such as `?lang=pl`. The name of this URL query string 
paramenter is specified with the `agora_gui.detectLanguageQueryString` 
configuration  parameter.

### Step 4. Send the Pull Request

We welcome your contributions. This is an open source project and we'll be happy 
to accept your pull request adding support for a new language or updating an 
existing translation. Please ensure you read and follow the step in the 
[Contribution Guide](../contribute/guide) to do so.