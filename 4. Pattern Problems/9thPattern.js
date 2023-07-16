// to print

//        *********
//         *******
//          *****         columns = max(2n-1)
//           ***          n=5(no. of rows.)
//            *

//  Step 1. 


let n = prompt("Enter the no. of rows you want: ");
for (let rows = 0; rows < n; rows++) {
    for (let space1 = 0; space1 <= rows; space1++) {
        document.write("&nbsp&nbsp");
    }
    for (let columns = 2 * n - 1; columns >= 2 * rows + 1; columns--) {
        document.write("*");
    }
    for (let space2 = 0; space2 <= rows; space2++) {
        document.write("&nbsp");
    }
    document.write("<br/>")
}

