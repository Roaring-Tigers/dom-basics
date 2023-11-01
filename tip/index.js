const input = document.querySelector('input');
const output = document.querySelector('.output');
const btn = document.querySelector('button');




btn.addEventListener("click", ()=>{
       console.log("clicked")
       let value = input.value;
         let tip = value * 0.2;
         output.innerText = `Your tip is ${tip}`;
})

// function generateTip(){
//        console.log("clicked")
//        let value = input.value;
//          let tip = value * 0.2;
//          output.innerText = `Your tip is ${tip}`;
// }
