

const container = document.getElementById('container');//drawing board
let user = prompt("Choose layout size. Enter: 10, 20, 30, 60, or 100");

const restart = document.querySelector('#restart'); 
    restart.addEventListener('click', reloadPage); //button to reload page

function reloadPage(){
    window.location.reload();
};    

/*------Grid Board 600px X 600px------*/

function clearBoard(){ //to prevent new board from drawing on top of old board
    container.replaceChildren();
}

function makeGrid(){ 
    for (i = 0; i < user ** 2; i++){
        const gridSquares = document.createElement('div');
        container.appendChild(gridSquares).className = "gridSquares";
        if (user == 10){
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 60px)" //10 squares times 60px equals 600 pixels
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 60px)"
            
        };

        if (user == 20){
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 30px)" //10 squares times 60px equals 600 pixels
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 30px)"
        };
        if (user == 30){
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 20px)" //10 squares times 60px equals 600 pixels
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 20px)"
        };
        if (user == 60){
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 10px)" //10 squares times 60px equals 600 pixels
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 10px)"
        };
        if (user == 100){
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 6px)" //10 squares times 60px equals 600 pixels
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 6px)"
        };            
                //----reloads the page if user does not enter a valid number for the board
        if (user != 10 && user !=20 && user !=30 && user != 60 && user != 100){
           clearBoard();  
           window.location.reload();   
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

