# Angular 2 Tutorial: Tour of Heroes

[![Dependency Status](https://gemnasium.com/badges/github.com/thejohnfreeman/angular2-tour-of-heroes.svg)](https://gemnasium.com/github.com/thejohnfreeman/angular2-tour-of-heroes)
[![Build Status](https://travis-ci.org/thejohnfreeman/angular2-tour-of-heroes.svg?branch=master)](https://travis-ci.org/thejohnfreeman/angular2-tour-of-heroes)

Welcome! This project is a guided progression through the [Angular
2 Tutorial](https://angular.io/docs/ts/latest/tutorial/) (using
[Webpack](https://webpack.js.org/) instead of SystemJS). It is designed as
a sequence of commits, each with an explanatory commit message, starting from
an empty directory (unlike the tutorial itself!) and progressing through
every step in the tutorial.

One way you might use this project is to head to the [commits page on
GitHub][commits] and read every commit from the [first][]. This way lets you
read each explanation alongside a concise diff without going through the
hassle of checking out code.

[commits]: https://github.com/thejohnfreeman/angular2-tour-of-heroes/commits/master
[first]: https://github.com/thejohnfreeman/angular2-tour-of-heroes/commit/9249a079540892abd95c52a799184b5686703af6

Another way is to check out the code and follow the progression using an
interactive rebase:

```sh
$ git rebase --interactive --root
# :%s/^pick/edit/
# :wq
# This will drop you into the very first commit.
# Install the dependencies.
$ npm install
# Build the application bundle with Webpack.
$ npm run build
# Starting from the second commit, you can serve the application to your
# browser.
$ npm start
# After a few more commits, you can run tslint as a poor-man's test suite.
$ npm test
# Experiment with the code! When you're ready to move on to the next step:
$ git checkout .
$ git rebase --continue
# Repeat from the step `npm install`
```

The build and test are guaranteed to work without warnings or errors at every
commit!

One last way to use this project is to browse the source. Upon seeing
an interesting line, you can use
[`git blame`](https://git-scm.com/docs/git-blame) to find the commit that
introduced that line. That commit will give you the full context explaining
why that line was added (with links to external resources) and showing what
else came with it.

## A note on dependency management

I use [Yarn](https://yarnpkg.com/en/) to manage the dependencies as I go
along. You can get by with just npm, though. In the messages, I give the Yarn
commands I ran to add dependencies. If you've got the code checked out,
though, they're already listed in the `package.json`, so you just need to run
`yarn` or `npm install` to install them.
