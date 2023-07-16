// to print
// 1
// 12
// 123
// 1234
// 12345...so on.................
// 
// Steps:
// 1. Eikhane rows=no. of lines jeita holo outer loop(rows=columns)
// 2. No. of columns  = No. of rows  = No. of star in each columns jar mne holo "rows=columns" as the no. of lines and the no. of stars in each lines is same. 
// 3. Print korte hobe amader column no.

let n = prompt("Enter the no. rows you want.");
for (let rows = 1; rows <= n; rows++) {
    for (let columns = 1; columns <= rows; columns++) {
        // console.log(columns);
        document.write(" ", columns);
        // the column no. is printed on the loop
    }
    // console.log("/n");
    document.write("<br/>");
}



