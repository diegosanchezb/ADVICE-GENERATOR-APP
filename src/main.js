
const diceBtn = document.querySelector('#diceBtn');
const advice = document.querySelector('#advice');
const adviceId = document.querySelector('#adviceId');

getAdvice()

diceBtn.addEventListener('click',()=>{
    
    getAdvice()

})

function getAdvice() {
    const id = Math.floor(Math.random()*100)+2;

    fetch(`https://api.adviceslip.com/advice/${id}`)
     .then(res=>res.json())
     .then(data => {
        const adviceMsg = data.slip.advice;
        advice.innerText = adviceMsg;
        adviceId.innerText = data.slip.id;
    })
    .catch(err => getAdvice())
}
