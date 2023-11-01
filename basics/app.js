// Selection: 

// querySelector 
// querySelectorAll


let btn = document.querySelector('button');

// change text of button when clicked

// click


  btn.addEventListener("click", change)


  function change(){
    console.log("clicked")
    btn.innerText = "Clicked"
    btn.style.backgroundColor = "red"
  }



// chnage the value