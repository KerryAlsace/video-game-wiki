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

# 5.times do |i|
#   id = i + 1
#   pb = Publisher.create(name: "#{Faker::Cat.registry}")
#   g = Genre.create(name: "#{Faker::Book.unique.genre}")
#   pl = Platform.create(name: "#{Faker::Ancient.unique.primordial}")
#   gm = Game.create(title: "#{Faker::App.unique.name}", description: "#{Faker::Lorem.paragraph}", publisher: pb, genre: g)
#   pg = PlatformGame.create(game: gm, platform: pl)
#   r = Review.create(content: "#{Faker::TwinPeaks.quote}", game: gm)
#   gf = Goodfor.create(activity: "#{Faker::Superhero.power}")
# end
#
# 5.times do |i|
#   n = i + 1
#   Goodfor.find(n).reviews << Review.find(n)
#   if n - 1 > 0 && n + 1 < 6
#     r = n + 1
#     Goodfor.find(r).reviews << Review.find(r)
#   end
# end

Platform.create(name: "Playstation 4")
Platform.create(name: "Playstation 3")
Platform.create(name: "Playstation VR")
Platform.create(name: "Wii U")
Platform.create(name: "Nintendo Switch")
Platform.create(name: "Nintendo 3DS")
Platform.create(name: "XBox 1")
Platform.create(name: "XBox 360")
Platform.create(name: "PS Vita")
Platform.create(name: "PC")

Publisher.create(name: "2K Games")
Publisher.create(name: "CD Projekt RED")
Publisher.create(name: "Activision")
Publisher.create(name: "Blizzard")
Publisher.create(name: "Rockstar Games")
Publisher.create(name: "Atari")
Publisher.create(name: "Bandai")
Publisher.create(name: "Capcom")
Publisher.create(name: "EA")
Publisher.create(name: "Disney")
Publisher.create(name: "Konami")
Publisher.create(name: "Microsoft Games Studio")
Publisher.create(name: "Nintendo")
Publisher.create(name: "Riot Games")
Publisher.create(name: "TellTale Games")
Publisher.create(name: "Ubisoft")
Publisher.create(name: "Valve")
Publisher.create(name: "Sony")

Genre.create(name: "action")
Genre.create(name: "adventure")
Genre.create(name: "fighting games")
Genre.create(name: "first-person shooters")
Genre.create(name: "flight/flying")
Genre.create(name: "party")
Genre.create(name: "platformer")
Genre.create(name: "puzzle")
Genre.create(name: "racing")
Genre.create(name: "real-time strategy")
Genre.create(name: "role-playing")
Genre.create(name: "simulation")
Genre.create(name: "sports")
Genre.create(name: "strategy")
Genre.create(name: "third-person shooter")
Genre.create(name: "turn-based strategy")
Genre.create(name: "wargames")
Genre.create(name: "wrestling")

Goodfor.create(activity: "playing solo")
Goodfor.create(activity: "playing with friend(s)")
Goodfor.create(activity: "cosplay")
Goodfor.create(activity: "relaxing")
Goodfor.create(activity: "learning")
Goodfor.create(activity: "newbs")
Goodfor.create(activity: "getting amped up")
Goodfor.create(activity: "playing while drunk")
Goodfor.create(activity: "your adventurer streak")
Goodfor.create(activity: "your Krombopolis Michael streak")
Goodfor.create(activity: "your Bob the Builder streak")
Goodfor.create(activity: "playing to remember (retro)")
Goodfor.create(activity: "playing to forget")
Goodfor.create(activity: "making new friends")
Goodfor.create(activity: "making new enemies")


g = Game.create(title: "The Witcher 3", description: "A Witcher Game", publisher_id: 2, genre_id: 2)
PlatformGame.create(game_id: 1, platform_id: 1)
PlatformGame.create(game_id: 1, platform_id: 7)
PlatformGame.create(game_id: 1, platform_id: 10)
5.times do |i|
  id = i + 1
  r = Review.create(content: "#{Faker::StarWars.unique.quote}", game_id: 1)
  Goodfor.find(id).reviews << r
end

15.times do |n|
  g = Game.create(title: "#{Faker::App.unique.name}", description: "#{Faker::Lorem.paragraph}", publisher_id: rand(18), genre_id: rand(18))
  PlatformGame.create(game_id: g.id, platform_id: 1)
  PlatformGame.create(game_id: g.id, platform_id: 7)
  PlatformGame.create(game_id: g.id, platform_id: 10)
  5.times do |i|
    id = i + 1
    r = Review.create(content: "#{Faker::StarWars.quote}", game_id: g.id)
    Goodfor.find(id).reviews << r
  end
end
