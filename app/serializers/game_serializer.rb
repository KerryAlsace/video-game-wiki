class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :publisher_id, :genre_id, :platform_ids, :platforms, :goodfors, :goodfor_ids

  has_many :reviews
  has_one :publisher
  has_one :genre
  has_many :platform_games
  has_many :platforms, through: :platform_games
  has_many :goodfors, through: :reviews
end
