---
id: services-agent
title: Agent
---

Tideflow's agent service allows you to run commands in your own computers or
servers, via the agent's cli tool. This commands can be set as workflows steps.

When you create a new agent via the dashboard, Tideflow will assign it an
authentication token.

This means that you can have multiple agents, each one of thenm servig different
purposes on different workflows.

### How the agent works internally

The agent connects with your Tideflow via socketIO, and first tries to 
identificate itself against the server.

When the agent is authenticated, and Tideflow starts sending it commands
to execute, the agent distributes them across different processes, using
an internal parallel queue.

You can customise the max number of jobs the agent should process concurrently
via a parameter when executing the agent. Read [tideflow-agent's cli README](https://raw.githubusercontent.com/tideflow-io/tideflow-agent/master/README.md) for the full list of cli's parameters.

## More information

Read [tideflow-agent's cli README](https://raw.githubusercontent.com/tideflow-io/tideflow-agent/master/README.md)
to learn more about the cli tool.

The cli is also available on npmjs.com. [@tideflowio/tideflow-agent](https://www.npmjs.com/package/@tideflowio/tideflow-agent)
