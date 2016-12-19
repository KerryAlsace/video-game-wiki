class GoodforSerializer < ActiveModel::Serializer
  attributes :id, :activity

  has_many :reviews
end