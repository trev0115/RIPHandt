var saveGame = {
  lives : 0,
  ammo : 0,
  score : 0,


  init : function( lives, ammo, score ) {

    this.lives = lives;
    this.ammo = ammo;
    this.score = score; 
  },

  sendGameSave : function( lives, ammo, score) {

  $.ajax({

    url: "/saveGame",
    type: "get",
    data: {
      user_lives : lives,
      user_ammo : ammo,
      user_score : score
    },

    success : function() {
      console.log("saved");
    },
    error: function( xhr, status, error ) {
      console.log(xhr);
    }

  });

  }
}
