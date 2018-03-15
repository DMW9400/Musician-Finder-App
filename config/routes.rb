Rails.application.routes.draw do
#   namespace :api do
#   namespace :v1 do
#     resources :recipes
#     resources :users
#     resources :recipe_ingredients
#     resources :ingredients
#   end
# end
  namespace :api do
    namespace :v1 do
      resources :user_genres
      resources :user_artists
      resources :user_instruments
      resources :collaborators
      resources :artists
      resources :genres
      resources :instruments
      resources :users
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
