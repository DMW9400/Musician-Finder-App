class Api::V1::UserGenresController < ApplicationController
  def index
    genres = Genre.all
    render json: genres, status: 200
  end
end
