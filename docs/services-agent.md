---
id: services-agent
title: Agent
---

With Tideflow's Agent, you to run commands in you computers as part of your
processes.

This means, even if you are running Tideflow in a cloud server, you can run commands
as part of your workflow actions in your office or home computers.

Tideflow's agent can take data from processes actions connected to it, and will
report its results to the next actions.

_Note it does requires to have NodeJS installed in the machine intended to
execute the agent_

Read [tideflow-agent's cli README](https://raw.githubusercontent.com/tideflow-io/tideflow-agent/master/README.md) to learn more about the cli tool and how to use it.

The cli is also available on npmjs.com. [@tideflowio/tideflow-agent](https://www.npmjs.com/package/@tideflowio/tideflow-agent)

## Working with files

Some actions generates files, like the PDF service, which allows you to generate
custom content PDFs.

Tideflow allows you to access those files from your agents via a safe and public
URL assigned to each file. This URL will be valid for one hour.
