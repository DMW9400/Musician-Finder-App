class Api::V1::UsersController < ApplicationController
  def index
  users = User.all
  render json: users, status: 200
end

def create
 user = User.find_or_create_by(user_params)
 # Ultimate goal:
 # user = User.find(params[:user_id])

 # quick fix:
 user=User.all.first
 # recipe.user = user
 # params[:ingredients].each do |i|
 #   ingredient = Ingredient.find_or_create_by(name: i)
 #   if !ingredient.recipes.include?(recipe)
 #       ingredient.recipes << recipe
 #     end
 # end
 render json: user, status: 201
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
  params.permit()
end

def set_user
  @recipe = User.find(params[:id])
end
end
