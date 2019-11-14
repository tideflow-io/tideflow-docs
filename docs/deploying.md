---
id: deploying
title: Deploy
---

For deploying Tideflow, you can follow the same
[deployment process](https://guide.meteor.com/deployment.html) as for any other
MeteorJS project. Check [your options](https://guide.meteor.com/deployment.html#deployment-options)
in MeteorJS official docs.

You must set the following environment variables:

```bash
# SMPT connection string.
# Example: smtp://user%40example.com:password@emailserver.com
MAIL_URL  

# MongoDB connection string
MONGO_URL 

# MongoDB Oplog. Pointing to a replica set.
# Optional. If not provided, you might experience performance issues.
MONGO_OPLOG_URL 

# The site's main url
# Example: https://subdomain.example.com
ROOT_URL
```

## Network requirements

For a fully operational Tideflow, you need to have access and exposed the following ports via your firewall:

- `3000` (you can customize this via `PORT` environemnt variable) The port the app listens on.
- `1337` (you can customize this via `TF_AGENT_PORT` environemnt variable) The port the Agent Server listens on.

---

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/tideflow-io/tideflow)
