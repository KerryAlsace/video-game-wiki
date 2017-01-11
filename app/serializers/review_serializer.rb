class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :game_id, :goodfor_ids, :goodfors

  has_one :game
  has_many :review_goodfors
  has_many :goodfors, through: :review_goodfors
end
