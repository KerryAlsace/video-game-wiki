class Review < ApplicationRecord
  belongs_to :game
  has_and_belongs_to_many :goodfors

  attr_reader :goodfor_ids

  def goodfor_ids
    goodfors.collect do |goodfor|
      goodfor.id
    end
  end
end
