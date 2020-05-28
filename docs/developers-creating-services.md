---
id: developers-creating-services
title: Creating Services
---

_Documentation in progress_

## Folder structure

Tideflow's services folder architecture follows the same approach as MeteorJS.

```bash
|- services
  |- my-service-name
    |- both
      |- en.i18n.yml
    |- client
      |- service.js
    |- server
      |- service.js
```

## Service.js

Service.js are two javascript files located in both `client` and `server` folders
that contains all necesarry specs to be usable by Tideflow.

Some of this spec are:
- The name and description of the service.
- Its icon and the icon's color.
- If the can be used as a workflow trigger, and/or as a workflow task, etc.
- What are the templates to show to the user when interacting with the plugin 
(this is only configurable on the _client_ version)
- The list of events that users can use.
- Etc.

When creating a new service, both files will look almost identical (as they
are part of the same service), with some basic differences.

For example, in the case of the _client_ version, it contains the list of
templates that it will render. And for the _server_ version will contain the
logic to be executed when a step is triggered.

### Client

An example of the service's client service.js file could be the following:

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
  templates: {
    createForm: 'servicesWebformCreateForm',
    updateForm: 'servicesWebformUpdateForm',
    detailsView: 'servicesWebformDetailsView',
    createFormAfter: 'servicesWebformCreateFormAfter',
    updateFormAfter: 'servicesWebformUpdateFormAfter',
    createFormPre: 'servicesWebformCreateFormPre',
    updateFormPre: 'servicesWebformUpdateFormPre'
  },
  events: [
    {
      name: 'execute',
      humanName: 's-agent.events.command.name',
      viewerTitle: 's-agent.events.command.title',
      inputable: false,
      stepable: true,
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

|Property|Description|Notes|
|---|---|---|
|name|Unique slug amont other services, used internally to deferentiate it from other services.|required|
|humanName|Translation string for the service's name|required|
|description|Translation string for the service's description|required|
|website|Documentation URL|optional|
|icon|CSS class that holds the service's icon. This is commonly used for FontAwesome icons|required|
|iconColor|Icon's color, as HEX value. `#AAEEDD`|required|
|ownable|Indicates if the user can create a integration that can be shared across multiple workflows.||
|stepable|Indicates if the service can be used as workflow tasks, other than as a trigger||
|templates|Set of templates for rendering at different stages of user's interaction|optional. See the list below|
|events||

*Event definition properties*

|Property|Description|
|---|---|
|name||
|humanName||
|viewerTitle||
|inputable||
|stepable||
|templates||

#### Templating

##### Service creation and edition templates

- `detailsView` The main card, when editing the service's details - _example.com/services/gh-ci/serviceId/edit_
- `updateFormPre` Before the main card, when editing the service's details - _example.com/services/gh-ci/serviceId/edit_
- `updateForm` The main card's content, when editing the service's details - _example.com/services/gh-ci/serviceId/edit_
- `updateFormAfter` After the main card's content row, when editing the service's details - _example.com/services/gh-ci/serviceId/edit_
- `createFormPre` At the beginning of the main card, when creating a new service - _example.com/services/new/gh-webhooks_
- `createForm` Right after the service's title, when creating a new service - _example.com/services/new/gh-webhooks_
- `createFormAfter` after the main card's row, when creating a new service - _example.com/services/new/webform_
- `triggerEditorPre` on the trigger's card, right after the first dropdown - _example.com/flows/new_

##### Flow editor templates

- `eventConfig` - on the ste's card, right after the steps event selector - _example.com/flows/new_

_Documentation in progress_


### Server