module WebpackHelper
  def webpack_asset_tag(name)
    case name.split('.').last
    when 'css'
      stylesheet_link_tag(asset_file(name))
    when 'js'
      javascript_include_tag(asset_file(name))
    end
  end

  def webpack_common_tag
    concat webpack_style_tag
  end

  def webpack_style_tag
    webpack_asset_tag Rails.env.development? ? 'styles.js' : 'styles.css'
  end

  def webpack_bundle_tag(name)
    name = name.to_s.split('.').first
    webpack_asset_tag "#{name.to_s}.js"
  end

  def asset_file(name)
    case Rails.env
    when 'production', 'staging'
      lookup_asset_in_manifest(name)
    else
      "http://localhost:8080/#{name}"
    end
  end

  def lookup_asset_in_manifest(asset)
    JSON.parse(File.read(Rails.root + "public/assets/manifest.json"))[asset]
  end
end

