# KFUPM Semester Progress Twitter Bot

[![TypeScript version][ts-badge]][typescript]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

A Twitter bot that tweets the current progress of the [KFUPM] current semester.

The tweet will look something like this:

```javascript
 [🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢🁢]100% 🎉

130/130 days left 🗓

Today: Last day for faculty to submit grades to the Deanship (2:00 PM);Official Graduation Date 💡


#KFUPM
```

**Don't forget to follow the bot account <a href="https://twitter.com/KFUPM_SP" target="blank"><img src="https://img.shields.io/twitter/follow/KFUPM_SP?logo=twitter&style=for-the-badge" alt="KFUPM_SP" /></a> 🫶**

## Table of Contents
  * [Contribute to This Project](#contribute-to-this-project)
    + [Repo Issues](#repo-issues)
      - [How to File an Issue?](#how-to-file-an-issue)
    + [Creating a New Branch](#creating-a-new-branch)
    + [Conventions](#conventions)
      - [Commits and PRs](#commits-and-prs)
      - [TypeScript File Naming](#typescript-file-naming)
  * [Build, Run and Deploy](#build-run-and-deploy)
    + [Clone Repository](#clone-repository)
    + [Setup](#setup)
    + [Run](#run)
    + [Deploy](#deploy)
  * [What is a simulator?](#what-is-a-simulator)
  * [License](#license)


## Contribute to This Project

### Repo Issues

If you find a bug throughout your development or testing process, please do not hesitate to file an issue describing the bug you noticed.

#### How to File an Issue?

Here is how you create an issue:

- Go to the issues tab.
- Click on "New issue".
- Add an informative title following the naming convention below.
- Add a detailed description with the suggested solution if possible.
- Select applicable labels after reading each label's description.

### Creating a New Branch

If you want to start working on a new feature/fix a bug, create a new branch with a descriptive title preceded by your name as `@yourname/new-feature-title`.

_Note: branch names are all small cases separated by a dash `-`, e.g. `@hady/twitter-api-migration`_

### Conventions

#### Commits and PRs

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements:

- **fix:** a commit of the type `fix` patches a bug in the codebase.

- **feat:** a commit of the type `feat` introduces a new feature to the codebase.

- **BREAKING CHANGE:** a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking change.

- types other than fix: and feat: are allowed, for example `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.

Refer to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more information.

#### TypeScript File Naming

- Small letters only.
- Use underscore as delimiters.
- Keep it short, clear, and simple.

Examples :
`date_helper.ts`
`settings_controller.ts`

## Build, Run and Deploy

This project is intended to be used with the latest Active LTS release of Node.js.

### Clone Repository

To clone this repo:

1. Open a new `terminal`/`powershell` window.
2. Clone the repo:
   ```bash
   git clone https://github.com/hadysata/KFUPM-semester-progress-bar.git
   ```
   
3. Open the project in your favorite IDE/Code editor

### Setup

1. In the project root folder, run 
```bash
npm i && cd functions && npm i
```

2. If you wish to use [Firebase cloud functions](https://firebase.google.com/products/functions), run:
```bash
npm install -g firebase-tools
```

```bash
cd functions && firebase init
```

Follow the instructions in your CLI, and make sure to setup Firebase cloud functions(Your Firebase project plan should be `Blaze`)


3. In the project root folder, create a new `.env` file with the following variables:

```JS
APP_KEY=""
APP_SECRET=""
ACCESS_TOKEN=""
ACCESS_SECRET=""
```

These are Twitter keys used by the bot to use Twitter API; you can get these keys from [Twitter developer portal](https://developer.twitter.com/en/portal/)

### Run
To run the script, in the project root folder run:

```bash
npm run build
```

```bash
npm run start
```

To run the [simulator], run: 
```bash
npm run start:simulator
```

To run the bot on Firebase cloud functions, run:
```bash
cd fuctions
```

```bash
npm run serve
```

### Deploy

To deploy the bot script to **Firebase cloud functions**, run:
```bash
cd fuctions
```

```bash
firebase deploy
```

You could also run this script on other cloud platform such as [Heroku] or [Railway]; just make sure to setup a cron job/scheduler to run this script in any time interval you want.

## What is a simulator?
The [simulator script] will simulate and try to generate whole semester tweets; this script is connected to Github workflow, so any changes that break the simulator will result in a failing test.

## License

Licensed under the APLv2. See the [LICENSE] file for details.

[simulator]: #what-is-a-simulator

[kfupm]: http://www.kfupm.edu.sa/

[Heroku]: https://heroku.com
[Railway]: https://railway.app/

[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[simulator script]: https://github.com/hadysata/KFUPM-semester-progress-bar/blob/main/src/simulator.ts
[ts-badge]: https://img.shields.io/badge/TypeScript-4.7-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2016.13-blue.svg
[typescript]: https://www.typescriptlang.org/
[typescript-4-7]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[LICENSE]: https://github.com/hadysata/KFUPM-semester-progress-bar/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467?s=20
[gh-actions]: https://github.com/features/actions
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[sindresorhus-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[nodejs-esm]: https://nodejs.org/docs/latest-v16.x/api/esm.html
[ts47-esm]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#esm-nodejs
[editorconfig]: https://editorconfig.org

[gha-badge]: https://github.com/hadysata/KFUPM-semester-progress-bar/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/hadysata/KFUPM-semester-progress-bar/actions/workflows/nodejs.yml
