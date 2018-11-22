class OptionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    current_option.update_attributes(value: params[:value])
    render json: current_option
  end

  private

  def current_option
    @current_option ||= Option.find(params[:id])
  end
end
