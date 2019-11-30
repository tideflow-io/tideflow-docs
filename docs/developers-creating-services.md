---
id: developers-creating-services
title: Creating Services
---

## Developing new integrations

_Documentation in progress_

## Structure

```bash
|- services
  |- githug-ci
    |- both
      |- index.js
      |- en.i18n.yml
    |- client
      |- index.js
      |- service.js
    |- server
      |- service.js
```

## Service.js

```js
import { servicesAvailable } from '/imports/services/_root/client'

const service = {
  name: 'agent',
  humanName: 's-agent.name',
  description: 's-agent.description',
  website: 'https://tideflow.io/docs/services-agent',
  icon: 'fas fa-save',
  iconColor: '#3498DB',
  ownable: true,
  stepable: true,
  templates: {},
  hooks: {
    // service: {},
    // step: {},
    // trigger: {}
  },
  events: [
    {
      name: 'execute',
      humanName: 's-agent.events.command.name',
      viewerTitle: 's-agent.events.command.title',
      inputable: false,
      stepable: true,
      callback: () => {},
      templates: {
        eventConfig: 'servicesAgentExecuteConfig'
      }
    }
  ]
}

module.exports.service = service

servicesAvailable.push(service)
```

*Service definition properties*

|Property|Description|
|---|---|
|name|Unique slug amont other services, used internally to deferentiate it from other services.|
|humanName|Human readable name for the service|
|description|Short explanation of what's the service's for|
|website|Documentation URL|
|icon|CSS class that holds the service's icon. This is commonly used for FontAwesome icons|
|iconColor|Icon's color, as HEX value. `#AAEEDD`|
|ownable||
|stepable||
|templates||
|hooks||
|events||

*Event definition properties*

|Property|Description|
|---|---|
|name||
|humanName||
|viewerTitle||
|inputable||
|stepable||
|callback||
|templates||

## Templating

### Service creation and edition templates

- `detailsView` The main card, when editing the service's details - _example.com/services/gh-ci/serviceId/edit_
- `updateFormPre` Before the main card, when editing the service's details - _example.com/services/gh-ci/serviceId/edit_
- `updateForm` The main card's content, when editing the service's details - _example.com/services/gh-ci/serviceId/edit_
- `updateFormAfter` After the main card's content row, when editing the service's details - _example.com/services/gh-ci/serviceId/edit_
- `createFormPre` At the beginning of the main card, when creating a new service - _example.com/services/new/gh-webhooks_
- `createForm` Right after the service's title, when creating a new service - _example.com/services/new/gh-webhooks_
- `createFormAfter` after the main card's row, when creating a new service - _example.com/services/new/webform_
- `triggerEditorPre` on the trigger's card, right after the first dropdown - _example.com/flows/new_

### Flow editor templates

- `eventConfig` - on the ste's card, right after the steps event selector - _example.com/flows/new_

_Documentation in progress_
