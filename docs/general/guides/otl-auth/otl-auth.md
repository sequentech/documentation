---
sidebar_position: 6
title: OTL Auth Guide
---

## Introduction

In this document we will explain everything you need to know about OTL
authentication mechanism: what it is, what it provides, how it works, and how to
use it.

## What it is

OTL (One Time Link) authentication is a procedure by which voters can obtain the
authentication code required for some authentication methods by using an URL
that can be used only once for security reasons. This allows the usage of an
additional verification process for the retrieval of the authentication code.

This can be an alternative to sending the authentication code for voting methods
that use authentication codes. 

For example, if the authentication method used is `email`, instead of sending
the authentication code via email, an OTL is sent to the voter via email, and
using this URL the voter can be first verified (perhaps requiring the some
personal information like his membership ID and his birth date) and only
afterwards the voter can obtain the authentication code required to vote.

## How it works

SmartLink is a native authentication method in Sequent platform. Voters will be 
authenticated through a link that includes a secure authentication token (the 
`auth-token`), but  **authorization is done by Sequent platform**. This 
means that the administrator need to upload the census in Sequent platform.

The authentication flow compromises the following steps:
1. Voters are asumed to start by being already authenticated in your website or 
platform (the `external application`).
2. In the external application, voters launch the action to vote, and this 
redirects them to a SmartLink in Sequent Platform.
3. The Sequent platform loads the SmartLink, performing authentication and 
authorization and automatically redirecting to the voting booth when 
authentication and authorization succeed. 
