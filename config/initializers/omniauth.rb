OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '535553513473-k6d1467pdnmfgan2f04iiji173uvohdt.apps.googleusercontent.com', '-ysmA7l3z8mIrCXphfxY72-F', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end