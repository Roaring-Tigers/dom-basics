
const btns = document.querySelectorAll('button');
const output = document.querySelector('.output');


console.log(btns);


// btns[0].addEventListener()

// btns[1].addEventListener()


for(let t of btns){
    t.addEventListener("click", toss)
}


let userScore = 0
let computerScore = 0

function toss(event){
    // console.log(event.target.innerText);
    let user_selection = event.target.innerText;

    // lets do our own toss:
    let arr = ['Head', 'Tail'];
    let randomIndex = parseInt(Math.random()*2)
    let toss__result = arr[randomIndex];

   if(user_selection === toss__result){
       userScore++;
    }
   else{
        computerScore++;
    }

    output.innerHTML = `
    <span> My Score :  ${userScore}</span>
    <br/>
    <span> Computer Score :  ${computerScore}</span>
    `
      


}