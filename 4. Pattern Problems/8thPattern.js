// to print

//            *
//           ***          n=5(no. of rows.)
//          *****         columns = 
//         *******
//        *********

//  Step 1. 



let n = 5;
for(let rows = 1; rows<=n; rows++){
    for(let space1 = 0; space1<=n-rows-1;space1++){
        document.write("&nbsp ");
    }
    for(let stars = 1; stars<=2*rows-1; stars++){
        document.write("😎");
    }
    for(let space2 = 0; space2<=n-rows-1;space2++){
        document.write("&nbsp");
        // &nbsp mean Non-breaking space. 
    }
    document.write("<br/>");
}

// the program is successful I mean that is very much possible to 