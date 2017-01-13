class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews
  end

  def show
  end

  def create
    game = Game.find(params[:game_id].to_i)
    review = game.reviews.build
    review.content = params[:review][:content]
    goodfor_ids = params[:review][:goodfor_ids]
    goodfor_ids.each do |goodfor_id|
      goodfor = Goodfor.find(goodfor_id)
      review.goodfors << goodfor
    end

    if review.save
      render json: { status: 'ok' }
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  private
    def review_params
      params.require(:review).permit(:game_id, :goodfor_ids, :goodfors, :content, :id)
    end
end
