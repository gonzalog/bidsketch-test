class HomeController < ApplicationController
  def index
    document = Document.first
    render_react_app('document_editor', document.to_json)
  end
end
