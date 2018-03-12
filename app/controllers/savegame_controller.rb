class SavegameController < ActionController::Base
  def endGame
    user_score = [arams[ :user_score ]]
    score = Score.create(user_id: session[:user_id], score: user_score)
    if score.save
      respond_to do |format|
        format.html {redirect_to root_path}
      end
    end
  end
  
  def saveGame
    #TODO save lives and ammo 
    user_score = params[:user_score]
    user_bullets = params[ :user_ammo]
    user_lives = params[:user_lives]
    user = User.find(session[:user_id])
    user.update(saved_score: user_score, lives: user_lives, bullets: user_bullets )
    if user.save
      respond_to do |format|
        format.json {redirect_to root_path}
      end
    end
  end
end
