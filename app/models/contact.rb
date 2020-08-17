class Contact < ApplicationRecord
	attribute :name,      :validate => true
	attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
	attribute :number,    :validate => true
	attribute :message,   :validate => true
	attribute :file,   		:validate => false
	attribute :nickname,  :captcha  => true
end
