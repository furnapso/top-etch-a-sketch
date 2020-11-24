const gridSizeBox = document.querySelector("#gridsize");
const drawButton = document.querySelector("#draw");

function draw(gridsize) {
    // draw function

    const grid = document.querySelector("#grid");
    grid.innerHTML = "";
    let cellWidth = grid.offsetWidth / parseInt(gridsize) - 1;
    let cellHeight = grid.offsetHeight / parseInt(gridsize) - 1;

    if (cellHeight > cellWidth) {
        cellHeight = cellWidth;
    }

    else {
        cellWidth = cellHeight;
    }
    
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
        errorMessage("Please enter a grid size up to 100");
        return;
    }

    else if (parseInt(gridSize) > 100) {
        errorMessage("Please enter a grid size up to 100");
        return
    }

    else {
        errorMessage("");
        draw(gridSize);
        cellHoverColorChange();
    }
})

function cellHoverColorChange() {
    document.querySelectorAll(".cell").forEach(i => {
        i.addEventListener("mouseover", function() {
            i.style.backgroundColor = getRandomRgb();
        });
    });
}

function randomBetween(num1, num2) {
    return Math.floor(Math.random() * num2 + num1)
}

function getRandomRgb() {
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    return `rgb(${r}, ${g}, ${b})`
}

draw(16);
cellHoverColorChange();