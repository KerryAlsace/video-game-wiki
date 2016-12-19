class Review < ApplicationRecord
  belongs_to :game
  has_many :review_goodfors
  has_many :goodfors, through: :review_goodfors

  attr_reader :goodfor_ids

  def goodfor_ids
    goodfors.collect do |goodfor|
      goodfor.id
    end
  end
end
