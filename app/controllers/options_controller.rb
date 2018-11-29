class OptionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    raise "Closed document" if current_option.document.closed?
    current_option.update_attributes(value: params[:value])
    render json: current_option
  rescue StandardError => e
    render json: { error: e.message }, status: 400
  end

  private

  def current_option
    @current_option ||= Option.find(params[:id])
  end
end
