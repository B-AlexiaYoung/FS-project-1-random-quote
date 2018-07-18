// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

let quote=[
    {
    quote = "Books have a unique way of stopping time in a particular moment and saying: Let’s not forget this",
    author= "Dave Eggers",
    category= "time"
    },
    {
        quote ="Here we are, trapped in the amber of the moment. There is no why",
        author ="Kurt Vonnegut",
        category ="time"
    },
    {
        quote = "Time is a game played beautifully by children",
        author = " Heraclitus",
        category = "time"
    },
    {
        quote = "The only true wisdom is in knowing you know nothing",
        author = "Socrates",
        category ="knowledge"
    },
    {
        quote = "Any fool can know. The point is to understand",
        author = "Albert Einstein",
        category ="knowledge"
    },
    {
        quote ="The eye sees only what the mind is prepared to comprehend",
        author = "Robertson Davies",
        category = "knowledge"
    },
    {
        quote = "We have to dare to be ourselves, however frightening or strange that self may prove to be",
        author = " May Sarton",
        category = "life"
    },
    {
        quote = "Life's under no obligation to give us what we expect",
        author ="Margaret Mitchell",
        category = "life"
    },
    {
        quote = "The most wasted of all days is one without laughter",
        author ="Nicolas Chamfort",
        category ="life"
    },  
    {
        quote = "If I can stop one heart from breaking, I shall not live in vain",
        author = " Emily Dickinson",
        category = "life"
    },
    {
        quote ="Biology gives you a brain. Life turns it into a mind",
        author =" Jeffrey Eugenides",
        category = "life"
    },

]
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

