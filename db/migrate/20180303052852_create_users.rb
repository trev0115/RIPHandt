class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :profile_image
      t.string :uid
      t.string :provider
      t.string :name
      t.string :token
      t.string :secret
      t.string :email
      t.integer :lives
      t.integer :bullets
      t.integer :saved_score

      t.timestamps null: false
    end
  end
end
