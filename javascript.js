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