class Document < ApplicationRecord
  has_many :pages

  def closed?
    closed_at.present?
  end
end
