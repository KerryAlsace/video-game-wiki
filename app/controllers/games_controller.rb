class GamesController < ApplicationController

  def index
    games = Game.all
    render json: games
  end

  def show
    game = Game.find(params[:id])
    render json: game
  end

  def create
    game = Game.new
    if game.save(game_params)
      render json: { status: 'ok' }
    else
      render json: { errors: game.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  def update
    game = Game.find(params[:id])
    if game.update(game_params)
      render json: { status: 'ok' }
    else
      render json: { errors: game.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  def destroy
    game = Game.find(params[:id])
    if game.destroy
      render json: { status: 'ok' }
    else
      render json: { errors: game.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  private
    def game_params
      params.require(:game).permit(:title, :description, :publisher, :genre, :reviews, :platforms)
    end

end
