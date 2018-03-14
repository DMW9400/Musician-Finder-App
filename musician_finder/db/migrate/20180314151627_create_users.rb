class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :image_url
      t.integer :age
      t.string :gender
      t.string :top_song_url

      t.timestamps
    end
  end
end
