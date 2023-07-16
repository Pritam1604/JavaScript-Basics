// to print
// 1
// 22
// 333
// 4444
// 55555...so on.................
// 
// Steps:
// 1. Eikhane rows=no. of lines jeita holo outer loop(rows=columns)
// 2. No. of columns  = No. of rows  = No. of star in each columns jar mne holo "rows=columns" as the no. of lines and the no. of stars in each lines is same. 
// 3. Print korte hobe amader row no.
//  That's it.


let n = prompt("Enter the no. rows you want.");
for (let rows = 1; rows <= n; rows++) {
    for (let columns = 1; columns <= rows; columns++) {
        // console.log(columns);
        document.write(" ", rows);
        // the row no. is printed on the loop
    }
    // console.log("/n");
    document.write("<br/>");
}

