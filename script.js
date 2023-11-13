fetch("https://api.adviceslip.com/advice").then(data => data.json())
.then(quotemain => {
    const quotes = quotemain.slip.advice;
    const ptag =document.getElementById("body");
    ptag.innerHTML = quotes;
    console.log(coindetails.slip.advice);
})