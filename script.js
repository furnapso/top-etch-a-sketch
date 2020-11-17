function draw(gridsize) {
    // draw function

    const grid = document.querySelector("#grid");
    let cellWidth = grid.offsetWidth / parseInt(gridsize);
    let cellHeight = grid.offsetHeight / parseInt(gridsize);
    
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

function clear() {
    // clear grid function
}

draw(16);