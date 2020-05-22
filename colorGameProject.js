var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headline = document.getElementById("headline");
var resetButton = document.getElementById("reset");
// var easyBtn = document.getElementById("easy");
// var hardBtn = document.getElementById("hard");
var modeButtons = document.querySelectorAll(".mode");

var isFinished = false;

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}


function setupModeButtons(){
    for(i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            if(this.textContent === "Easy"){
                numberOfSquares = 3;
            } else {
                numberOfSquares = 6;
            }
            // Shorter way of writing for
            // this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(i = 0; i < squares.length; i++){
        //add the events when clicked
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(isFinished){
                return;
            }
            if(clickedColor !== pickedColor){
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            } else {
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                headline.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again!";
    
                isFinished = true;
            }
        });
    }
}

function changeColors(color){
    for(i = 0; i < squares.length; i++){
       squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    var arr = [];

    for(i = 0; i < num; i++){
        arr.push(RandomColor());
    }

    return arr;
}

function RandomColor(){
     var red = Math.floor(Math.random() * 256);
     var green = Math.floor(Math.random() * 256);
     var blue = Math.floor(Math.random() * 256);

     return "rgb(" + red + ", " + blue + ", " + green + ")" ;
}



function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "NEW COLORS";
    messageDisplay.textContent = "";
    headline.style.backgroundColor = "steelblue";

    for(i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
     }
    isFinished = false;
}

resetButton.addEventListener("click", function(){
    reset();
});

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");

//     numberOfSquares = 3;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
//     headline.style.backgroundColor = "steelblue";
//     isFinished = false;
// });

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");

//     numberOfSquares = 6;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
//     headline.style.backgroundColor = "steelblue";
//     isFinished = false;
// });