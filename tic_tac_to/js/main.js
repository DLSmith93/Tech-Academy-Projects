
//this variable keeps track of whos turn it is
let activePlayer = "X";
//this array stores an array of moves. used to determnine win conditions
let selectedsquares = [];

//mp3 files
let place = new Audio('./media/place.mp3');
let win = new Audio("./media/winGame.mp3");
let tie = new Audio("./media/tie.mp3");

//this function is for placing an x or an o
function placeXorO(squareNumber){


    if(!selectedsquares.some(element => element.includes(squareNumber))){
        let select = document.getElementById(squareNumber);

        if(activePlayer === "X"){
            select.style.backgroundImage = 'url("images/x.png")';
        }
        else{
            select.style.backgroundImage = 'url("images/o.png")';
        }

        // square number and active player are concatenated together and added to array
        selectedsquares.push(squareNumber + activePlayer);

        checkWinConditions();

        if(activePlayer === "X"){
            activePlayer = "O";
        }
        else{
            activePlayer = "X";
        }

        place.play();

        if(activePlayer === "O"){
            disableClick();
            setTimeout(function () {computersTurn();}, 1000);
        }

        return true;
    }

    //this function resultsd in random choice by the computer
    function computersTurn(){

        //boolean for while loop
        let success = false;

        let pickASquare;

        while(!success){

            //random number between 0 and 8
            pickASquare = String(Math.floor(Math.random() * 9));

            //if random value returns true, a square hasnt been selected
            if(placeXorO(pickASquare)){
                //calls a function
                placeXorO(pickASquare);
                
                //changes boolean to end the while loop
                success = true;
            }
        }
    }
}

//this function parses the selectedSquares array to search for a win condition
//drawLine() function is called to draw a line on the screen if the condition is met
function checkWinConditions(){
    // X 0 1 2
    if(arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100) }
    // X, 3, 4, 5
    else if(arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304) }
    // X, 6, 7, 8
    else if(arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508) }
    // X, 0, 3, 6
    else if(arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558) }
    // X, 1, 4, 7
    else if(arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558) }
    // X, 2, 5, 8
    else if(arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558) }
    // X, 6, 4, 2
    else if(arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90) }
    // X, 0, 4, 8
    else if(arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520) }
    // O, 0, 1, 2
    else if(arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100) }
    // O, 3, 4, 5
    else if(arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304) }
    // O, 6, 7, 8
    else if(arrayIncludes("6O", "7)", "8O)")) { drawWinLine(50, 508, 558, 508) }
    // O, 0, 3, 6
    else if(arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558) }
    // O, 1, 4, 7
    else if(arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558) }
    // O, 2, 5, 8
    else if(arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558) }
    // O, 6, 4, 2
    else if(arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90) }
    // O, 0, 4, 8
    else if(arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520) }

    // this condition checks for a tie, if none of the condition is met and the
    // 9 squares are filled
    else if(selectedsquares.length >= 9){
        // this plays thge tie game sound
        tie.play();
        // this function sets a .3 second timer before the resetGame is called
        setTimeout(function () { resetGame(); }, 500);

    }

    // this fucntion checks if an array includes 3 strings. it is used to check for 
    // each win condition.
    function arrayIncludes(sqaureA, sqaureB, sqaureC){
        // these 3 variables will be used to check for 3 in a row
        const a = selectedsquares.includes(sqaureA);
        const b = selectedsquares.includes(sqaureB);
        const c = selectedsquares.includes(sqaureC);

        // if the 3 variables we pass are all included in our array then true
        // is returned and our else if condition executes the drawLine() function
        if(a === true && b === true && c === true) { return true; }
    }
}

function disableClick() {

    // this makes our body unclickable
    body.style.pointerEvents = "none";
    
    // this makes our body clickable after 1 second
    setTimeout(function () { body.style.pointerEvents = "auto"; }, 1000);
}

// this function uses HTML to draw the win line
function drawWinLine(coordX1, coordY1, coordX2, coordY2){

    // this line accesses out HTML canvas element
    const canvas = document.getElementById("win-lines");

    // this line gives us access to methods and properties to use on the canvas
    const c = canvas.getContext("2d");

    // this line indicates where the start of a lines x axis is
    let x1 = coordX1,
        // this line indicates where the start of a lines y axis is
        y1 = coordY1,
        // this line indicates where the end of a lines x axis is 
        x2 = coordX2,
        // this line indicates wheret the end of the lines y axis is
        y2 = coordY2,
        // this varaible stores temp data for the x axis we update in the animation loop
        x = x1,
        // this variables stores temp datab for the uy axis we update in the animation loop
        y = y1;

    // this function interacts with the canvas
    function animateLineDrawing(){

        // this variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);

        // this method clears content from the last loop iteration
        c.clearRect(0, 0, 608, 608);
        // this ,method starts a new path
        c.beginPath();
        // this method moves us to the starting point of our line
        c.moveTo(x1, y1);
        // this method indicates the end point of our line
        c.lineTo(x, y);
        // this method set the width iof our line
        c.lineWidth = 10; 
        // this method sets the color of the line
        c.strokeStyle = "rgba(70, 255, 33, .8)";
        // this line draws everything that was laid out
        c.stroke();

        // this condition checks if we've reached the endpoints
        if(x1 <= x2 && y1 <= y2){
            // this condition adds 10 to the pevious x endpoint
            if(x < x2) { x += 10; }
            // this condition adds 10 the previous y endpoint
            if(y < y2) { y += 10; }
            // this condition is similar to the one above
            // this is necessary for the 6 4 2 win conditions
            if(x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        } 

        // this condition is similar to the one above
        // this is necassary for the 6 4 2 win condition
        if(x1 <= x2 && y1 >= y2){
            if(x < x2) { x += 10; }
            if(y > y2) { y -= 10; }
            if(x >= x2 && y1 <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    // this function clears the canvas after the win line is drawn
    function clear(){

        // this line starts the animation loop
        const animationLoop = requestAnimationFrame(clear);
        // this line clears the canvas
        c.clearRect(0, 0, 608, 608);
        // this line stops the animation loop
        cancelAnimationFrame(animationLoop);
    }

    // tjhis line disables clicking while the win sound is playing
    disableClick();
    // this plays the win sound
    win.play();
    // this calls the main animation loop
    animateLineDrawing();
    // this line waits 1 second then clears the canvas, resets the game, and allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000)
}

// this function resets the game
function resetGame(){

    // this for loop iterates through each HTML square element 
    for(let i = 0; i < 9; ++i){
        //this element gets the HTML element i
        let square = document.getElementById(String(i));
        // this removes our elements backgroundImage
        square.style.backgroundImage = "";
    }

    // this resets our array so it is empty and we can start over
    selectedsquares = [];
}
