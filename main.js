

function tetorimino(num){

    tetoriminos = [
        [[0,1,1,0],
         [0,1,1,0],
         [0,0,0,0],
         [0,0,0,0]]

        [[0,0,0,0],
         [0,1,0,0],
         [0,1,1,0],
         [0,0,1,0]]
        
        [[0,0,1,0],
         [0,1,1,1],
         [0,0,0,0],
         [0,0,0,0]]

        [[0,1,0,0],
         [0,1,0,0],
         [0,1,0,0],
         [0,1,0,0]]

        [[0,0,0,0],
         [0,1,1,0],
         [0,1,0,0],
         [0,1,0,0]]]
        //[1, 3],   [1, 2],  [1, 1],   [2, 1]   回転前
        //x:-1,y:-2 x:0,y:-1 x:+1,y:0  x:0,y:+1
        //[[0, 1],  [1, 1],  [2, 1],   [2, 2]]　回転前の座標が回転することによりどこに移ったか（xとyの変化量をそれぞれ記憶する）

    return tetorimino[num]

}

//position =  [[7, 3], [7, 2], [7, 1], [8, 1]]
//              aaaaaaa
field = [[0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,1,1,0],
         [0,0,0,0,0,0,0,1,0,0],
         [0,0,0,0,0,0,0,1,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0]]
        //回転後のposition
         //[[6, 1], [7, 1], [8, 1], [8, 2]]

//□
//x = , y = 

const width = 10;//fieldの横の長さ
const height = 20;

//横一列揃ったら一列消える
function disapper(field, point){
    for (var i = 0; i < height; i++){
        if (field[i].indexOf(0) == -1){
            field[i].fill(0)
            //scoreを保存する
            score(point)
            //消えた分下に下がる
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

//指定された座標が1or0
//衝突判定
//衝突したらTrue
function judge(x, y, field){
    return field[y][x] != 0
}
//positionはfield上
const twidht=4
const theight=4
function getxy(tetorimino){
    position = []
    for (let y = 0; y < twidht; y++){
        for (let x = 0; x < theight; x++){
            if (tetorimino[y][x] == 1){
                position.push([x+3, y])
            }
        }  
    }
    return position
}

//fieldに反映させる（固定）
function block(field, position){
    for (let i = 0; i < position.length; i++){
        let x = position[i][0]
        let y = position[i][1]
        field[y][x] = 1
    }
    return field
}

//下に落ちる
function under(field, position){
    for(let i = 0; i < position.length; i++){
        //下にブロックがあったら
        if (position[i][1] === 19 || judge(position[i][0], position[i][1]+1, field)){
            return block(field, position)
        }
    }
    //position更新
    newPosition = []
    for (let j = 0; j < position.length; j++){
        newPosition.push(position[j][0],position[j][1]+1)
    }
    return newPosition
}
//右に移動
function right(position){
    for (let i = 0; i < position.length; i++){
        let x = position[i][0]
        let y = position[i][1]
        if (x == 9 || judge(x+1, y, field)){
            return position
        }
    }
    newPosition = []
    for (let j = 0; j < position.length; j++){
        let x = position[i][0]
        let y = position[i][1]
        newPosition.push(x+1, y)
    }
    return newPosition
}

//左に移動
function left(position){
    for (let i = 0; i < position.length; i++){
        let x = position[i][0]
        let y = position[i][1]
        if (x == 0 || judge(x-1, y, field)){
            return position
        }
    }
    newPosition = []
    for (let j = 0; j < position.length; j++){
        let x = position[i][0]
        let y = position[i][1]
        newPosition.push(x-1, y)
    }
    return newPosition
}

//回転
function rotet(position){

}

//点数を保存
point = 0
function score(point){
    point += 10
    return point
}
let randomNumber = Math.floor(Math.random() * 5);
let tetrominoPattern = tetorimino(randomNumber);
//ゲームオーバーかどうか
//ゲームオーバーはTrue
//getxyで落ちてくるテトリミノの最初の座標を取得するがその取得した座標にすでにブロックがある（1が存在する）場合ゲームオーバー
position = getxy(tetoriminoPattern)
function gameover(position,field){
    for (let i = 0; i < position.length; i++){
        let x = position[i][0]
        let y = position[i][1]
        if (field[y][x] == 1){
            return false
        }
    }
    return true
}


//console.log(block(field, [[3, 4]])[4]);

//0,0-3,0
//1,1-2,1
//3,0-3,3
//3,1-2,3
[x][y]
[[1 ,2 ,3 ,4 ],
 [5 ,6 ,7 ,8 ],
 [9 ,10,11,12],
 [13,14,15,16]]

[y][x]
[[1, 5, 9,13],
 [2, 6,10,14],
 [3, 7,11,15],
 [4, 8,12,16]]

[3-y][x]
[[13, 9, 5, 1],
 [14,10, 6, 2],
 [15,11, 7, 3],
 [16,12, 8, 4]]


 
 [[0,0,1,0],
  [0,1,1,1],
  [0,0,0,0],
  [0,0,0,0]]

[[0,0,0,0],
 [0,0,1,0],
 [0,0,1,1],
 [0,0,1,0]]
