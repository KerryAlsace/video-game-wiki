class CreateReviewGoodfors < ActiveRecord::Migration[5.0]
  def change
    create_table :review_goodfors do |t|
      t.integer :review_id
      t.integer :goodfor_id

      t.timestamps
    end
  end
end
