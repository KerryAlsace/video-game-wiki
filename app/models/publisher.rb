class Publisher < ApplicationRecord
  has_many :games
  has_many :ratings, through: :games
end
