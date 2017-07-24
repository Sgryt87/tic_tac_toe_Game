$(document).ready(function() {

  var board = [
      '', '', '',
      '', '', '',
      '', '', ''
    ];

  function Print(board) {
      for (var i = 0; i < 9; i++) {
          $('#' + i).text(board[i]);
      }
  }
// user's turn
function IsPlayerTurn () {
  return Math.floor(Math.random()*2+1);
}

// X or O

$('.inbox').click(function () {
        var index = parseInt(this.id);
        if(IsPlayerTurn() == 1) {
        board[index] = 'X';
        $(this).off('click');
        Print(board);
      } else {
        board[index] = 'O';
        $(this).off('click');
        Print(board);
      }
  });

  function checkBoard(board){
     for(var i=0; i<board.length; i++){
         if(board[i] === "")
            return false;
     }

     return true;
  }



///end
});


/*function Log(val) {
    console.log(val);
}
*/
/*function IsEmpty(index){
    if(board[index] != '')
        return
}
function MakeStep() {
}*/



    /*while(true){
        MakeStep();
        var status = getCurrentStatus();
        if(status=== 'draw'){
            break;
        }
    }*/



  /*  $('.inbox').click(function () {
        var index = parseInt(this.id);
        board[index] = 'X';
        Print(board);
        // computer logic
    });*/
