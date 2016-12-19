class GoodforController < ApplicationController

  def index
    goodfors = Goodfor.all
    render json: goodfors
  end

  def show
    goodfor = Goodfor.find(params[:id])
    render json: goodfor
  end

  def create
    goodfor = Goodfor.new(goodfor_params)
    if goodfor.save
      render json: { status: 'ok' }
    else
      render json: { errors: goodfor.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  def update
    goodfor = Goodfor.find(params[:id])
    if goodfor.update(goodfor_params)
      render json: { status: 'ok' }
    else
      render json: { errors: goodfor.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  def destroy
    goodfor = Goodfor.find(params[:id])
    if goodfor.destroy
      render json: { status: 'ok' }
    else
      render json: { errors: goodfor.errors.full_messages }, status: :unprocessable_entitiy
    end
  end

  private
    def goodfor_params
      params.require(:goodfor).permit(:activity)
    end

end
