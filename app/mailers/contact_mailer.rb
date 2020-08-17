class ContactMailer < ApplicationMailer
  default from: 'info@titan-group.ca'
  TO = ["arifalim9@gmail.com"]

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def contact_us(contact)
    @contact = contact
    mail( to: TO, subject: "Contact Us Request by #{@contact.name.camelcase} #{Time.current.strftime('%b %d, %Y %H:%M %p')}")
  end
end
