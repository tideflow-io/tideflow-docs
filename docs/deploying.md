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
