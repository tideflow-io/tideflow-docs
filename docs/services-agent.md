---
id: services-agent
title: Agent
---

Tideflow's Agent allows you to run commands in you computer as part of your workflows. 

This means that even if you are running Tideflow in a cloud server, you can run commands
as part of your workflow steps in your office or home computers.

### Getting started

Please refer to [@tideflowio/tideflow-agent](https://www.npmjs.com/package/@tideflowio/tideflow-agent)
in order to get started with Tideflow's agent and its installation.

### Passing data to the command

The result from previous steps are sent to your task's command via the parameter
`--tf_previous`. For example, let's say your task command is

```bash
meow
```

then the Agent will execute it as:

```bash
meow --tf_previous <previous-steps-output>
```

The previous task's output is an stringified representation of the following
JavaScript array:

```json
[
  {
    "type" : "object",
    "data" : {}
  }
]
```

Each of the predecesor tasks results is represented as an arrray element with two root properties:

- **type**: an string that defines the kind of data retuned by the previous
step (object, file, etc)
- **data**: an object containing the task's result.

### How the Agent service works internally

The agent connects to your Tideflow via socketIO, and it first tries to 
identificate itself against the server. This authentication is done via a token
generated when you create an agent via TF's web interface.

When the agent is authenticated, Tideflow can start sending your flows commands.
Then, the agent distributes them across different processes, using an internal
parallel queue.

You can customise the max number of jobs the agent should process concurrently
via a parameter when executing the agent. Read [tideflow-agent's cli README](https://github.com/tideflow-io/tideflow-agent) for the full list of cli's parameters.

### More information

Read [tideflow-agent's cli README](https://raw.githubusercontent.com/tideflow-io/tideflow-agent/master/README.md)
to learn more about the cli tool.

The cli is also available on npmjs.com. [@tideflowio/tideflow-agent](https://www.npmjs.com/package/@tideflowio/tideflow-agent)
