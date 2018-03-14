class User < ApplicationRecord
  has_many :user_instruments
  has_many :instruments, through: :user_instruments
  has_many :user_artists
  has_many :artists, through: :user_artists
  has_many :user_sought_instruments
  has_many :sought_instruments, through: :user_sought_instruments
  has_many :user_genres
  has_many :genres, through: :user_genres
  
end
