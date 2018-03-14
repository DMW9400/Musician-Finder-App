Rails.application.routes.draw do
  resources :user_sought_instruments
  resources :user_genres
  resources :user_artists
  resources :user_instruments
  resources :collaborators
  resources :sought_instruments
  resources :artists
  resources :genres
  resources :instruments
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
