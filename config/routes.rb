Rails.application.routes.draw do
  root 'application#index'

  resources :games do
    :reviews
  end

  resources :publishers
  resources :genres
  resources :platforms
  resources :goodfors

end
