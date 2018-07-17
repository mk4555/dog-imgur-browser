class Api::DogsController < ApplicationController
  before_action :set_dog, only [:show, :destroy]

  def index
    render json: Dog.all
  end

  def create
    dog = Dog.new(dog_params)
    if dog.save
      render json: dog
    else
      render json: { message: dog.errors }, status: 400
    end
  end

  def show
    render json: @dog
  end

  def destroy
    if @dog.destroy
      render status: 204
    else
      render json: { message: "Unable to remove this image "}, status: 400
    end
  end

  private

  def set_dog
    @dog = Dog.find_by(id: params[:id])
  end


  def dog_params
    params.require(:dog).permit(:cover, :img_url, :img_cover)
  end
end
