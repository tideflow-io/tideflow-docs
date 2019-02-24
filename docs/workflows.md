---
id: workflows
title: Workflows
---

A workflow is a set of steps to accomplish a certain task. In Tideflow, they
happen based on a certain event, a "trigger".

## Example

Let's put an example: let's say you want to automate sending bills to your
customers and to your accountant.

Sending the bills could be the result of the following steps:

- Creating a PDF file with the bill details
- Send a copy of the PDF via email to your inbox
- Send a copy of the PDF via email to your accountant's email

When this should happen (the trigger) could be a date (1st of each month).

Given this example, the workflow looks like this:

***Trigger***

- Date is 1st of any month

***Steps***

- Create PDF file 
- Send to my inbox
- Send to accountant@example.com