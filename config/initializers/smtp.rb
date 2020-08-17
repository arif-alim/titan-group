ActionMailer::Base.smtp_settings = {
  domain: 'http://www.titan-group.ca/',
  address:        "smtp.sendgrid.net",
  port:            587,
  authentication: :plain,
  user_name:      'apikey',
  password:       ENV['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']
}