class PlatformsController < ApplicationController

  def index
    platforms = Platform.all
    render json: platforms
  end

  def show
    platform = Platform.find(params[:id])
    render json: platform
  end

  def create
    platform = Platform.new(platform_params)
    if platform.save
      render json: { status: 'ok' }
    else
      render json: { errors: platform.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  def update
    platform = Platform.find(params[:id])
    if platform.update(platform_params)
      render json: { status: 'ok' }
    else
      render json: { errors: platform.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  def destroy
    platform = Platform.find(params[:id])
    if platform.destroy
      render json: { status: 'ok' }
    else
      render json: { errors: platform.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  private
    def platform_params
      params.require(:platform).permit(:name)
    end

end
