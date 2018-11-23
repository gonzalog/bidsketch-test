class AddClosedAtToDocuments < ActiveRecord::Migration[5.1]
  def change
    add_column :documents, :closed_at, :datetime
  end
end
