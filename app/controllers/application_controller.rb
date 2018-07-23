class ApplicationController < ActionController::API
  private

  def issue_token(payload)
    JWT.encode(payload, secret, algorithm)
  end

  def authorize_user!
    if !current_user.present?
      render json: {error: 'No user id present'}
    end
  end

  def current_user
    @current_user ||= User.find_by(id: token_user_id)
  end

  def token_user_id
    decoded_token.first['user_id']
  end

  def decoded_token
    if token
      begin
        JWT.decode(token, secret, true, {algorithm: algorithm})
      rescue JWT::DecodeError
        return [{}]
      end
    else
      [{}]
    end
  end

  def token
    request.headers['Authorization']
  end

  def secret
    "binding.cry"
  end

  def algorithm
    "HS256"
  end
  
  def relevant_played_instruments(user_object)
    rel_inst_ids = params[:selectedInstruments].map {|i| i["id"].to_i}
        relevant_instruments = Instrument.all.select {|inst| rel_inst_ids.include?(inst[:id])}
        relevant_instruments.each do |relInst|
          user_object.instruments << relInst
          relevant_user_instrument = user_object.user_instruments.find_by instrument_id: relInst[:id]
          relevant_user_instrument.update(:seeking => false)
        end
  end

  def relevant_sought_instruments(user_object)
    rel_s_inst_ids = params[:seekingInstruments].map {|s_i| s_i["id"].to_i}
      relevant_s_instruments = Instrument.all.select {|s_inst| rel_s_inst_ids.include?(s_inst[:id])}
      relevant_s_instruments.each do |rel_s_Inst|
        user_object.instruments << rel_s_Inst
        relevant_user_s_instrument = user_object.user_instruments.find_by instrument_id: rel_s_Inst[:id]
        relevant_user_s_instrument.update(:seeking => true)
      end
  end

  def handle_artists(user_object)
    capitalized_artists = []
    params[:selectedArtists].map do |artist_name|
      cap_name = artist_name.split().map(&:capitalize).join(' ')
      capitalized_artists.push(cap_name)
    end

    relevant_artist_objects_arr = []
    capitalized_artists.each do |artist|
      artistObj = Artist.find_or_create_by(name: artist)
      user_object.artists << artistObj
    end
  end

  def handle_genres(user_object)
    capitalized_genres = []
    params[:selectedGenres].map do |genre_name|
     cap_genre = genre_name.split().map(&:capitalize).join(' ')
     capitalized_genres.push(cap_genre)
    end

    relevant_genre_objects_arr= []
     capitalized_genres.each do |genre|
       genreObj = Genre.find_or_create_by(name: genre)
       user_object.genres << genreObj
    end
end


end
