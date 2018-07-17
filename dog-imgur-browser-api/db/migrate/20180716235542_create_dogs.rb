class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.string :title
      t.string :img_url
      t.string :img_cover

      t.timestamps
    end
  end
end
