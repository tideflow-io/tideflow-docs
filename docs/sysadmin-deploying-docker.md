---
id: sysadmin-deploying-docker
title: Docker
---

## Install

You need to have docker installed. You should find the [Docker installer for your platform](https://www.docker.com/products/overview). This will install all the requirements to start.

We strongly encourage reading Docker's [Getting Started docs](https://docs.docker.com/) and going through some of their [beginner tutorials](https://docs.docker.com/learn/).

## Deploy

To run the latest stable build of Tideflow, launch a docker container from the
Docker Hub's image: `tideflowio/tideflow`.

An example of the command that launches Tideflow is:

```bash
docker run -d \ 
  -p 80:3000 \
  -p 1337:1337 \
  -e ROOT_URL="<the url where your application will be available>" \
  -e MONGO_URL="<mongodb deployment>" \
  -e JWT_SECRET="<a random security token>" \
  tideflowio/tideflow:latest
```

Let's cover each argument in the example:

- `-d` launches the container in [detached mode](https://docs.docker.com/engine/reference/run/#detached-vs-foreground). This allows you to close the terminal while it
continuous to run in the background.
- `-p 80:3000` This exposes the port 80 in your server, to the port 3000 in the
docker container. 3000 is the default port that Tideflow's server listens on. `-p host:container`.
[more info](https://docs.docker.com/engine/reference/run/#expose-incoming-ports)
- `-p 1337:1337` This exposes the port 1337 to the 1337 in the container. This
is required to connect Tideflow's agent. [More info](/docs/services-agent).
- `-e ROOT_URL` Specifies on which URL Tideflow will be running at.
- `-e MONGO_URL` The URL of your MongoDB deployment. Please note that you can
and should also use `MONGO_OPLOG_URL` if your MongoDB is a replica set. This
will improve the performance. [More info](https://themeteorchef.com/snippets/setting-up-mongodb-oplog-tailing/)
- `-e JWT_SECRET` This is a random text, used to encode and verify access tokens
that give access to the files that Tideflow generates. [More info](/docs/services-agent#working-with-files)