class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.text :content
      t.boolean :playing_solo
      t.boolean :playing_with_friends
      t.boolean :cosplay
      t.boolean :relaxing
      t.boolean :learning
      t.boolean :newbs
      t.boolean :getting_amped_up
      t.boolean :playing_while_drunk
      t.boolean :playing_while_high
      t.boolean :your_adventurer_streak
      t.boolean :your_krombopolis_michael_streak
      t.boolean :your_bob_the_builder_streak
      t.boolean :playing_to_remember
      t.boolean :playing_to_forget
      t.boolean :making_new_friends
      t.boolean :making_new_enemies

      t.timestamps
    end
  end
end
