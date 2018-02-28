class GameController < ApplicationController
  
  def index
    @users = User.all
    @scores = Score.all
  end
    
  def new 
   @user = User.new
  end
end
