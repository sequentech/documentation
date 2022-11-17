---
sidebar_position: 6
title: Electoral Board Ceremonies
---

The Electoral Board Ceremonies allow administrators to delete the private keys of the electoral process from the trustee's servers while the election is active, as an extra security measure. The private keys are restored after the voting period is closed and before the tally is launched.

# Configuration

This is an extra feature and it can be manually enabled by setting a specific parameter in the JSON configuration of the election before the election is created. Specifically `presentation.election_board_ceremony` must be set to `true`.

Furthermore, the administrators of the Sequent servers will need to configure an user and password for each of the trustee servers.

# Dashboard

Once the election is created, the ceremonies will be available in the Dashboard under the Actions dropdown:

![Elections and Questions](./assets/ceremonies_dashboard.png)

# Keys Distribution Ceremony

In this ceremony, each trustee will download the share of the private keys for the election and the keys will be removed from the trustee servers. Note that this action can only be launched if the election is configured with `election_board_ceremony` set to `true`, and that the election cannot be started before this ceremony is successfully completed.

In order to start the ceremony, go to the election Dashboard and click on `Launch key distribution ceremony` under the `Actions` button. This will launch a modal and each trustee will need to complete the following steps:

* Login into the trustee account. The administrator of the Sequent servers must provide the user/password for the trustee.
* Download the share of the private keys. In this screen you can download the keys as many times as you need.
* Secure at least two copies of the private keys. Once you've copied the keys into two different USB memory sticks, check the two checkboxes and click `Next step`.
* Check the contents of the keys. Drag and drop the previously downloaded file to check its content.
* Delete the share of the private keys from the trustee's server.

Note that if the modal is closed too early, it can be launched again. If the share of the private keys for some of the trustees have already been deleted, the modal will continue from that point with the next trustee.

# Opening Ceremony

In this ceremony, each trustee will upload the share of the private keys for the election and the keys will be restored to the trustee servers. Note that this action can only be launched if the election is configured with `election_board_ceremony` set to `true`, after the voting period is stopped, and that the tally cannot be started before this ceremony is successfully completed.

In order to start the ceremony, go to the election Dashboard and click on `Launch opening ceremony` under the `Actions` button. This will launch a modal and each trustee will need to complete the following steps:

* Login into the trustee account. The administrator of the Sequent servers must provide the user/password for the trustee.
* Check the contents of the keys. Drag and drop the previously downloaded file to check its content. You must use the file previously downloaded in the Keys Distribution Ceremony.
* Restore the share of the private keys to the trustee's server.

Note that if the modal is closed too early, it can be launched again. If the share of the private keys for some of the trustees have already been deleted, the modal will continue from that point with the next trustee.
