const container = document.getElementById('container');
let user = prompt("Choose layout size");

/*------Grid Board 600px X 600px------*/

function tenByTen(){ 
    for (i = 0; i < user ** 2; i++){
        const gridSquares = document.createElement('div');
        container.appendChild(gridSquares).className = "gridSquares";
        
        document.getElementById('container').style.gridTemplateColumns = "repeat(auto-fit, 60px)" //10 squares times 60px equals 600 pixels
        document.getElementById('container').style.gridTemplateRows = "repeat(auto-fit, 60px)"
    }
};

tenByTen();