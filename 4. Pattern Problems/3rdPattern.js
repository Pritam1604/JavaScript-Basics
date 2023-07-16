// to print
// *****
// ****
// ***
// **
// *
// 
// Steps:
// 1. Eikhane rows=no. of lines jeita holo outer loop
// 2. eikhane inner loop e komche which mean for the starting point "rows=columns" then gradually decrease korbe columns--
// 3. Print korte hobe amader "*".
let n = 5;
for (let rows = 1; rows <= n; rows++) {
    for (let columns = n - rows + 1; columns >= 1; columns--) {
        // console.log("*");
        document.write(" * ");
    }
    // console.log("/n");
    document.write("<br/>");
}
