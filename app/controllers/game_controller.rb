class GameController < ApplicationController
  
  def index
    @scores = Score.all
  end
    
  def new 
   @user = User.new
  end
end
