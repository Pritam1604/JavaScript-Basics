/*
Define a function called capitalize that accepts a string argument and 
returns a new string with the first letter capitalized
(but the rest of the string unchanged). 
For example:

capitalize('eggplant') / "Eggplant"
capitalize('pamplemousse') / "Pamplemousse"
capitalize('squid') / "Squid"
*/


function capitalize(str) {
    // str has the word that needs to be uppercased
    if (typeof str !== "string") {
        return false;
    }
    const firstLetter = str.slice(0, 1);
    let upperCasedName = str.replace(str[0], firstLetter.toUpperCase());
    return upperCasedName;
}