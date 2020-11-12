function draw(gridsize) {
    // draw function

    const grid = document.querySelector("#grid");
    

    for (let i = 0; i < parseInt(gridsize); i++) {
        let div = document.createElement("div");
        div.className = "cell";
        grid.appendChild(div);
    }
}

function clear() {
    // clear grid function
}

draw(16);