RIPHandt::Application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  get 'tweet', to: 'game#tweet_user_highscore', as: 'tweet'
  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]

  root to: "game#index"
  
  end
