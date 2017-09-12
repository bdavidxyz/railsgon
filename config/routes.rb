Rails.application.routes.draw do

  mount MagicLamp::Genie, at: "/magic_lamp" if defined?(MagicLamp)

  namespace :admin do
    resources :articles
    resources :comments
    root to: "articles#index"
  end
 
  get 'welcome/index'
  root 'welcome#index'

end
