class Review < ApplicationRecord
  belongs_to :game
  has_many :goodfors
end
