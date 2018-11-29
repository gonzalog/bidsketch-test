class AddValueToOptions < ActiveRecord::Migration[5.1]
  def change
    add_column :options, :value, :boolean, default: false
  end
end
