class GoodforSerializer < ActiveModel::Serializer
  attributes :id, :activity

  has_many :review_goodfors
  has_many :reviews, through: :review_goodfors
end