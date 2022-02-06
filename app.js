var player = true;

var matrix = [[1,2,3],[4,5,6],[7,8,9]]


let change = (name) => {
    player?player=false:player=true
    if(name.innerHTML === ""){
        if(player){
            name.innerText = "X"
        }
        else{
            name.innerText = "O"
        }
    }
    name.style.display = "grid"
    name.style.placeItems = "center"
    name.style.fontSize = "30px"
}

let one = document.getElementById("one")
one.addEventListener("click", () => {
    if(one.innerHTML === ""){
        change(one)
        matrix[0][0] = one.innerHTML
        ticTacToe(matrix)
    }
})

let two =  document.getElementById("two");
two.addEventListener("click", () => {
    if(two.innerHTML === ""){
        change(two)
        matrix[0][1] = two.innerText;
        ticTacToe(matrix)
    }
})

let three = document.getElementById("three");
three.addEventListener("click", () => {
    if(three.innerHTML === ""){
        change(three)
        matrix[0][2] = three.innerText
        ticTacToe(matrix)
    }
})


let four = document.getElementById("four");
four.addEventListener("click", () => {
    if(four.innerHTML === ""){
        change(four)
        matrix[1][0] = four.innerText
       ticTacToe(matrix)
    }
})


let five = document.getElementById("five");
five.addEventListener("click", () => {
    if(five.innerHTML === ""){
        change(five)
        matrix[1][1] = five.innerText
        ticTacToe(matrix)
    }
})


let six = document.getElementById("six");
six.addEventListener("click", () => {
    if(six.innerHTML === ""){
        change(six)
        matrix[1][2] = six.innerText
        ticTacToe(matrix)
    }
})


let seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    if(seven.innerHTML === ""){
        change(seven)
        matrix[2][0] = seven.innerHTML
        ticTacToe(matrix)
    }
})


let eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    if(eight.innerHTML === ""){
        change(eight)
        matrix[2][1] = eight.innerText
        ticTacToe(matrix)
    }
})


let nine = document.getElementById("nine");
nine.addEventListener("click", () => {
    if(nine.innerHTML === ""){
        change(nine)
        matrix[2][2] = nine.innerText
        ticTacToe(matrix)
    }
})




var count = 0;
function ticTacToe(matrix){
    count++;
    var n = matrix.length;
   for(var i=0; i<n; i++){
    for(var j=0; j<n; j++){
  //checking horizontally ===
      if(j+2<n){
       if(matrix[i][j] === matrix[i][j+1] && matrix[i][j] === matrix[i][j+2]){
        celebrate(matrix[i][j]);
        remover();
         break; 
       }
      }
   //checking vertically =====
      if(i+2<n){
       if(matrix[i][j] === matrix[i+1][j] && matrix[i][j] === matrix[i+2][j]){
        celebrate(matrix[i][j]);
        remover();
         break;
       }
      }
  //checking diagonally downwards=====
      if(i+2<n && j+2<n){
       if(matrix[i][j] === matrix[i+1][j+1] && matrix[i][j] === matrix[i+2][j+2]){
        celebrate(matrix[i][j]);
        remover();
         break;
       }
      }
  //checking diagonlly upwards=====
      if(i-2>=0 && j+2<n){
       if(matrix[i][j] === matrix[i-1][j+1] && matrix[i][j] === matrix[i-2][j+2]){
        celebrate(matrix[i][j]);
        remover();
         break;
       }
      }
    }
   }

   if(count === 9){
    loose();
    count = 0;
    remover();
   }

  }

  let remover = () => {
    let div = document.querySelector("#tictac").querySelectorAll("div");
    div.forEach(element => {
        element.textContent = ""; 
    });
    count = 0;
    matrix = [[1,2,3],[4,5,6],[7,8,9]]

    let replay = document.getElementById("again");
    replay.style.display = "block"

    let playAgain = document.getElementById("playAgain");
    playAgain.addEventListener("click",() => {
        location.reload()
    })
  }
  

  let celebrate = (x) => {
      let won = document.getElementById("replay")
      won.innerText = `Congratulations !
      Player   ${ x }   won`
      won.style.marginTop = "50px"
  }

  let loose = () => {
    let won = document.getElementById("replay")
    won.innerText = `Match Tied !`
    won.style.marginTop = "80px"
  }