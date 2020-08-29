class Contact
	include ActiveModel::Model

	attr_accessor :name
	attr_accessor :email
	attr_accessor :number
	attr_accessor :message
	attr_accessor :file
end
