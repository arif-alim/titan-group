Rails.application.routes.draw do
  resources :fireproofing, only: [:index] do
  	collection do
  		get :cementitious
  		get :intumescent
  	end
  end

  resources :fire_stopping, only: [:index] do
  	collection do
  		get :caulking
  		get :spray
  	end
  end

  resources :roof_coating, only: [:index] do
  	collection do 
  		get :silicone
  		get :acrylic
  	end
  end

	resources :specialty_coating, only: :index

	resources :insulation, only: [:index] do
		collection do
			get :commercial
			get :residential
		end
	end

	resources :shop_application, only: :index

	resources :projects, only: [:index] do
		collection do
			get :ace_hotel
			get :king_avenue_west
			get :yonge_street
			get :dasha_retail
			get :hudson_bay
			get :kylemore_communities
			get :lawyer_office
			get :ttc_dupont_station
			get :ttc_glencairn_station
			get :ttc_greenwood_yard
		end
	end

	resources :about_us, only: :index
	resources :services, only: :index
	resources :news, only: :index
	resources :contact_us, only: :index
	
  root to: 'home#index'
  get '/:page' => 'home#index'
  get 'sitemap.xml', :to => 'sitemap#index', :defaults => {:format => 'xml'}

end
