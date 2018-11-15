var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	h1.style.backgroundColor = "steelblue";
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click",function(){
	h1.style.backgroundColor = "#steelblue";
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})


reset.addEventListener("click",function(){
	//generate new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from the array
	pickedColor = pickColor();
	//change colorDisplay
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare the grabbed color to the picked color
		if(pickedColor == clickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again:(";
		}
	});
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