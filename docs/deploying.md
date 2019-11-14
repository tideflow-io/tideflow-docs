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

# The JWT secret for file url (downloads) tokens.
# Example: 3r4t678loiyutr367
JWT_SECRET
```

---

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/tideflow-io/tideflow)
