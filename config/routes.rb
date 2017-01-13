Rails.application.routes.draw do
  root 'application#index'

  resources :games do
    resources :reviews
  end

  resources :publishers
  resources :genres
  resources :platforms
  resources :goodfors

  resources :reviews, only: :index

end
