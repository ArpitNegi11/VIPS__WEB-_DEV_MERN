// console.log("Hello World!");
// const sum = require("./math")

// console.log(sum(20,40));

const fs = require("fs")

fs.writeFile("text.txt","kya haal chal",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("File created succesfully")
})

fs.appendFile("text.txt","sab thik hai bhaiii",(err)=>{
    if(err){
        console.log(err);
    }else{
        
        console.log("data append")
    }
})