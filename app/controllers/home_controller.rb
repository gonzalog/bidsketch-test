class HomeController < ApplicationController
  def index
    document = Document.first
    render_react_app('document_editor', {
      document: document.as_json(include: {
        pages: {
          include: :options
        }
      })
    })
  end
end
