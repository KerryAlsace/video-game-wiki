# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161219200221) do

  create_table "games", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "publisher_id"
    t.integer  "genre_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "genres", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "goodfors", force: :cascade do |t|
    t.string   "activity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "platform_games", force: :cascade do |t|
    t.integer  "game_id"
    t.integer  "platform_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "platforms", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "publishers", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "review_goodfors", force: :cascade do |t|
    t.integer  "review_id"
    t.integer  "goodfor_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.text     "content"
    t.integer  "game_id"
    t.boolean  "playing_solo"
    t.boolean  "playing_with_friends"
    t.boolean  "cosplay"
    t.boolean  "relaxing"
    t.boolean  "learning"
    t.boolean  "newbs"
    t.boolean  "getting_amped_up"
    t.boolean  "playing_while_drunk"
    t.boolean  "playing_while_high"
    t.boolean  "your_adventurer_streak"
    t.boolean  "your_krombopolis_michael_streak"
    t.boolean  "your_bob_the_builder_streak"
    t.boolean  "playing_to_remember"
    t.boolean  "playing_to_forget"
    t.boolean  "making_new_friends"
    t.boolean  "making_new_enemies"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

end
