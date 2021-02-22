Rails.application.routes.draw do
  # resources :users do
  #   resources :games
  # end
  resources :users

  resources :games
end
