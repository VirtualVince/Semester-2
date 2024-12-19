/* walkthrough12b.html

practicing adding methods to prototypes
 */

//define a prototype constructor: Card
//always use a regular function for a prototype constructor since the name should
//math exactly the name of the prototype that we want
function Card(p_title, p_src, p_content){
    //set the parameters into properties of the class
    this.title = p_title;
    this.src = p_src;
    this.content = p_content;
}

//add a method to the card prototype
//remember the array prototype documentation: Array.prototype.reduce(). example to call myNumArray.reduce()
Card.prototype.makeMarkup = function (){
    return `<section class="card">
    <h2>${this.title}</h2>
    <!--We can set the src attribute to the value inside the object's property src which we
    access using this.___-->
    <img src="${this.src}">
</section>`;
}

Card.prototype.makeElement = function () {
        //createElement() function allows us to create a new html element using JS
    let cardMain = document.createElement("main");
    //inner html property allows us to set some text between the open and close tags of the element
    cardMain.innerHTML = this.makeMarkup();
    return cardMain;
}

const c1 = new Card("Starry night","https://cdn8.openculture.com/2021/09/12211918/starry-night-swirls.png", "oil painting");
console.log(c1);

document.addEventListener("DOMContentLoaded",() => {
    //select the body HTML element from my HTML code but within JS
    const bodyElement = document.querySelector("body");
    //what function can but a new html element as a child of the body element (or equivalently to be the
    //child of any other element that we have selected from our existing html)
    bodyElement.appendChild(c1.makeElement());
});
