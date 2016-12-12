class PublisherSerializer < ActiveModel::Serializer
  attributes :id, :content, :game_id, :playing_solo, :playing_with_friends, :cosplay, :relaxing, :learning, :newbs, :getting_amped_up, :playing_while_drunk, :playing_while_high, :your_adventurer_streak, :your_krombopolis_michael_streak, :your_bob_the_builder_streak, :playing_to_remember, :playing_to_forget, :making_new_friends, :making_new_enemies

  has_one :game
end