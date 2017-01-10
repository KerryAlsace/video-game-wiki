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
    game.title = params[:game][:title]
    game.description = params[:game][:description]
    game.publisher = Publisher.find(params[:game][:publisher_id].to_i)
    game.genre = Genre.find(params[:game][:genre_id].to_i)
    platform_ids = params[:game][:platform_ids]
    platform_ids.each do |platform_id|
      # PlatformGame.create(game_id: game.id, platform_id: platform_id)
      platform = Platform.find(platform_id)
      game.platforms << platform
    end

    if game.save
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
      params.require(:game).permit(:title, :description, :publisher_id, :genre_id, :reviews, :platform_ids)
    end

end
