class SavegameController < ActionController::Base
  def saveGame
    #TODO save lives and ammo 
    user_score = params[:user_score]
    @scores = Score.create(user_id: session[:user_id], score: user_score)
    if @scores.save
      respond_to do |format|
        format.html {redirect_to root_path}
      end
    end
  end
end
