class CreateGameData < ActiveRecord::Migration
  def change
    create_table :game_data do |t|
      t.string :name
      t.string :email
      t.integer :score
      t.integer :savedScore
      t.integer :highScore

      t.timestamps null: false
    end
  end
end
