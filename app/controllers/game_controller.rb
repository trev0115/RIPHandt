class GameController < ApplicationController
  
  def index
    @scores = Score.all
    @top10 = @scores.order('score desc').limit(10)
  end

    
  def new 
   @user = User.new
  end

  def tweet_user_highscore
    @user_top_score = @scores.user_id.find(current_user.id).order('score desc').limit(1)
    @tweet = Tweet.new(@user_top_score.score)
    @tweet.user_id = current_user.id 
    @tweet.save
    respond_with(@tweet)
  end
end
