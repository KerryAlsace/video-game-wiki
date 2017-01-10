class ReviewsController < ApplicationController

  def index
  end

  def show
  end

  def create
    binding.pry
    # check for params[:id]
    game = Game.find(params[:id])
    review = game.reviews.build
    review.content = params[:review][:content]
    goodfors = params[:review][:goodfor_ids]
    goodfor_ids.each do |goodfor_id|
      goodfor = Goodfor.find(goodfor_id)
      review.goodfors << goodfor
    end
  end

  private
    def review_params
      params.require(:review).permit(:game_id, :goodfor_ids, :goodfors, :content, :id)
    end
end
