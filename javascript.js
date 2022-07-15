const container = document.getElementById('container');//drawing board
//let user = prompt("Choose layout size. Enter: 10, 20, 30, 60, or 100");

    
//let user = "";
   
function reload(){
    window.location.reload();
}

function makeGrid(){
   //-------BUTTON VARIABLES---------
    const tenBtn = document.querySelector('#ten');
        tenBtn.addEventListener('click', tenByTen);

    const twentyBtn = document.querySelector('#twenty');
        twentyBtn.addEventListener('click', twentyByTwenty);

    const thirtyBtn = document.querySelector('#thirty');
        thirtyBtn.addEventListener('click', thirtyByThirty); 

    const sixtyBtn = document.querySelector('#sixty');
        sixtyBtn.addEventListener('click', sixtyBySixty); 

    const hundredBtn = document.querySelector('#hundred');
        hundredBtn.addEventListener('click', hundredByHundred);  

    const restartBtn = document.querySelector('#restart');
          restartBtn.addEventListener('click', reload)    

    //------CLEAR BOARD FUNCTION----------

    function clearBoard(){
        container.replaceChildren();
        document.querySelector('#rainbowBtn').disabled = false;
        document.querySelector('#blackBtn').disabled = false;
        //document.querySelector('eraseBtn').disabled = false;
    };

    function tenByTen(){
        clearBoard();

        for (i = 0; i < 10 ** 2; i++){
            const gridSquares = document.createElement("div");
            container.appendChild(gridSquares).className = 'gridSquares';
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 60px)";
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 60px)";
        
    

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
                //---------20x20--------------

        function twentyByTwenty(){
        clearBoard();

        for (i = 0; i < 20 ** 2; i++){
            const gridSquares = document.createElement("div");
            container.appendChild(gridSquares).className = 'gridSquares';
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 30px)";
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 30px)";
        
    

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

    function thirtyByThirty(){
        clearBoard();

        for (i = 0; i < 30 ** 2; i++){
            const gridSquares = document.createElement("div");
            container.appendChild(gridSquares).className = 'gridSquares';
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 20px)";
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 20px)";
        
    

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

    function sixtyBySixty(){
        clearBoard();

        for (i = 0; i < 60 ** 2; i++){
            const gridSquares = document.createElement("div");
            container.appendChild(gridSquares).className = 'gridSquares';
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 10px)";
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 10px)";
        
    

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

    function hundredByHundred(){
        clearBoard();

        for (i = 0; i < 100 ** 2; i++){
            const gridSquares = document.createElement("div");
            container.appendChild(gridSquares).className = 'gridSquares';
            document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 6px)";
            document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 6px)";
        
    

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
};

makeGrid();