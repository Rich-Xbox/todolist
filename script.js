// let input = document.querySelector(".inp")
// let button = document.querySelector(".send-btn")
// let dark_mode_button = document.querySelector(".dark-mode-btn")
// let ul = document.querySelector("ul")

// dark_mode_button.addEventListener("click", ()=>{
//     document.body.classList.toggle("dark-mode")
// })



// // button.addEventListener("click", function(){
// //     let li = document.createElement("li")
// //     li.innerHTML = input.value;
// //     ul.append(li)

// // })
// button.addEventListener("click", function(){
//     let li = document.createElement("li")
//     li.innerHTML = `<span>${input.value}</span> <button class="edit">Edit</button> <button class="delete">Delete</button>`       
//     ul.append(li)
// })


// ul.addEventListener("click", (e)=>{
//     console.log(e);
//     if(e.target.tagName = "SPAN"){
//         e.target.classList.toggle("clicked")
//     }
// })





let input = document.querySelector(".inp")
let button = document.querySelector(".send-btn")
let dark_mode_button = document.querySelector(".dark-mode-btn")
let ul = document.querySelector("ul")

dark_mode_button.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode")
    localStorage.setItem("ism", "Maxruz")
})



button.addEventListener("click", function(){
    let li = document.createElement("li")
    li.innerHTML = `<span>${input.value}</span> <button class="edit">Edit</button> <button class="delete">Delete</button>`
    ul.append(li)
    localStorage.setItem("Zametka",)
})


ul.addEventListener("click", (e)=>{
    console.log(e);
    if(e.target.tagName == "SPAN"){
        console.log();
        
        e.target.classList.toggle("clicked")
    }else if(e.target.className == "edit"){
        console.log("topdim");
        
        let yangi_text = prompt("yangi text yozing", e.innerHTML)
        e.target.previousElementSibling.innerHTML = yangi_text
    }else if(e.target.className = "delete"){
        e.target.parentElement.remove()
    }
})

// 1.Delete ni ishlatish kerak
// 2.refresh berganda o'chib ketmasaliki