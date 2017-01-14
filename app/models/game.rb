class Game < ApplicationRecord
  has_many :reviews
  belongs_to :publisher
  belongs_to :genre
  has_many :platform_games
  has_many :platforms, through: :platform_games
  has_many :goodfors, through: :reviews

  attr_reader :platform_ids, :goodfor_ids

  def platform_ids
    platforms.collect do |platform|
      platform.id
    end
  end

  def goodfor_ids
    goodfors.collect do |goodfor|
      goodfor.id
    end
  end

end
