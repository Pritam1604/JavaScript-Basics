// to print
// *
// **
// ***
// ****
// *****...so on.................
// 
// Steps:
// 1. Eikhane rows=no. of lines jeita holo outer loop
// 2. No. of columns  = No. of rows  = No. of star in each columns jar mne holo "i=j" as the no. of lines and the no. of stars in each lines is same. 
// 3. Print korte hobe amader "*".

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        // console.log("*");
        document.write("*")
    }
    // console.log("\n"); 
    document.write("<br/>")
}

// Eikhane console e thik bhabe print hoina because of repetition.
// tai document.write use korechi so that the thing gets printed on the webpage
// pore when convenient console.log use korbo.