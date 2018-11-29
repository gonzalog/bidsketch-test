class Page < ApplicationRecord
  belongs_to :document
  has_many :options
end
