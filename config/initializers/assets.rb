# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )

Rails.application.config.assets.precompile += %w(_onepage.css _mixins-master.css _utilities.css _links.css _menu-footer-navigation.css animate.css aos.css bootstrap-grid.min.css fontawesome-all.min.css justifiedGallery.min.css magnific-popup.css slick.css swiper.min.css youtubepopup.css plugins.css _header-post.css _widgets.css style.css style.css.map _transitions.css _variables-site.css)
Rails.application.config.assets.precompile += %w(custom.js dsn-grid.js jquery-3.1.1.min.js plugins.js)