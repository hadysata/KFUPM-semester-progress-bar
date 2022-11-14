## Contribute to This Project

## Table of Contents
+ [Repo Issues](#repo-issues)
    - [How to File an Issue?](#how-to-file-an-issue)
+ [Creating a New Branch](#creating-a-new-branch)
+ [Conventions](#conventions)
    - [Commits and PRs](#commits-and-prs)
    - [TypeScript File Naming](#typescript-file-naming)

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