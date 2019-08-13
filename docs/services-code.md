---
id: services-code
title: Code snippets
---

Code is a service that runs any code snippet in your TF's server.

For example, you can set your workflow to be triggered when someone submits an
online form, and then use a code snippet to process the request. This code
snippet can be a NodeJS script that performs some manipulation on the submited
data, and then submits it to a third party service.

The result of the whole process will be sent to your workflow's next step.

### How to receive data from previous steps connected to my Code snippet

All results from previous steps are stored as a JSON array in a temporal file
you can access. The full path of this file can be found in the
`TF_PREVIOUS_STEPS` environment variable.

```javascript
const fs = require('fs')
const fileContents = fs.readFileSync(process.env.TF_PREVIOUS_STEPS)
const results = JSON.parse(fileContents)
```

### How the Code service works internally

Depending on the step configuration, the process might be different. But as a
general rule, the way it works is as follows:

First, the code snippet you created via TF's web interface is stored in a
randomly generated temporal file in the machine where TF runs.

Then, the same process happens for the data that comes from previous steps.
TF stores an strigified version of it (originally a JavaScript array) in a
temporal file.

Having both files ready (the code to run and the data from previous steps),
TF spawns a process with the code to be run, and attaches the
`TF_PREVIOUS_STEPS` environment variable to its process.

You can see this via the service's soruce code @ [https://github.com/tideflow-io/tideflow/blob/master/imports/services/code/server/service.js](https://github.com/tideflow-io/tideflow/blob/master/imports/services/code/server/service.js)
