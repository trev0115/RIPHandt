class GameController < ApplicationController
  
  def index
    @scores = Score.all
    @top10 = @scores.order('score desc').limit(10)
  end

    
  def new 
   @user = User.new
  end

  def tweet_user_highscore
    current_user.twitter.update(test)  
  end
end
