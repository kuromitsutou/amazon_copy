class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_partial_view_display_condition


  protected

  def set_partial_view_display_condition
    controller = self.controller_name
    action = self.action_name
    if (controller == "registrations" && action == "new") ||
       (controller == "sessions" && action == "new") ||
       (controller == "passwords" && action == "new")
      @display_condition = false
    else
      @display_condition = true
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :name_kana])
  end
end
