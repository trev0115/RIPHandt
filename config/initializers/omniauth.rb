OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '389169486623-ojpj6k8rpteohf7vk7o76k0nvmh9c1es.apps.googleusercontent.com', '_XCl88yuWOG1YwePqR0DDzHg', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
  provider :twitter, Rails.application.secrets.twitter_api_key, Rails.application.secrets.twitter_api_secret
end
