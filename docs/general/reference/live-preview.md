---
sidebar_position: 5
title: Live Preview
---

If in the `Create Election` sidebar section you click in the `Actions` button
at the right top, and then click on `Live Preview` from the dropdown menu, you
will access a live preview of the voting booth.

![Live preview menu](./assets/create-election-live-preview-action.png)

The live preview removes the need to create an election to see how the voting
booth looks like, reducing the feedback loop. 

![Live preview voting booth](./assets/live-preview-booth.png)

The way the live preview works is that instead of making API calls to retrieve
the election information, the information is passed from the admin console to
the voting booth by storing it in the session storage.

The `Live Preview` URL has the following format:

    https://sequentech.io/booth/[election-id]/preview-vote

When the voting booth is opened at that url, it retrieves the information on
the election in the session storage for the key `[election-id]`. This information
is the same as the [Election Creation JSON](../../reference/election-creation-json), it's just
a stringified version of that, as that's the session storage format.

The live preview feature supports [Parent and Children Elections](../guides/parent-and-children-elections/) as well, where the
parent election is the `[election-id]` in the URL.