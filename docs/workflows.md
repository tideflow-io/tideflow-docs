---
id: workflows
title: Workflows
---

A workflow is a set of steps to accomplish a certain task. In Tideflow, they
happen based on a certain event. We call this event a "trigger".

## Example

Let's put an example: let's say you want to automate generating and sending
bills to you customers and your accountant.

Doing this could be the result of the following steps:

- Creating a PDF file with the bill details.
- Send a copy of the PDF via email to your customer's email.
- Send a copy of the PDF via email to your accountant's email.

You want this to happen (the trigger) on an specific date (1st of each month).

Given this example, the workflow looks like this:

***Trigger***

- The day is 1st of any month, at 7:00am

***Steps***

- Create PDF file 
- Send email to customer@example.com
- Send email to accountant@example.com
