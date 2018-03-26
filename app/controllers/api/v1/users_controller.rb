class Api::V1::UsersController < ApplicationController


  def index
    users = User.all
    render json: users, status: 200
  end

def create
 user = User.create(user_params)

  rel_inst_ids = params[:selectedInstruments].map {|i| i["id"].to_i}
  relevant_instruments = Instrument.all.select {|inst| rel_inst_ids.include?(inst[:id])}
  relevant_instruments.each do |relInst|
    user.instruments << relInst
    relevant_user_instrument = user.user_instruments.find_by instrument_id: relInst[:id]
    relevant_user_instrument.update(:seeking => false)
  end

  rel_s_inst_ids = params[:seekingInstruments].map {|s_i| s_i["id"].to_i}
  relevant_s_instruments = Instrument.all.select {|s_inst| rel_s_inst_ids.include?(s_inst[:id])}
  relevant_s_instruments.each do |rel_s_Inst|
    user.instruments << rel_s_Inst
    relevant_user_s_instrument = user.user_instruments.find_by instrument_id: rel_s_Inst[:id]
    relevant_user_s_instrument.update(:seeking => true)
  end

  rel_artist_ids = params[:selectedArtists].map {|a| a["id"].to_i}
  relevant_artists = Artist.all.select {|art| rel_artist_ids.include?(art[:id])}
  relevant_artists.each {|relArt| user.artists << relArt}

  rel_genre_ids = params[:selectedGenres].map {|g| g["id"].to_i}
  relevant_genres = Genre.all.select {|gen| rel_genre_ids.include?(gen[:id])}
  relevant_genres.each {|relGen| user.genres << relGen}



 render json: {user: user, instruments: user.instruments} , status: 201
end

def user_messages
  relevant_user = User.find_by(id: params[:id])
  received_messages = relevant_user.received_messages
  sent_messages = relevant_user.sent_messages
  render json: {received_messages: received_messages, sent_messages: sent_messages}, status: 201
end

def user_instruments
  relevant_user = User.find_by(id: params[:id])
  relevant_instruments = relevant_user.user_instruments
  render json: relevant_instruments, status: 201
end


def update
  @recipe.update(recipe_params)
  render json: @recipe, status: 200
end

def destroy
  recipeId = @recipe.id
  @recipe.destroy
  render json: {message:"Zap! Recipe deleted", recipeId:recipeId}
end

def show
  render json: @recipe, status: 200
end

private
def user_params
  params.permit(:id, :name,:password,:image_url,:age,:gender,:top_song_url, :selectedArtists, :selectedGenres, :song_embed_1, :song_embed_2, :song_embed_3, :borough)
end


end
