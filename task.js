let btn = document.querySelector("button")

btn.addEventListener("click",()=>{
    let body = document.querySelector("Body")
    let img = document.createElement("img")
    img.setAttribute("src","https://images.unsplash.com/photo-1635975229704-0a420e777a56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVnYXR0aXxlbnwwfHwwfHx8MA%3D%3D")

    let top = Math.random()*90
    let left = Math.random()*90
    img.style.position="Absolute";
    img.style.top= `${top}%`
    img.style.left= `${left}%`
    img.setAttribute("height","200px")
    // img.style.height = "200px";
    console.log(img);
    
    body.appendChild(img)
})