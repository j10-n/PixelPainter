// constant variables
const pixelCanvas = document.querySelector('#pixelPainter');
const cells = document.getElementsByClassName('cell');

// creates the grid
function createGrid(){
    for(let i = 0; i < 50; i++){
        let row = document.createElement('div');
        row.className = "row";

        for(let j = 0; j < 50; j++){
            let cell = document.createElement('div');
            cell.className = "cell";
            row.appendChild(cell);
        }
        pixelCanvas.appendChild(row);
    }
}
// runs the function to create the grid
createGrid();

    // creates color picker and adds a preset palette
    const colorPicker = document.createElement('input');
    colorPicker.addEventListener('change', setColor);
    colorPicker.addEventListener('click', setColor);
    colorPicker.type = 'color';
    colorPicker.setAttribute("list", "");
    colorPicker.className = 'colorPicker';
    pixelCanvas.appendChild(colorPicker);

    // create variable for color which = "black" at load up;
    let color = colorPicker.value;
    
    // when user performs mouse click events code paints cells
    function paint(e){
        if(e.target.className === 'cell'){
            e.target.style.backgroundColor = color;
        }
    }

    // set the color to equal the value selected by user and change the eraser back to normal when color is selected
    function setColor(){
        color = colorPicker.value;
        eraserButton.style.fontWeight = "normal";
    }

    // by default let down = false because it is replicating a mouse down click
    let down = false;
    
    // for loop that runs through events for all mouse actions
    for(i = 0; i < cells.length; i++){
        cells[i].addEventListener('mousedown', function(){
                down = true;
        });
        cells[i].addEventListener('mouseup', function(){
                down = false;
        });

        cells[i].addEventListener('click', function(e) {
                paint(e);
        });
        cells[i].addEventListener('mouseover', function(e){
            if(down){
                paint(e);
            }
        }); 
    }

    // sets all of the cells' background color to white
    function clear(){
        for (let cell of cells) {
            cell.style.backgroundColor = "white";
        }
    }

    // eraser function, sets color to white and boldens "ERASER" text
    function erase(){
        color = "white";
        eraserButton.style.fontWeight = "bold";
    }

    // creates clear button using dom and appends it to the pixelCanvas
    const clearButton = document.createElement('div');
    clearButton.addEventListener('click', clear);
    clearButton.innerHTML = " CLEAR";
    clearButton.id = 'clearButton';
    pixelCanvas.appendChild(clearButton);

    // creates eraser button using dom and appends it to the pixelCanvas
    const eraserButton = document.createElement('div');
    eraserButton.addEventListener('click', erase);
    eraserButton.innerHTML = "ERASER";
    eraserButton.id = 'eraserButton';
    pixelCanvas.appendChild(eraserButton);






