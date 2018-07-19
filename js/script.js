// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

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
        citation: "fragments"
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
        citation: "Tempest Lost"
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
        citation: "Gone with the Wind."
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
    color: "rgb(43, 66, 9)"  //olive
},
]

//  function to get random quote
function getRandomQuote () {
  let randomNum= Math.floor(Math.random() * quotes.length);
  console.log(randomNum);
  return randomNum;
}

// function to get random color
function changeBackground(){
    let randomColor= Math.floor(Math.random() * colors.length);
    return randomColor;
}

// function to display new quote and background color
function printQuote (){
    let newQuote= document.getElementById("singleQuote");
    let newSource= document.getElementsByClassName("source");
    let getRandomColor= changeBackground();
    let body = document.getElementById("body");
    body.style.backgroundColor= colors[getRandomColor].color;
    let getRandomNum= getRandomQuote();
    newQuote.innerHTML= quotes[getRandomNum].quote;
    newSource[0].innerHTML= quotes[getRandomNum].source;
    console.log(quotes[getRandomNum].citation);

// condtional to check for citation property and insert into DOM
    if(quotes[getRandomNum].hasOwnProperty("citation")=== true ){
        console.log(quotes[getRandomNum].citation);
        let newCitation=document.createElement("span");
        newCitation.classList.add("citation");
        console.log(newCitation);
        newCitation.innerHTML=quotes[getRandomNum].citation;
        newSource[0].appendChild(newCitation); 
} //end printQuote

// add tag reference and insert into DOM
let newCategory = document.createElement("span");
newCategory.textContent= quotes[getRandomNum].category;
newCategory.classList.add("category");
newSource[0].appendChild(newCategory);
}

//function to auto refresh quote
setInterval(function(){  
printQuote();
}, 5000);

//event listener on button
let button= document.getElementById('loadQuote');
button.addEventListener("click", (printQuote),false,  {
});

