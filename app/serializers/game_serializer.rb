class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :publisher_id, :genre_id

  has_many :reviews
  has_one :publisher
  has_one :genre
  has_many :platform_games
  has_many :platforms, through: :platform_games
end