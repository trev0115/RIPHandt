require 'test_helper'

class GameDatumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  
  test "gameTest" do
    user = GameDatum.new
    user.name = "John Smith"
    user.email = "test"
    user.score = 50
    user.savedScore = 100
    user.highScore = 200
    assert user.save
  end
  
end
