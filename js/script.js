// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
/*jshint esversion: 6 */

let ticker = 15000;
let quotes= [
    {
    quote : "Books have a unique way of stopping time in a particular moment and saying: Let’s not forget this",
    source : "Dave Eggers",
    category : "time"
    },
    {
        quote : "Here we are, trapped in the amber of the moment. There is no why",
        source : "Kurt Vonnegut",
        category : "time"
    },
    {
        quote : "Time is a game played beautifully by children",
        source : " Heraclitus",
        category : "time",
        citation: "fragments",
        year: "c. 535 – c. 475 BC"
    },
    {
        quote : "The only true wisdom is in knowing you know nothing",
        source : "Socrates",
        category :"knowledge"
    },
    {
        quote : "Any fool can know. The point is to understand",
        source : "Albert Einstein",
        category : "knowledge"
    },
    {
        quote : "The eye sees only what the mind is prepared to comprehend",
        source : "Robertson Davies",
        category : "knowledge",
        citation: "Tempest Lost",
        year:"published 1951"
    },
    {
        quote : "We have to dare to be ourselves, however frightening or strange that self may prove to be",
        source : " May Sarton",
        category : "life"
    },
    {
        quote : "Life's under no obligation to give us what we expect",
        source : "Margaret Mitchell",
        category : "life",
        citation: "Gone with the Wind.",
        year:"published 1936"
    },
    {
        quote : "The most wasted of all days is one without laughter",
        source :"Nicolas Chamfort",
        category :"life"
    },  
    {
        quote : "If I can stop one heart from breaking, I shall not live in vain",
        source : " Emily Dickinson",
        category : "life"
    },
    {
        quote :"Biology gives you a brain. Life turns it into a mind",
        source :" Jeffrey Eugenides",
        category :"life"
    },

]

let colors=[
{
    color : "rgb(48, 152, 173)"  //blue
},
{
    color : "rgb(186, 104, 164)"  //pink
},
{
    color : "rgb(242, 199, 125)"  //peach
},
{
    color : "rgb(61, 4, 46)"  //plum
},

{
    color: "rgb(43, 66, 9)"  //olive
},
{
    color: "rgb(86, 75, 79)"  //mushroom
},
]

//  function to get random quote
function getRandomQuote () {
  let randomNum= Math.floor(Math.random() * quotes.length);
  return randomNum;
}

// function to get random color
function changeBackground(){
    let randomColor= Math.floor(Math.random() * colors.length);
    return randomColor;
    
}

// function Using a string to display new quote. Change background color and button background. 
function printQuote(){
    let getRandomNum= getRandomQuote();
    let getRandomColor= changeBackground();
    let body = document.getElementById("body");
    body.style.backgroundColor= colors[getRandomColor].color;
    let button=document.getElementById("loadQuote");
    button.style.backgroundColor=colors[getRandomColor].color;

    let nextQuote= '<p class="quote">' + quotes[getRandomNum].quote + '</p>';
    nextQuote += '<p class="source">' + quotes[getRandomNum].source;
// check for citation property in object
        if(quotes[getRandomNum].hasOwnProperty("citation") === true ){
            nextQuote +='<span class="citation">' + quotes[getRandomNum].citation + '</span>'
        }

// check for citation year prop in object
        if(quotes[getRandomNum].hasOwnProperty("year") === true){
            nextQuote += '<span class="year">' + quotes[getRandomNum].year +'</span>'
        }

//add category
    nextQuote += '<span class="category">' + quotes[getRandomNum].category +'</span>'
    nextQuote += '</p>'
    document.getElementById("quote-box").innerHTML = nextQuote;
}//end printQuote

// auto refresh quote
let timer = setInterval(printQuote, ticker)

// function to reset refresh rate on auto refresh
function reset(){
    if(timer){
        window.clearInterval(timer);
        timer = setInterval(printQuote, ticker)
    }
}

  
//event listener on button
let button= document.getElementById('loadQuote');
    button.addEventListener("click", () =>{
        reset();
        printQuote();

    });
    




//******************************************************************************* */
// Had to change this for the above function to fulfill project requirements
//function to display new quote and background color  

/*function printQuote (){
    let newQuote= document.getElementById("singleQuote");
    let newSource= document.getElementsByClassName("source");
    let getRandomColor= changeBackground();
    let body = document.getElementById("body");
    body.style.backgroundColor= colors[getRandomColor].color;
    let getRandomNum= getRandomQuote();
    newQuote.innerHTML= quotes[getRandomNum].quote;
    newSource[0].innerHTML= quotes[getRandomNum].source;
    //console.log(quotes[getRandomNum].citation);

// condtional to check for citation property and insert into DOM
    if(quotes[getRandomNum].hasOwnProperty("citation")=== true ){
        //console.log(quotes[getRandomNum].citation);
        let newCitation=document.createElement("span");
        newCitation.classList.add("citation");
        //console.log(newCitation);
        newCitation.innerHTML=quotes[getRandomNum].citation;
        newSource[0].appendChild(newCitation); 
} //end printQuote

// add tag reference and insert into DOM
let newCategory = document.createElement("span");
newCategory.textContent= quotes[getRandomNum].category;
newCategory.classList.add("category");
newSource[0].appendChild(newCategory);
}*/



