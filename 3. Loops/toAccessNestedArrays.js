const ticTacToe = [ ['O', null , 'X'],
[ null, 'X', 'X'],
[ 'O','X', null]]

for(let i=0; i<ticTacToe.length; i++){
    console.log(ticTacToe[i]);
    for(let j = 0; j<ticTacToe[i].length; j++){
        console.log(ticTacToe[i][j])
    }
}
