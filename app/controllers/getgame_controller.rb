class GetgameController < ActionController::Base

  def get_game_save
    user = User.find(session[:user_id])
    lives = user.lives
    ammo = user.bullets
    score = user.saved_score
  end

end
