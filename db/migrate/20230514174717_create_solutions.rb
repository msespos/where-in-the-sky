class CreateSolutions < ActiveRecord::Migration[7.0]
  def change
    create_table :solutions do |t|
      t.string :name
      t.integer :xcoord
      t.integer :ycoord

      t.timestamps
    end
  end
end
