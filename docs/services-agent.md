---
id: services-agent
title: Tideflow's agent
---

Tideflow's Agent is a micro software you can install in your own premises (your
own computer, your company's servers, etc) where Tideflow can run some of your
workflow's tasks.

It will take all the necessary data from your workflow tasks and will report
its results back to Tideflow.

You can run NodeJS scripts and terminal commands (Windows, MacOS and Linux). This
allows you to run code privately in your own terms inside your firewall'd area.

Some actions can generate files, for example the PDF files. The tasks executed
using Tideflow's agent will be able to process and make use of those files. TideFlow
will expose then via a private URL so your scripts can download them.

---

_Note the Agent requires to have NodeJS installed in the machine intended to
execute the agent_

Read [tideflow-agent's cli README](https://raw.githubusercontent.com/tideflow-io/tideflow-agent/master/README.md) to learn more about the cli tool and how to use it.

The cli is also available on npmjs.com. [@tideflowio/tideflow-agent](https://www.npmjs.com/package/@tideflowio/tideflow-agent)
