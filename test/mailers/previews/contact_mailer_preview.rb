class ContactMailerPreview < ActionMailer::Preview

# Preview this email at http://localhost:3000/rails/mailers/contact_mailer
  def contact_us
    contact = Contact.new(
      name: "User",
      email: "test@example.com",
      number: "123",
      message: "Hello everyone"
    )
    # add file
    ContactMailer.contact_us(contact)
  end
end