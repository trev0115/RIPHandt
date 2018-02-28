class CreateScores < ActiveRecord::Migration
  def change
    create_table :scores do |t|
      t.string :user_id
      t.string :score
      t.string :integer

      t.timestamps null: false
    end
  end
end
