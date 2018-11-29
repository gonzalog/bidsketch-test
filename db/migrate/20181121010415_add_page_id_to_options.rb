class AddPageIdToOptions < ActiveRecord::Migration[5.1]
  def change
    add_reference :options, :page, foreign_key: true
  end
end
