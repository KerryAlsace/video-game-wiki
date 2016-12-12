class Game < ApplicationRecord
  has_many :reviews
  belongs_to :publisher
  belongs_to :genre
  has_many :platform_games
  has_many :platforms, through: :platform_games
end
