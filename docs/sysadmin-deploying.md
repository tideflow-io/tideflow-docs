---
id: sysadmin-deploying
title: Deploying
---

You can run Tideflow anywhere, like any other MeteorJS or NodeJS application. 
If you are looking to deploy Tideflow manually, check the [MeteorJS Documentation](https://guide.meteor.com/deployment.html) for a very detailed tutorial.

## Docker containers

You can run Tideflow via Docker containers. Tideflow images are updated whenever
a new change is made into the `master` branch.

The images are available at Docker Hub:

- [tideflowio/tideflow](https://hub.docker.com/r/tideflowio/tideflow) - the
latest stable `master` image.

## Requirements

### Database

On testing and development environments, MeteorJS provides a MongoDB instance -
out of the box - which is not suitable for production. You need to have an
external MongoDB database. For the best performance please use a replica-set
database with oplog access enabled.

### Network

You need to have access and exposed the following ports via your firewall:

- `3000` _Required._ (you can customize this via `PORT` environment variable) The port the app listens on.
- `1337` _Optional._ (you can customize this via `TF_AGENT_PORT` environment variable) The port the Agent Server listens on.

## Environment variables

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
# If not used, a hardcoded value will be used, which could expose your files.
# Example: 3r4t678loiyutr367
JWT_SECRET

# Which port the app should listen.
# Example: 3000
PORT

# Which port the agent's service should listen.
# Example: 1337
TF_AGENT_PORT
```
