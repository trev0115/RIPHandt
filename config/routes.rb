RIPHandt::Application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  get '/saveGame', controller: 'savegame', action: 'saveGame'
  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]

  root to: "game#index"
  
  end
