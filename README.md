# README

This app sets up a shell Wiki for you to fill with video game knowledge. It allows you to add games, add reviews to those games, and filter and search through all your games to find recommendations and games that fit your needs.

# Dependencies

Ruby 2.3.1 or above
Rails 5.0.0.1 or above

* For Semantic-UI
- Node package manager https://nodejs.org/en/
`brew install node`

- Gulp http://gulpjs.com/
`npm install -g gulp`


# Configuration

* Set up Database
`rails db:migrate`

* Add optional seed data to get the ball rolling
`rails db:seed`

* Set up Semantic UI
Install gulp: `
`cd semantic/`
`gulp build`
`gulp watch`

# Deploy

* Run Rails server
`rails s`
* Navigate to localhost
`localhost:3000`

# Contributing

Pull requests are welcome from anyone.

Fork, then clone the repo:

    git clone git@github.com:<your user name>/video-game-wiki.git

Set up your machine (above for instructions)

Make your change.

Push to your fork and [submit a pull request][pr].

[pr]: https://github.com/KerryAlsace/video-game-wiki/compare

Pull requests will be reviewed within 48 hours and either be accepted or have comments added to the discussion.

Some things that will increase the chance that your pull request is accepted:

* Write tests.
* Write a good commit message.

# License

MIT License

Copyright (c) 2017 Kerry Dougherty

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
