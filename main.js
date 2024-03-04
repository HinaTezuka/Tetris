

function tetorimino(num){
    num = num % 5
    tetoriminos = [
        [[0,0,0,0],
         [0,1,1,0],
         [0,1,1,0],
         [0,0,0,0]]

        [[0,0,0,0],
         [0,1,0,0],
         [0,1,1,0],
         [0,0,1,0]]

        [[0,0,0,0],
         [0,0,0,0],
         [0,0,1,0],
         [0,1,1,1]]

        [[0,1,0,0],
         [0,1,0,0],
         [0,1,0,0],
         [0,1,0,0]]

        [[0,0,0,0],
         [0,1,1,0],
         [0,1,0,0],
         [0,1,0,0]]]

}

field = [[],
         [],
         [],
         [],
         [],
         []]
const width = 10;//fieldの横の長さ
const height = 20;

//横一列揃ったら一列消える
function disapper(field){
    for (var i = 0; i < height; i++){
        if (field[i].indexOf(0) == -1){
            field[i].fill(0)
            down(i, field)
        }
    }
}

//上の段のものが一つ下に落ちる
function down(i,field){
    for (var j = i; j > 0; j--){
        for (var k = 0; k < width; k++){
            field[i][k] = field[i-1][k]
        }
    }
    field[0].fill(0)
}



