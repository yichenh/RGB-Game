//Values
var numberOfSquares = 6;
var colors = [];
var pickedColor;

//Selected Elements
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupSquares();
	setupButtons();
	reset();
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare the grabbed color to the picked color
			if(pickedColor == clickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again:(";
			}
		});
	}
}

function setupButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numberOfSquares = 3;
			} else {
				numberOfSquares = 6;
			}
			reset();
		});
	}

	resetButton.addEventListener("click",function(){
		reset();
	});
}

function reset(){
	//generate new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from the array
	pickedColor = pickColor();
	//change colorDisplay
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length ; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}

//change all the squares to color
function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

//pick the color of the correct square
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

//generate an array of random colors
function generateRandomColors(numColors){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < numColors; i++){
		arr.push(randomColor());
	}
	return arr;
}

//generate the rgb string for each entry of the colors array
function randomColor(){
	//make a "red" from 0-255
	var red = Math.floor(Math.random()*256);
	//make a "green" from 0-255
	var green = Math.floor(Math.random()*256);
	//make a "blue" from 0-255
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}