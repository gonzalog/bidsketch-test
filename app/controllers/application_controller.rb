class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private

  def render_react_app(app_name, initial_state = {})
    @package = app_name
    @initial_state = initial_state.to_json
    render html: nil, layout: 'react'
  end
end
