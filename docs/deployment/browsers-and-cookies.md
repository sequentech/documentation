---
id: browsers-and-cookies
title: Supported Browsers and Cookies used
sidebar_label: Browsers and Cookies
slug: /deployment/browsers-and-cookies
---

## 1. Supported browsers

The nVotes web interface should work correctly on any modern browser. It's
always recommended to use the most updated version of your favourite browser to
have more security, but the interface can work on older version if it's needed.

The interface has been tested with the following browsers, so it's certified
that it works on this versions and newers:

 * Mozilla Firefox 36
 * Google Chrome 50
 * Microsoft Edge 15 (All versions)
 * Safari 7.1
 * Safari on iPhone 5 (iOS v7)
 * Chrome on Android (v6)

### Javascript and old browsers

The web interface requires javascript to work, so make sure that you don't have
javascript disabled on your browser.

The minimum required version of javascript is the ES6 (ECMAScript 2015). This
version is supported on most browsers, but it's not supported on Microsoft
Internet Explorer 11, so this browser is not supported.

## 2. Cookies required and allowed

nVotes uses the bare minimum cookies needed for the interface usability. These
cookies are the needed to login and for security reasons.

There's no tracking code or external cookies, all the cookies used by the
nVotes interface are used just as an local storage for the interface state, and
in any case these cookies are sent to any external server, they are just used
to be able to query the API with the authentication and the corresponding
parameters.

You can check the cookies present and the use in the following lists by GUI
module.

### Used in all modules

 * **lang**: Used to store the interface language. It'll be set even without
   login to keep track of the language selected by the user for the next use.
   again. These cookies are present until the user logouts.

### Admin

 * **\*authevent\***: A set of cookies used to store the admin interface state.
   This is used to keep the user loged in if the browser is closed and opened
   again. These cookies are present until the user logouts.

### Booth

 * **\*authevent\***: A set of cookies used to store the booth interface state.
   In the booth we just store:
    * The current election ID
    * The user email and authentication token
    * If the user is admin
   These cookies are removed once the user emits the vote.

### Election

No special cookies are used here.

### Configuration

The login cookies expiration time can be configured to be a fixed period
instead of session cookies.

To do that, just find the line with the `cookies_expires` configuration in the
`config.yml` file and uncomment it. The expiration time will be set in minutes,
but you can use a number bigger than 60 to set hours. For example if you want
to set one day you can put `1440`.
