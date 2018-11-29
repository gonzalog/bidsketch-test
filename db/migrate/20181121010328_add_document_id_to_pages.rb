class AddDocumentIdToPages < ActiveRecord::Migration[5.1]
  def change
    add_reference :pages, :document, foreign_key: true
  end
end
