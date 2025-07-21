// const btn = document.querySelector("button")

// btn.addEventListener("click",()=>{
//     let parent = btn.parentElement
//     console.log(parent);

//     parent.style.height = "100px"
//     parent.style.width = "100px"
//     parent.style.backgroundColor = "green"
    
// })

// const list = document.querySelector(".list")

// list.addEventListener("click",()=>{
//     // console.log(list.children);
//     // console.log(list.firstElementChild);
//     // console.log(list.lastElementChild);
//     // console.log(list.firstChild);
//     // console.log(list.lastChild);

//     // console.log(list.nextElementSibling);
//     // console.log(list.previousElementSibling);
// })
const list = document.querySelector(".list")
const hyper = document.querySelector("a")
const source = document.querySelector("img")

list.addEventListener("click",()=>{
    console.log(list.id);
    console.log(source.src);
    console.log(hyper.href);
    
})
