Rails.application.routes.draw do

  resources :fireproofing, only: :index
	resources :fire_stopping, only: :index
	resources :specialty_coating, only: :index
	resources :insulation, only: :index

	resources :projects, only: :index
	resources :ace_hotel, only: :index

	resources :about_us, only: :index
	resources :services, only: :index
	resources :news, only: :index
	resources :contact_us, only: :index
  root to: 'home#index'
  get '/:page' => 'home#index'
  get 'sitemap.xml', :to => 'sitemap#index', :defaults => {:format => 'xml'}

end
