# How to contribute

Support and contributions from the open source community are essential for keeping
`Sillyfrog` up to date and always improving! There are a few guidelines that we need
contributors to follow to keep the project consistent, as well as allow us to keep
maintaining `Sillyfrog` in a reasonable amount of time.

<!-- Please note that this project is released with a [Contributor Code of Conduct][coc].
By participating in this project you agree to abide by its terms. -->

[coc]: ./CODE_OF_CONDUCT.md

## Creating an Issue

Before you create a new Issue:

1. Please see this link to open a issue sure [here](https://github.com/javaplumdev/sillyfrog/issues).
2. If it is a bug report, please also include descriptions [here](https://github.com/javaplumdev/sillyfrog/issues).
3. If it is a feature request, please share the motivation for the new feature and how you would implement it.
4. Please include links to the corresponding github documentation.

## Tests

If you want to submit a bug fix or new feature, make sure that all tests are passing.

Before running any tests you have to start the ff:

```
$ npm run test
```

or to update a snapshot

```bash
$ npm test test:u
```

## Requesting a ENV

- For ENV files, kindly approach me! [here](https://github.com/javaplumdev)

## Submitting the Pull Request

- Push your changes to your topic branch on your fork of the repo.
- Submit a pull request from your topic branch to the main branch on the `siillyfrog` repository.
- Be sure to tag any issues your pull request is taking care of / contributing to. \* Adding "Closes #123" to a pull request description will auto close the issue once the pull request is merged in.

## Merging the Pull Request & releasing a new version

The following commit message conventions determine which version is released:

1. `fix: ...` or `fix(scope name): ...` prefix in subject: bumps fix version, e.g. `1.2.3` → `1.2.4`
2. `feat: ...` or `feat(scope name): ...` prefix in subject: bumps feature version, e.g. `1.2.3` → `1.3.0`
3. `BREAKING CHANGE:` in body: bumps breaking version, e.g. `1.2.3` → `2.0.0`

If the pull request looks good but does not follow the commit conventions, use the "Squash & merge" button.

Thank you!
