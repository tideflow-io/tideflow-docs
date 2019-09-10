---
id: workflows-introduction
title: Workflows
---

A workflow is a set of tasks to accomplish a certain task. In Tideflow, they
happen based on a certain event. We call this event a "trigger".

Tideflow allows you to create as many as you want.

## Example

Let's make an example. Say you want to automate generating and sending
bills to your customers and to your accountant.

Doing this could be the result of the following tasks:

- Create the PDF file with the bill details.
- Send a copy of the PDF via email to your customer's email.
- Send a copy of the PDF via email to your accountant's email.

You want this to happen on an specific date (1st of each month). We call this
condition, the trigger.

Given this example, the workflow looks like this:

*Trigger*:

- A date: The day is 1st of any month.

*Tasks*:

- Create PDF file 
- Send email to customer@example.com
- Send email to accountant@example.com
