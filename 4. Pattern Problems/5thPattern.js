// to print
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// 
// Steps:
// 1.
let noOfLines = prompt("enter the no. of lines: ");
for (let rows = 1; rows <= 2 * noOfLines - 1; rows++) {
    if (rows < noOfLines) {
        for (let cols = 1; cols <= rows; cols++) {
            document.write(" 😑");
        }
    }
    else {
        for (cols = 1; cols <= 2 * noOfLines - rows; cols++) {
            document.write(" 😑")
        }
    }
    document.write("<br/>");
}




