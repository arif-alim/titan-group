class ContactMailer < ApplicationMailer
  default from: ENV["SEND_EMAILS_FROM"]

  def contact_us(contact)
    @contact = contact

    if @contact.file.present?
      attachments['attachment.pdf'] = File.read(File.absolute_path(@contact.file.tempfile))
    end

    options = {
      to: ENV["CONTACT_FORM_SEND_TO"],
      subject: "Contact Us Request by #{@contact.name.camelcase} #{Time.current.strftime('%b %d, %Y %H:%M %p')}"
    }
    options[:bcc] = ENV["CONTACT_FORM_SEND_TO_BCC"]

    mail(options.compact)
  end
end
