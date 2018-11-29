Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  resource :options, only: :update

  resources :document, only: [] do
    put :close
  end
end
