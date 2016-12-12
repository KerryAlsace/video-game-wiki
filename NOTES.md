# PROCESS

Refer to https://www.youtube.com/watch?v=YNwehQGslcQ&feature=youtu.be

Initial setup:

- `rails new 'gaming-wiki'`
- `cd gaming-wiki/`
- `touch NOTES.md`
- `touch SPEC.md`
- `git init`
- `git add .`
- `git commit -m "initial commit"`
- `git remote add origin git@github.com:KerryAlsace/video-game-wiki.git`
- `git push -u origin master`
- `touch LICENSE.md`
- add text from 'http://choosealicense.com/licenses/mit/' to LICENCE.md file
- add to Gemfile:
  # Use Responders for flash messages
  gem 'responders'
  # Use Active Model Serializers to convert to JSON
  gem 'active_model_serializers'
  # Use pry for debugging
  gem 'pry'
  # Use Bower Rails for js packaging
  gem 'bower-rails'
  # Use Angular for front-end
  gem 'angular-rails-templates'
  # Use Materialize for styling
  gem 'materialize-sass'
- `bundle install`
- `rails g bower_rails:initialize json`
- Edit bower.json as needed
  (add 'name' to avoid getting errors)
  {
    "name": "video-game-wiki",
    "vendor": {
      "name": "bower-rails generated vendor assets",
      "dependencies": {
        "angular": "v1.5.8",
        "angular-ui-router": "latest",
        "angular-devise": "latest",
        "moment": "latest"
      }
    }
  }
- `npm install bower -g`
- `rails bower:install`
- edit application.js
  //= require jquery
  //= require materialize
  //= require angular
  //= require angular-ui-router
  //= require angular-devise
  //= require angular-rails-templates
  //= require moment
  //= require_tree .
- edit application.css
   *= require_tree .
   *= require_self
   */

   @import "materialize/components/color";
   $primary-color: color("pink", "darken-4") !default;
   $secondary-color: color("yellow", "base") !default;
   @import "materialize";






- `rails g model Game name:string genre_id:integer content:text studio_id:integer`
- `rails g model Studio name:string description:text`
- `rails g model Platform name:string`
- `rails g model Genre name:string`
- `rails g model Review title:string content:text user_id:integer game_id:integer`
- `rails g model Rating rating:integer user_id:integer game_id:integer`
- `rails g model PlatformGames platform_id:integer game_id:integer`
- `rails db:migrate`
- test models and migrations in `rails console` and adjust as needed
- create seed file
- `rails db:seed`
- create serializers
- `rails g controller Games`


TODO:
Pull out nav panel into a component
Include that component in each view
change home page to just show ui-view