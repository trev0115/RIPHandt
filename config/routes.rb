RIPHandt::Application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  get '/saveGame' controller: 'scores', action: 'create'
  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]

  root to: "game#index"
  
  end
