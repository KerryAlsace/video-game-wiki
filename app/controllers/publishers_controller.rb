class PublishersController < ApplicationController

  def index
    publishers = Publisher.all
    render json: publishers
  end

  def show
    publisher = Publisher.find(params[:id])
    render json: publisher
  end

  def create
    publisher = Publisher.new(publisher_params)
    if publisher.save
      render json: { status: 'ok' }
    else
      render json: { errors: publisher.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  def update
    publisher = Publisher.find(params[:id])
    if publisher.update(publisher_params)
      render json: { status: 'ok' }
    else
      render json: { errors: publisher.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  def destroy
    publisher = Publisher.find(params[:id])
    if publisher.destroy
      render json: { status: 'ok' }
    else
      render json: { errors: publisher.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  private
    def publisher_params
      params.require(:publisher).permit(:name)
    end
    
end
