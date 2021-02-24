# ReactStarterKit
I started this repo owing to dissatisfaction I have with create-react-app.

create-react-app, while easy to use (more or less) is very, very heavy to get going (~700MB for a new repo). It pulls in pretty much the whole kitchen sink.
I think using it bears careful consideration. You probably aren't going to need most of what is there and from time to time, if a vulnerability is found in
an upstream package and fixed, it can take a while for create-react-app to include that fixed dependency.

This repo, which once in a better (usable) state, I hope to set as a template so I can derive other projects from it. I intend for it to be fairly basic,
with the expectation that the user will add what he/she requires to it.

I have chosen to build a dev server based on Browsersync as it provides options for a FE developer that you just don't get with webpack-dev-server such as,
well browser syncronisation for cross-browser testing.

## Update 24 Feb 2021 ##
OK so this more or less works, however so far I haven't gotten live reloading to work - I need to refresh my web page to get this working. Browsersync appears to be somewhat in decline, with only 1 active contributor and the rate of contributions is certainly dropping off as well. In the examples repo, the webpack version in use is 1.x. I'm going to put this one aside for a little while as I need to get actual work done. I'll continue looking for a better option for React web dev.
