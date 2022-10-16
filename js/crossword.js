let params = {};

function createRow(row, colSize) {
    for (let i = 0; i < colSize; i++) {
        colDiv = document.createElement("div");
        colDiv.setAttribute("class", "cwcell light");
        input = document.createElement("input");
        input.setAttribute("maxlength", "1");
        colDiv.appendChild(input);
        row.appendChild(colDiv);
    }
}

function create(id, params) {
    x = document.getElementById(id);
    size = params.size;
    console.log(size);
    rows = [];
    crossword = document.createElement("div");
    crossword.setAttribute("class", "crossword");
    crossword.setAttribute("font-size", "4vw");
    for (let i = 0; i < size.rows; i++) {
        rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "cwrow");
        createRow(rowDiv, size.cols);
        crossword.appendChild(rowDiv);
    }
    x.appendChild(crossword);
    for (let i = 0; i < params.grid.length; i++) {
        r = Math.floor(i / size.cols);
        c = i % size.cols;
        if (params.grid[i] === ".") {
            z = crossword.children[r].children[c];
            crossword.children[r].children[c].removeChild(z.children[0]);
            crossword.children[r].children[c].setAttribute("class", "cwcell dark");
        }
    }
    for (let i = 0; i < params.gridnums.length; i++) {
        r = Math.floor(i / size.cols);
        c = i % size.cols;
        if (params.gridnums[i] !== 0) {
            gn = document.createElement('div');
            gn.setAttribute('class', 'cwcluelabel');
            gn.innerHTML = params.gridnums[i];
            crossword.children[r].children[c].appendChild(gn);
        }
    }
    x.appendChild(document.createElement("br"));
    table = document.createElement("table");
    table.width = "100%";
    table.appendChild(document.createElement("tr"));
    across = document.createElement("td");
    across.innerHTML = "<h3>Across</h3>"
    down = document.createElement("td");
    down.innerHTML = "<h3>Down</h3>"
    table.children[0].appendChild(across);
    table.children[0].appendChild(down);
    console.log(params.clues);
    for (let i = 0; i < params.clues.across.length; i++) {
        across.innerHTML += params.clues.across[i];
        across.innerHTML += "<br/>";
    }
    for (let i = 0; i < params.clues.down.length; i++) {
        down.innerHTML += params.clues.down[i];
        down.innerHTML += "<br/>";
    }
    x.appendChild(table);
}

function reset() {
    for (let i = 0; i < params.grid.length; i++) {
        r = Math.floor(i / size.cols);
        c = i % size.cols;
        if (params.grid[i] !== ".") {
            ll = crossword.children[r].children[c].children[0]
            ll.value = "";
            ll.style["background-color"] = "";
        }
    }
}

function reveal() {
    for (let i = 0; i < params.grid.length; i++) {
        r = Math.floor(i / size.cols);
        c = i % size.cols;
        if (params.grid[i] !== ".") {
            ll = crossword.children[r].children[c].children[0];
            if (ll.value == params.grid[i]) {} else {
                ll.style["background-color"] = "#FFB6C1";
                ll.value = params.grid[i];
            }
        }
    }
}
