class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :title
      t.text :description
      t.integer :publisher_id
      t.integer :genre_id

      t.timestamps
    end
  end
end
