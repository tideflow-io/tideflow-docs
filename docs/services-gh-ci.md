---
id: services-gh-ci
title: Github CI
---

With Github's CI service, you can run your source code's CI with Tideflow and
the [agent service](/docs/services-agent).

## How to use it

### 1. Create a GitHub application.

The first step is to tell GitHub about the existence of Tideflow. Go ahead and
create an application by going to [github.com/settings/apps/new](https://github.com/settings/apps/new)

Fill-in both Webhook URL and Webhook secret sections with the values that Tideflows
will give you. Specify any website as the Homepage URL.

For the Repository permissions section, select:

- **Checks:** Read & write
- **Contents:** Read only

For the Subscribe to events section, check:

- Check suite
- Push

Select "Any account" in the "Where can this GitHub App be installed?" question.

The application is almost ready. Click on *Create GitHub App.*

At this point, you need to copy 3 things from the newly created Github application, into this page. This are:

- The **App ID**
- The **Client ID**
- Scroll down to the **Private keys** section. Generate a private key and copy its content.

### 2. Grant access to your repositores.

The next step is to install the recently created application in the repositories you want to interact with from your workflows.

Visit the **Install App** page for the application.

Select the desired repositores, and click install.

### 3. Have fun with your workflows.

If everything has gone smoothly, you can use your repositories events as triggers and steps.
