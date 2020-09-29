---
id: getstarted-templating
title: 📄 Templating system
sidebar_label: Templating system
---

Tideflow lets you customise your workflow's tasks data. This means that instead
of hardcoding what a task is doing, it can intake data from previous tasks
results.

Let's put a example: you want to create a PDF file, but it needs to contain the
name of a user, which is provided by the workflow's endpoint trigger: an endpoint.

<figure>
  <img src="/img/templating/pdf_example.png" 
    style="border:1px solid gray;" />
</figure>

Instead of hardcoding the user's name in the PDF template, your template can
take the user's name and other details provided by the endpoint's POST body.

<strong>Post request example:</strong>

```sh
curl --location --request POST 'http://localhost:3000/service/endpoint/2cc6ce80-8235-4cbc-b72f-9dbc3cf8364d' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Jose",
  "location": {
      "lat": 42.8867647,
      "lon": -9.2716399
  }
}'
```

<strong>PDF Template</strong>

```text
Hello {{trigger.result.data.name}}! 

We found you. You are in:
{{trigger.result.data.location.lat}} & {{trigger.result.data.location.lon}}
```

## Where to use it

Tideflow integrates its templating system in most of the places where it could be used.

Aditionally, you will see, via the workflow editor, every place where it can be used.

## How to use it

Using the templating system is as easy as placing square brackets {{}} whenever
your want Tideflow to replace it with constom values.

For example, if you want to use a value provided by the workflow's trigger, you
can do so as:

```text
{{trigger.result.data.SomeValue}}
```

This will take the property "SomeValue" from the trigger results.

Apart from the trigger's data, you can use any task output. For example:

```text
{{MyTaskId.result.data.SomeOtherValue}}
```

This will take the property "SomeOtherValue" from the task which id is "MyTask".

You can customise each task's id via the workflow editor.

### Available template data

Find below what's the available templating system data, for either the trigger
and tasks.

```json
{
  "MyTaskId": {
    "stepIndex": 1,
    "type": "file",
    "event": "read-file",
    "createdAt": "2020-09-29T14:32:17.290Z",
    "status": "success",
    "result": {
      "files": [
        {
          "fileName": "basic.html",
        }
      ]
    }
  },
  "trigger": {
    "stepIndex": "trigger",
    "type": "endpoint",
    "event": "called",
    "createdAt": "2020-09-29T14:32:17.274Z",
    "status": "success",
    "result": {
      "data": {
        "name": "Jose",
        "location": {
          "lat": 42.8867647,
          "lon": -9.2716399
        }
      }
    }
  }
}
```

## How it works

Tideflow's templating system uses [Handlebars](https://handlebarsjs.com/guide/).
This lets you use simple expressions, nested properties, context evaluations,
conditionals, etc.

### Simple expressions

Replacing your template with the corresponding properties:

```text
{ "name": "Jose", "surname": "Constela" }

&lt;p&gt;{{name}} {{surname}}&lt;/p&gt;
```

### Nested objects

Input objects contains other objects or arrays:

```text
{
  person: {
    firstname: "Yehuda",
    lastname: "Katz",
  }
}

{{person.firstname}} {{person.lastname}}
```

### Evaluation context

The built-in block-helpers <b>each</b> and <b>with</b> allow you to
change the current evaluation context.

The <b>with</b>-helper dives into an object-property, giving you access to its properties

```text
{{#with person}}
  {{firstname}} {{lastname}}
{{/with}}
```

The <b>each</b>-helper iterates an array, allowing to you access the properties of each object via simple handlebars expressions.

```text
{
  people: [
    "Yehuda Katz",
    "Alan Johnson",
    "Charles Jolley",
  ],
}

&lt;ul class=&quot;people_list&quot;&gt;
  {{#each people}}
    &lt;li&gt;{{this}}&lt;/li&gt;
  {{/each}}
&lt;/ul&gt;
```

### Conditionals

Handlebars' built-in <b>if</b> and <b>unless</b> control structures:

<b>if</b> example:

```text
{{#if isActive}}
  &lt;img src=&quot;star.gif&quot; alt=&quot;Active&quot;&gt;
{{/if}}
```