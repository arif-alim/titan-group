Rails.application.routes.draw do
  get 'contacts/new'
  resources :fireproofing, only: [:index] do
  	collection do
  		get :cementitious
  		get :intumescent
  		get :epoxy
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

	resources :specialty_coating, only: [:index] do
		collection do
			get :roof_coating
			get :zinc_primers
			get :epoxy_primers_and_finishes
			get :polyurethane_finishes
			get :high_temperature_coatings
			get :acrylics_water_based
			get :linings
			get :alkyd_and_siloxane_coatings
			get :urethane_finishes
		end
	end

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
	resources :contacts, only: [:create]

	resources :home, only: [:index] do 
		collection do 
			get :contact_us
		end
  end
	
  root to: 'home#index'
  get '/:page' => 'home#index'
  get 'sitemap.xml', :to => 'sitemap#index', :defaults => {:format => 'xml'}

end
