let promise = new Promise((resolve , reject)=>{
    let num = Math.floor(Math.random()*2)

    if(num === 0){
        setTimeout(()=>{
            resolve("homework done")
        },2000)
    }else{
        setTimeout(()=>{
            reject("homework not done")
        },2000)
    }
})

// console.log(promise);


// promise.then((response)=>{
//     console.log(response);
//     console.log(promise);
// })

// .catch((error)=>{
//     console.log(error);
//     console.log(promise);

// })


async function sum(){
    try{
        // let a = 10
        // let b = 20
        // console.log(a+b);
        let result = await promise;
        console.log(result);
        console.log("hello");
        
    }catch(error){
        // console.log(error);
        console.error(error) 
    }
}

 sum()