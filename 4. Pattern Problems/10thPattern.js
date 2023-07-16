// to print the pattern:
// 1
// 0 1
// 1 0 1
// 0 1 0 1 
// 1 0 1 0 1

// upr  e jodi dekhi bhalo kore row index and col index we can find a similarity and that is
// rowIndex+columnIndex when odd is "0" and when even it is "1". So we can simply use if else for this. 







let n = prompt("Enter the no. of rows: ")
for (let forRows = 1; forRows <= n; forRows++) {
    for (let forCols = 1; forCols <= forRows; forCols++) {
        if ((forCols + forRows) % 2 === 0) {
            document.write(" 1 ");
        }
        else {
            document.write(" 0 ");
        }
    }
    document.write("<br/>");
}