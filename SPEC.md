# Specifications for the Angular Assessment

Specs:
- [x] Use Angular to build the app
- [x] Must contain some sort of nested views
  All game pages are nested within the home page
- [x] Must contain some sort of searching as well as filtering based on some criteria. Ex: All items in the "fruit" category, or all tasks past due
  Games can be filtered by platform, genre, and publisher, things the game is good for, and search
- [x] Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart
  Can add a review to a game page, which dynamically updates the game reviews list
- [x] Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product
  Links use ui-sref and direct the user to the correct place
- [x] Data should be validated in Angular before submission
  The new game form uses Angular validations before submitting
- [x] Must talk to the Rails backend using $http and Services
  Uses $http and a GamesFactory for communicating with Rails backend
- [x] Your README.md includes a short description, install instructions, a contributors guide and a link to the license for your code
  Readme includes description, install info, contributor's guide, and license info

Confirm
- [x] You have a large number of small Git commits
- [x] Your commit messages are meaningful
- [x] You made the changes in a commit that relate to the commit message
- [x] You don't include changes in a commit that aren't related to the commit message
