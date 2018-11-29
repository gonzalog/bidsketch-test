class DocumentController < ApplicationController
  skip_before_action :verify_authenticity_token

  def close
    current_document.update_attributes(closed_at: DateTime.now)
    render json: current_document
  end

  private

  def current_document
    @current_document ||= Document.find(params[:document_id])
  end
end
