//this code is usually written for the web API, so we are pretending we are API developers
async function promiseReturner1(){
    //automatically resolve a successful piece of data for the promise
    return "This is actually a Promise Object. And we can even run the then() and catch() methods on it.";
}

//this code is usually written for web server (by the web developer). usually in a different file from the
const p1 = promiseReturner1();

console.log(p1);

p1.then((strVal) => {
    console.log("The promise returned the following: " + strVal);
}).catch(() => {
    console.log("there was an error with the data");
})
