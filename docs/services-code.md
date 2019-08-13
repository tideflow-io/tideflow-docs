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

An example on how to access this data could be by using a NodeJS code like this:

```javascript
const fs = require('fs')
const fileContents = fs.readFileSync(process.env.TF_PREVIOUS_STEPS)
const results = JSON.parse(fileContents)
```

This is an example for this file contents, represented in JSON format.

```json
[
  {
    "_id": "oBoPxzQTu94a5mPdh",
    "stepIndex": 1,
    "type": <a service name>,
    "event": <a service's event name>,
    "createdAt": "2019-08-13T16:50:43.152Z",
    "updatedAt": "2019-08-13T16:50:43.741Z",
    "stepResults": [
      {
        "type": "object",
        "data": { "character": "Jon Snow" }
      },
      {
        "type": "file",
        "data": "truncated",
        "path": "/var/folders/5s/tjnclfh50s1_cvxd7d5gr8wm0000gn/T/1565715043767-bill.pdf",
        "fileName": "bill.pdf"
      }
    ]
  }
]
```

In the previous representation, we can see multiple things:

- The list of execution logs from preceding steps (the root array) only contains
one single element. This means that the step only had one preceding step connected
to it.
- The predecesor task is the 2nd step in the workflow schema (apart from the trigger).
- The preceding step service name is `<a service name>`, and the event executed
`<a service's event name>`.
- The execution of the previous step fired on `createdAt` and finished at `updatedAt`
- It resolved with two different results: an object, containing a character's name, and
a file.

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
