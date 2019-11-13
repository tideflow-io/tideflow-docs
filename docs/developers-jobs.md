---
id: developers-jobs
title: Jobs
---

Tideflow have an embeeded job queue sytem in order to execute the workflows 
actions, sending digest emails and more.

The list of jobs are:

* **[`workflow-start`](https://github.com/tideflow-io/tideflow/blob/2cfaaf14f364c6f385f6cd579700e124e6dcd5d0/imports/queue/server/index.js#L416)** Triggered when a workflow is executed. Deals with executin the logic of the workflow's trigger and the scheduling of further actions.
* **[`workflow-step`](https://github.com/tideflow-io/tideflow/blob/2cfaaf14f364c6f385f6cd579700e124e6dcd5d0/imports/queue/server/index.js#L546)** Triggered when a workflow action needs to be executed. Deals with a single workflow action execution and the scheduling of further actions.
* **[`workflow-execution-notify-email`](https://github.com/tideflow-io/tideflow/blob/2cfaaf14f364c6f385f6cd579700e124e6dcd5d0/imports/queue/server/index.js#L719)** Triggered when a workflow gets executed. Deals with notifying the user via email. Setting not available right now to be set via the UI, but to be added very soon.
* **[`workflow-execution-finished`](https://github.com/tideflow-io/tideflow/blob/2cfaaf14f364c6f385f6cd579700e124e6dcd5d0/imports/queue/server/index.js#L746)** Triggered when a workflow finishes being executed. Some integrations (for example those that execute source code or bash scripts in your machine) makes use of this job so they know when any temporal file should be deleted.
  * Example: The GitHub CI integration must remove the check'd out source code after the workflow finishes being executed. (so TF doesn't waste anyones hard disk space) _`workflow-execution-finished`_ will then call [this method](https://github.com/tideflow-io/tideflow/blob/master/imports/services/github-ci/server/service.js#L141)
* **[`_executionLogsRun`](https://github.com/tideflow-io/tideflow/blob/70c5f8a5c0fcf5b691e29b8c5b80fae4c20b26dd/imports/services/_executionLogs/server/job.js#L108)**: Triggered every day. Prepares all data required for sending digest emails to users, whoever opted to, receive either daily or weekly sommary of their workflows executions.
* **[`_executionLogsSendEmail`](https://github.com/tideflow-io/tideflow/blob/70c5f8a5c0fcf5b691e29b8c5b80fae4c20b26dd/imports/services/_executionLogs/server/job.js#L134)** Sends the email with the data provided from __executionLogsRun_
* **[`s-cron-runOne`](https://github.com/tideflow-io/tideflow/blob/3fb686eb069be3a74b4d15030c7db33e3ee8e322/imports/services/cron/server/job.js)** Runs the workflows that are using a CRON time expression to be executed.
* **[`s-rss-schedule`](https://github.com/tideflow-io/tideflow/blob/70c5f8a5c0fcf5b691e29b8c5b80fae4c20b26dd/imports/services/rss/server/job.js#L50)** Triggered every hour. Find all workflows that uses the RSS service for triggering its execution.
* **[`s-rss-runOne`](https://github.com/tideflow-io/tideflow/blob/70c5f8a5c0fcf5b691e29b8c5b80fae4c20b26dd/imports/services/rss/server/job.js#L10)** Triggered from _s-rss-schedule_. Requests the workflow's trigger, getting the contents from the RSS feed and triggering futher jobs if the workflow requires it. 

---

The hardest thing with Tideflow's job queue requirements, is that one of the ways that users have to trigger the execution of their workflows, is via cron expressions.

For example, Jon wants his workflow to be executed `0 12 * * *` (at 12:00 every day). TF will schedule a `s-cron-runOne` job at that time. Then, Jon changes the cron expression to `30 14 * * *` (at 14:30 every day). TF needs to store the ID of the original `s-cron-runOne` scheduled job, in order to invalidate it and schedule a new one with the new cron expression.

But not only that. Jon can also enable or disable a workflow to prevent it from being executed. Also remove it, or change its trigger from a cron expression to something else. This means that the scheduled `s-cron-runOne` job must be removed and/or re-created again depending on the situation.

Tideflow solves this by using hooks when the user either create, update or delete a workflow with the cronjob service as a trigger.

[See the working source code](https://github.com/tideflow-io/tideflow/blob/e656c0fb62e89b2e66c3c59620375e686283b0a0/imports/services/cron/server/service.js#L42).
