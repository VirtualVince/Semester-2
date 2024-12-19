"use strict";

//define a function called getFirstName prints and returns the first name from the full name
function getFirstName(username_p){
    let firstname = username_p.substring(0, username_p.indexOf("."));
    console.log(firstname);
    //if there is no return keyword used, what is returned?:void (which is undefined when printed out)
    return firstname;
}

// expected output of getFirstName(username) is: "peter"
let username = "peter.griffin"; // Do not need to add this here for REMOTE testing,
// ie you can delete these example variables right before submission

//Define Function 2...

