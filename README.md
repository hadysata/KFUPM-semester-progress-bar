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

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

### Clone Repository

To clone this repo:

1. Open a new `terminal`/`powershell` window.
2. Move to the directory where you want this project to be. For example:
   ```bash
   cd C:\Users\yourname\MyCoolNodeJsProjects
   ```
3. Clone the repo:
   ```
   git clone https://github.com/hadysata/KFUPM-semester-progress-bar.git
   ```

## Maintain The Codebase

- Before creating a new branch, make sure you are on main, and run:

```bash
git pull
```

- If you're already on a branch and some new changes have been pushed to main, run:

```bash
git pull origin main
```

## Contribute to This Project

### Repo Issues

If you find a bug throughout your development or testing process, please do not hesitate to file an issue describing the bug you noticed.

### How to File an Issue?

Here is how you create an issue:

- Go to the issues tab.
- Click on "New issue".
- Add an informative title following the naming convention below.
- Add a detailed description with the suggested solution if possible.
- Select applicable labels after reading each label's description.
- Try to label the issue priority to the best of your knowledge.

### Creating a New Branch

Once you're assigned to an issue or want to start working on a new feature, create a new branch with a descriptive title preceded with your name as `@yourname/new-feature-title`.

_Note: branch names ar all small case separated by a dash `-`, e.g. `@hady/twitter-api-migration`_

### Conventions

#### Commits & PR

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

- **fix:** a commit of the type `fix` patches a bug in the codebase.

- **feat:** a commit of the type `feat` introduces a new feature to the codebase.

- **BREAKING CHANGE:** a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking change.

- types other than fix: and feat: are allowed, for example `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.

Refer to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more information.

#### TypeScript File Naming

- Small letters only.
- Use underscore as delimiters.
- Keep it short, clear and simple.

Examples :
`date_helper.ts`
`settings_controller.ts`

## License

Licensed under the APLv2. See the [LICENSE](libhttps://github.com/hadysata/KFUPM-semester-progress-bar/blob/main/LICENSE) file for details.

[kfupm]: http://www.kfupm.edu.sa/
[ts-badge]: https://img.shields.io/badge/TypeScript-4.7-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2016.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[typescript]: https://www.typescriptlang.org/
[typescript-4-7]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: libhttps://github.com/hadysata/KFUPM-semester-progress-bar/blob/main/LICENSE
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
