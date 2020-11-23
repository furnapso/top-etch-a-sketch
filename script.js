const gridSizeBox = document.querySelector("#gridsize");
const drawButton = document.querySelector("#draw");

function draw(gridsize) {
    // draw function

    const grid = document.querySelector("#grid");
    grid.innerHTML = "";
    let cellWidth = grid.offsetWidth / parseInt(gridsize) - 1;
    let cellHeight = grid.offsetHeight / parseInt(gridsize) - 1;
    
    let gridCss = '';

    for (let i = 0; i < parseInt(gridsize); i++) {
        gridCss += "1fr ";
    }

    for (let i = 0; i < parseInt(gridsize)**2; i++) {
        let div = document.createElement("div");
        div.className = "cell";
        div.style.height = cellHeight + "px";
        div.style.width = cellWidth + "px";
        div.style.border = "1px solid black";
        grid.appendChild(div);
    }

    gridCss = gridCss.slice(0,-1);

    grid.style.gridTemplateRows = gridCss;
    grid.style.gridTemplateColumns = gridCss;
}

function errorMessage(error) {
    const messageBox = document.querySelector("#message");
    messageBox.textContent = error;
}

drawButton.addEventListener("click", function() {
    let gridSize = gridSizeBox.value;
    if (gridSize == "") {
        errorMessage("Please enter a grid size");
        return;
    }

    else {
        errorMessage("");
        draw(gridSize);
    }
})

draw(16);