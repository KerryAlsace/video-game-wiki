class PlatformSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :platform_games
  has_many :games, through: :platform_games
end