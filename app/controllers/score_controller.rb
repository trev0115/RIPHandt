class ScoreController < ActionController::Base
  def create
    user_score = params[:score]
    @scores = Score.create(user_id: session[:user_id], score: user_score)
    if @scores.save
      respond_to do |format|
        format.html {redirect_to root_path}
      end
    end
  end
end
