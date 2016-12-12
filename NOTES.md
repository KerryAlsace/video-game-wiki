# FEATURES TO INCLUDE

- Angular Front-end with at least 5 pages
- Include some nested views
- Include searching and filtering
  (such as searching by game name or all games rated 5 stars)
- Include 1+ pg that allows for dynamic updating of a single field of a resource
  (allow changing of game rating on review page)
- Functioning links
- Validate data in Angular before submission
- Rails backend with JSON that accepts and stores data for Angular
- Communicate with Rails backend with $http and Services
- README.md includes a short description, install instructions, a contributors guide and a link to the license for your code

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
- remove turbolinks references from application.html.erb
- edit application.js
  //= require jquery
  //= require angular
  //= require angular-ui-router
  //= require angular-rails-templates
  //= require moment
  //= require_tree .
- edit application.css
   *= require_tree .
   *= require_self
   */
- add to gitignore:
  # Ignore Bower components
  /vendor/assets/bower_components
- `rails g model Game title:string description:text game_id:integer publisher_id:integer genre_id:integer`
- `rails g model Review content:text game_id:integer playing_solo:boolean playing_with_friends:boolean cosplay:boolean relaxing:boolean learning:boolean newbs:boolean getting_amped_up:boolean playing_while_drunk:boolean playing_while_high:boolean your_adventurer_streak:boolean your_krombopolis_michael_streak:boolean your_bob_the_builder_streak:boolean playing_to_remember:boolean playing_to_forget:boolean making_new_friends:boolean making_new_enemies:boolean`
- `rails g model Publisher name:string`
- `rails g model Genre name:string`
- `rails g model Platform name:string`
- `rails g model PlatformGames game_id:integer platform_id:integer`
- add to routes.rb
  root 'application#index'

  resources :games do
    :reviews
  end
- add model relationships
- `rails db:migrate`
- `rails c` (check that models are set up correctly)
- edit application_controller.rb
- add to routes.rb?
- `rails g controller Games`
- delete games.coffee and games.scss
- fill out games_controller.rb
- create views/application/index.html.erb and add
  <ui-view></ui-view>
- create assets/javascripts/app.js
- decide to use semantic ui instead of materialize
- (if using materialize, you would do `bower install materialize`)
- remove materialize gem
- `bundle`
- `npm install -g gulp`
- `npm install semantic-ui --save`
- `cd semantic/`
- `gulp build`
- add to application.html.erb
  <link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">
  <script src="semantic/dist/semantic.min.js"></script>
-

### Figure out Model

Pull in video games, studios/companies, genres from API
- Have a "Reviewed Games" page that shows all reviewed games
  Those games are saved to the db

  Games Model:
    has_many :reviews
    belongs_to :publisher
    belongs_to :genre
    has_many :platform_games
    has_many :platforms, through: :platform_games

    :title
    :description
    :publisher
    :genre
    :platforms
    :reviews

  Reviews Model:
    belongs_to :game

    :content
    checkboxes:

  Publisher Model:
    has_many :games
    has_many :ratings, through: :games

    :name
    :games
    :average_rating (custom)

  Genre Model:
    has_many :games

    :name

  PlatformGames Model:
    belongs_to :game
    belongs_to :platform

  Platform Model:
    has_many :platform_games
    has_many :games, through: :platform_games

    :name

- Reviews:
  Checkboxes:
    Good for:
      playing solo
      playing with friend(s)
      cosplay
      relaxing
      learning
      newbs
      getting amped up
      playing while drunk
      playing while in Colorado, Washington, Oregon, or Maine
      your adventurer streak
      your Krombopolis Michael streak
      your Bob the Builder streak
      playing to remember (retro)
      playing to forget
      making new friends
      making new enemies