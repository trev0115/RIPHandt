class GameController < ApplicationController
  
  def index
    @users = GameDatum.all
  end
  
  def new 
   @user = GameDatum.new
  end
end
