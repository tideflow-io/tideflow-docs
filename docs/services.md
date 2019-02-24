---
id: services
title: Services
---

Services are Tideflow's plugins.

They allow to extend workflows possibilities by adding new triggers and steps
types.

In the example from [the previous concept](/docs/workflows), we have seen 3
different services:

- [Cron](https://github.com/tideflow-io/tideflow/tree/master/imports/services/cron) - a date-based trigger.
- [PDF generator](https://github.com/tideflow-io/tideflow/tree/master/imports/services/pdf) - to create bills
- [Outgoing Emails](https://github.com/tideflow-io/tideflow/tree/master/imports/services/email-outgoing) - For sending emails

Tideflow's plugin system is extendable. You can create plugins yourself
via code.

They will show in the Tideflow's UI so you can use your own plugins in your
workflows.

We suggest you to either check the list of [available services](https://github.com/tideflow-io/tideflow/tree/master/imports/services)
where you can browse their source code, or continue reading this docs. We
will cover [how to create services](/docs/creating-services) later on.
