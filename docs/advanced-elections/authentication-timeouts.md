---
id: authentication-timeouts
title: Authentication Timeouts
sidebar_label: Authentication Timeouts
slug: /advanced-elections/authentication-timeouts
---

## Introduction

In this document you can learn about how does the authentication session
lifetime works in nVotes voting platform and how to configure it.

## Voter session lifetime 

When a voter logs in, a series of cookies are created to maintain the 
authentication credentials for a period of time. The authentication token is
saved in one of these cookies.

The `config.yml` YAML configuration file contain to which we refer multiple
times in the [deployment guide](../deployment/guide) contains two variables
to configure the voter autentication session:

### config.authapi.auth_token_expiration_seconds

Default value: `600` (seconds).

Number of seconds after which an authentication token expires. This
configuration is used by the `agora-elections` and `authapi` backends in
voter-related authenticated actions. The backend verifies the creation time of
the voter-authentication token, and if it's larger than the value set in this
setting, then it's an expired token.

### config.agora_gui.cookies_expires

Default value: `10` (minutes).

Login session cookies expiration in minutes. During login, the voter session
cookies are set with this expiration time. After the cookies expires, the
browser automatically erases these cookies from memory. Also, the voter is
redirected to the login page or to the 
[`success_screen__redirect__url`](../file-formats/election-creation-json#election-presentation-options-success_screen__redirect__url) if set.
    
If this setting is set to `false` to be unlimited. This setting does not apply
to `agora-gui-admin` cookies (which use the value from
`config.authapi.auth_token_expiration_seconds`), except if this setting is
set to `false` then the expiration of cookies will be set the same value as for
other agora-gui modules (unlimited).

:::note
These two variables should in general be synced. `auth_token_expiration_seconds`
configures the backend and `cookies_expires` configures the frontend, but if
they are not in sync it doesn't make much sense. That's why the default is
`600` seconds (10 minutes) for `auth_token_expiration_seconds` and 10 minutes
for `cookies_expires`.
:::

##  Admin users session lifetime

The administrative interface (typically accessed using the `/admin/login` path)
has its own configuration for timeouts in the `config.yml` separated from the
voter timeouts.

The timeout of the backends and for the frontend is configured in a single
variable: `config.authapi.admin_auth_token_expiration_seconds`, which is very
similar to `config.authapi.auth_token_expiration_seconds` but applies to the
administrative interface and also applies to the cookies of the admin interface,
except for when `config.agora_gui.cookies_expires` is set to `false`, in which
case the cookie does not expire, but the backend will still deem old
authentication tokens expired anyway.

The administrative interface has some other differences with regards to the
voter interface:
- It renovates its authentication token twice for each period of
  `config.authapi.admin_auth_token_expiration_seconds` when the browser tab is
  not
  [hidden](https://developer.mozilla.org/en-US/docs/Web/API/Document/hidden).
  This means that even if the expiration is set to i.e. 600 seconds (or 10
  minutes), if the admin browser is visible and active, the session will not
  close.
- It automatically detects when an HTTP request has been rejected by the backend
  because the admin authentication token has expired, and automatically logs out
  in that scenario.
- It does contain a button through which the admin user can explicitly log out
  of the admin interface, erasing the admin authentication cookies from the
  browser.

## OTP token expiration

Independently if it's used for authentication of voters or administrators,
there's another `config.yml` that can apply to both. When
[authentication-method](../file-formats/election-creation-json#census-auth_method)
is either `email-otp` or `sms-otp`, the One Time Tokens (OTPs) received by the
person being authenticated have an timeout after a given period of time, which
can be configured in the `config.authapi.sms_otp.expire_seconds` setting in
`config.yml` deployment configuration file.
