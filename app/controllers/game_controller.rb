class GameController < ApplicationController
  
  def index
    @scores = Score.all
    @top10 = @scores.order('score desc').limit(10)
  end

    
  def new 
    @user = User.new
  end

  def tweet_user_highscore
    message  = "I am playing Astroids written by Agile group 1 my highscore is #{current_user.top_score}! You can also play along at http://agile.dootb.in"
    current_user.twitter.update(message)  
    respond_to do |format|
      format.html { redirect_to root_url, notice: 'You have tweeted your highscore' }
      format.json { head :no_content }
    end    
  end
end
