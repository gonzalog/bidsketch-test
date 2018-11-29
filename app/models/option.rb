class Option < ApplicationRecord
  belongs_to :page
  delegate :document, to: :page
end
