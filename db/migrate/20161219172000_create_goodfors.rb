class CreateGoodfors < ActiveRecord::Migration[5.0]
  def change
    create_table :goodfors do |t|
      t.string :activity

      t.timestamps
    end
  end
end
