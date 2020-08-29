class ContactsController < ApplicationController

	def new
	  @contact = Contact.new
	end

	def create
	  @contact = Contact.new(contact_params)
	  if ContactMailer.contact_us(@contact).deliver
	    flash[:success] = "Thank you for contacting us, we'll get back to you shortly."
	  else
	    flash[:error] = "Sorry, something wen't wrong. Please refresh the page and try again."
	  end
	end

	private

	def contact_params
		params.require(:contact).permit(:name, :email, :number, :message, :file)
	end
end
