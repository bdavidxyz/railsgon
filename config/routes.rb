Rails.application.routes.draw do

  namespace :admin do
    resources :articles
    resources :comments
    root to: "articles#index"
  end
 
  get 'welcome/index'
  root 'welcome#index'

end
