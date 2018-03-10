class SavegameController < ActionController::Base
  def saveGame
    #TODO save lives and ammo 
    user_score = params[:user_score]
    user_ammo = params[:user_ammo]
    user_life = params[:user_life]
    @user = User.find(session[:user_id])
    user.bullets = user_ammo
    user.save_score = user_score
    user.bullets
    if @scores.save
      respond_to do |format|
        format.html {redirect_to root_path}
      end
    end
  end
end
