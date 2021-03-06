class GenresController < ApplicationController

  def index
    genres = Genre.all
    render json: genres
  end

  def show
    genre = Genre.find(params[:id])
    render json: genre
  end

  def create
    genre = Genre.new(genre_params)
    if genre.save
      render json: { status: 'ok' }
    else
      render json: { errors: genre.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  def update
    genre = Genre.find(params[:id])
    if genre.update(genre_params)
      render json: { status: 'ok' }
    else
      render json: { errors: genre.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  def destroy
    genre = Genre.find(params[:id])
    if genre.destroy
      render json: { status: 'ok' }
    else
      render json: { errors: genre.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  private
    def genre_params
      params.require(:genre).permit(:name)
    end
    
end
