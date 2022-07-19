const container = document.getElementById('container');//drawing board
//let user = prompt("Choose layout size. Enter: 10, 20, 30, 60, or 100");

    
let user = 0; //replaces user prompt -- sets initial value to 0

//-------BUTTON VARIABLES---------

const tenBtn = document.querySelector('#ten');
tenBtn.addEventListener('click', () => {
    user += 10; // adds ten by ten grid
    makeGrid();
    user -= 10; // removes ten by ten grid to prevent overlapping previous click

});

const twentyBtn = document.querySelector('#twenty');
twentyBtn.addEventListener('click',() => {
    user += 20;
    makeGrid();
    user -= 20;
});

const thirtyBtn = document.querySelector('#thirty');
thirtyBtn.addEventListener('click', () => {
    user += 30;
    makeGrid();
    user -= 30;
}); 

const sixtyBtn = document.querySelector('#sixty');
sixtyBtn.addEventListener('click', () => {
    user += 60;
    makeGrid();
    user -= 60;
}); 

const hundredBtn = document.querySelector('#hundred');
hundredBtn.addEventListener('click', () => {
    user += 100;
    makeGrid();
    user -= 100;
});  

const restartBtn = document.querySelector('#restart');
  restartBtn.addEventListener('click', reload)  
   
function reload(){
    window.location.reload();
}

//------CLEAR BOARD FUNCTION----------

function clearBoard(){
    container.replaceChildren();
    document.querySelector('#rainbowBtn').disabled = false;
    document.querySelector('#blackBtn').disabled = false;
    //document.querySelector('eraseBtn').disabled = false;
};

function makeGrid(){
     

        clearBoard();

        for (i = 0; i < user ** 2; i++){
            const gridSquares = document.createElement("div");
            container.appendChild(gridSquares).className = 'gridSquares';

        //------Variable Conditionals-------

        if (user == 10){    
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 60px)";
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 60px)";
        };

        if (user == 20){    
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 30px)";
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 30px)";
        };

        if (user == 30){    
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 20px)";
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 20px)";
        };

        if (user == 60){    
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 10px)";
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 10px)";
        };

        if (user == 100){    
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 6px)";
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 6px)";
        };
    

        //------COLOR VARIABLES-------

        let blackBtn = document.querySelector('#blackBtn');
            blackBtn.addEventListener('click', changeColorToBlack);

        let rainbowBtn = document.querySelector('#rainbowBtn');
            rainbowBtn.addEventListener('click', changeColorToRainbow);

        let eraseBtn = document.querySelector('#erase');
            eraseBtn.addEventListener('click', eraseSquare);    

        //------COLOR FUNCTIONS
            
        function changeToRainbow(){
            let colors = ['#ff00007d', '#ffa5007d', '#ffff007d', '#0080007d', '#0000ffd7d', '#8000807d'];
            let random = colors[Math.floor(Math.random() * colors.length)];
            gridSquares.style.backgroundColor = random;
        } ;
        
        function changeColorToRainbow(){
            if (rainbowBtn.clicked = true){
                gridSquares.addEventListener('mouseover', changeToRainbow);
                document.querySelector('#blackBtn').disabled = true;
            };
        };
        
        function changeToBlack(){
            let black = '#000000be';
            gridSquares.style.backgroundColor = black;
        };

        function changeColorToBlack(){
            if (blackBtn.clicked = true){
                gridSquares.addEventListener('mouseover', changeToBlack);
                document.querySelector('#rainbowBtn').disabled = true;
            };
        };
            //-----FUNCTION TO ERASE INDIVIDUAL SQUARES
        function changeToWhite(){
            let white = '#fff';
            gridSquares.style.backgroundColor = white;
        };

        function eraseSquare(){
            if (eraseBtn.clicked = true){
                gridSquares.addEventListener('click', changeToWhite);
            };
        };

 };
    
                
};

makeGrid();