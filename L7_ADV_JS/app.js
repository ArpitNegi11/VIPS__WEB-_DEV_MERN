// let box = document.querySelectorAll("box");

// let box = document.getElementById("box")
// let firebox = document.getElementsByClassName("box")
// document.GET
// console.log(firebox);

// let para = document.querySelector("p")

// para.innerHTML = "hello bhaiyo <b>hello</b>"
// para.style.backgroundColor = "red"
// para.style.color = "white"
// console.log(para.classList.add());

let body = document.querySelector("body")
let btn = document.querySelector("button")
let img = document.createElement("img")
img.setAttribute("src","https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1Z2F0dGl8ZW58MHx8MHx8fDA%3D")

console.log(img)

btn.addEventListener("click",()=>{
    // body.classList.toggle("dark")
    body.appendChild(img)
})
