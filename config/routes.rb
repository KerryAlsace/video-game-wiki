Rails.application.routes.draw do
  root 'application#index'

  resources :games do
    :reviews
  end

end
