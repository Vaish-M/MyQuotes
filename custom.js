
const quotes = [{
    quote: `"Create comfort zone and embrace with beautiful knowledge."`,
    writer: `– Vaishnavi M`
}, {
    quote: `"Beauty can't be measured by anyine.It is a treasureless gift."`,
    writer: `– Vaishnavi M`
}, {
    quote: `"The beauty of the moon will shine in the dark to make us glow."`,
    writer: `– Vaishnavi M`
}, {
    quote: `"Start your day with Your innocence.And end it with your maturity."`,
    writer: `– Vaishnavi M`
}, {
    quote: `"Life is like a bubble when and where it breaks,you never know."`,
    writer: `– Vaishnavi M`
}, {
    quote: `"Love is thatr blessing which is blessed from Mother's womb to Father's princess."`,
    writer: `– Vaishnavi M`
}, {
    quote: `"If you don't express ,be ready to be depressed."`,
    writer: `– Vaishnavi M`
}, {
    quote: `"A sky without birds is like a dream without hope."`,
    writer: `– Vaishnavi M`
}, {
    quote: `"A heart without feelings is like stone which is not useful to us."`,
    writer: `- Vaishnavi M`
}, {
    quote: `"The moon inspires me to be in dark and shine like a diamond."`,
    writer: `- Vaishnavi M`
}, {
    quote: `"A broken heart is similar to an apple which can change a colour but the taste remind forever."`,
    writer: `- Vaishnavi M`
},]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})



