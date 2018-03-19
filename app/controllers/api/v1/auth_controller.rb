class AuthController < ApplicationController

  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      token = issue_token({ 'user_id': u.id })
      render json: {'token': token }
    else
      render json: {'error': 'Could not find or authenticate user'}, status: 401
    end
  end
end
