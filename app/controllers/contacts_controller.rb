class ContactsController < ApplicationController
	def create
	  @contact = Contact.new(contact_params)
		if ContactMailer.contact_us(@contact).deliver
			message = "Thank you for contacting us, we'll get back to you shortly."
			alert = "success"
		else
			message = "Sorry, something wen't wrong. Please refresh the page and try again."
			alert = "error"
		end
		respond_to do |format|
			format.js do
				render partial: "create", locals: {message: message, alert: alert}
			end
		end
	end

	private

	def contact_params
		params.require(:contact).permit(:name, :email, :number, :message, :file)
	end
end
