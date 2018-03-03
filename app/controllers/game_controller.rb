class GameController < ApplicationController
  
  def index
    @scores = Score.all
    @top10 = @scores.limit(10).order('score desc') 
  end

    
  def new 
   @user = User.new
  end
end
