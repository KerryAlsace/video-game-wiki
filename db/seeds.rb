require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#<Game id: nil, title: nil, description: nil, publisher_id: nil, genre_id: nil, created_at: nil, updated_at: nil>
#<Publisher id: nil, name: nil, created_at: nil, updated_at: nil>
#<Genre id: nil, name: nil, created_at: nil, updated_at: nil>
#<Platform id: nil, name: nil, created_at: nil, updated_at: nil>
#<PlatformGame id: nil, game_id: nil, platform_id: nil, created_at: nil, updated_at: nil>

#<Review id: nil, content: nil, playing_solo: nil, playing_with_friends: nil, cosplay: nil, relaxing: nil, learning: nil, newbs: nil, getting_amped_up: nil, playing_while_drunk: nil, playing_while_high: nil, your_adventurer_streak: nil, your_krombopolis_michael_streak: nil, your_bob_the_builder_streak: nil, playing_to_remember: nil, playing_to_forget: nil, making_new_friends: nil, making_new_enemies: nil, created_at: nil, updated_at: nil


# 5.times do |i|
#   id = i + 1
#   pb = Publisher.create(name: "Publisher #{id}")
#   g = Genre.create(name: "Genre #{id}")
#   pl = Platform.create(name: "Platform #{id}")
#   gm = Game.create(title: "Game #{id}", description: 'Description', publisher: pb, genre: g)
#   pg = PlatformGame.create(game: gm, platform: pl)
#   r = Review.create(content: "Game Review #{id}", game: gm)
# end

5.times do |i|
  id = i + 1
  pb = Publisher.create(name: "#{Faker::Cat.registry}")
  g = Genre.create(name: "#{Faker::Book.unique.genre}")
  pl = Platform.create(name: "#{Faker::Ancient.unique.primordial}")
  gm = Game.create(title: "#{Faker::App.unique.name}", description: "#{Faker::Lorem.paragraph}", publisher: pb, genre: g)
  pg = PlatformGame.create(game: gm, platform: pl)
  r = Review.create(content: "#{Faker::TwinPeaks.quote}", game: gm)
  gf = Goodfor.create(activity: "#{Faker::Superhero.power}")
end
