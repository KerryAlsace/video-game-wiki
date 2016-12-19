class Goodfor < ApplicationRecord
  has_many :review_goodfors
  has_many :reviews, through: :review_goodfors
end
