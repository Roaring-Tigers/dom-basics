const inputs = document.querySelectorAll('input');
const output = document.querySelector('.output');
const btn = document.querySelector('button');






// for(let t of inputs){
//     t.addEventListener("change", ()=>{
//         console.log(t.value)
//     } )
// }


btn.addEventListener('click', display);


function display(event){
    event.preventDefault();
    const data = []
    for(let t of inputs){
        data.push(t.value)
    }

    output.innerText = `Name: ${data[0]} \n Age: ${data[1]} \n Email: ${data[2]}`
  
    
}