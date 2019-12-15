---
id: getstarted-install
title: Installing Tideflow
---

Installing Tideflow is pretty simple. Once you have MeteorJS installed, you are
good to go.

MeteorJS will create and launch an isolated MongoDB and Tideflow.

## Installation

1. Requirements:

- Install MeteorJS [OSX / Linux / Windows](https://www.meteor.com/install)
- If you want to contribute to Tideflow's source code you will also need a
GitHub account with a [configured SSH key](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)

3. Clone [**Tideflow**](https://github.com/tideflow-io/tideflow)

```sh
# Via SSH - method for contributors
git clone git@github.com:tideflow-io/tideflow.git

# Via HTTPS
git clone https://github.com/tideflow-io/tideflow.git
```

4. You are all setup, cd into the Tideflow's folder and execute meteor.

```sh
cd tideflow
meteor
```

The process will take some time the first time. It will download the meteor
release, all the project's dependencies, and start mongodb.

5. Open your browser and visit [localhost:3000](http://localhost:3000)

The first time you try to login, Tideflow will open the installation
screen. This is a single step process that will create your first user
credentials as well as some other necessary settings.

The next time you want to execute Tideflow locally, simply run `meteor`
