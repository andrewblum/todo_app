Rails.application.routes.draw do
  get 'static_pages/root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    # resources :thing, only: [:create, :destroy, :index, :show, :update] do
    #   resources :subthing
    # end
  end

  resources :values, only: [:create]
  resources :result, only: [:show]

end
