class Contact < MailForm::Base
	attributes :name, validate: true
	attributes :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
	attributes :number, validate: true
	attributes :message, validate: true
	attributes :file, validate: :validate_file
	#attributes :last_name, captcha: true

	def validate_file
		return if file.blank?
		self.errors.add(:file, "can't be other format than pdf") if file.content_type != "application/pdf"
		if (File.size(file.tempfile).to_f / 1024 / 1024) > 50
			self.errors.add(:file, "can't be greater than 50 megabytes")
		end
	end
end
