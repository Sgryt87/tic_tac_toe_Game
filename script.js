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

function IsPlayerFirst() {
    return (Math.random() >= 0.5);
}

function Log(val) {
    console.log(val);
}

/*function IsEmpty(index){
    if(board[index] != '')
        return
}

function MakeStep() {

}*/

$(function () {

    /*while(true){
        MakeStep();
        var status = getCurrentStatus();
        if(status=== 'draw'){

            break;

        }
    }*/



    $('.inbox').click(function () {
        var index = parseInt(this.id);
        board[index] = 'X';
        Print(board);
        // computer logic
    });
});