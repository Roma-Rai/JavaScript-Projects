let input = document.querySelector("input");
let btn =  document.querySelector("button");
let ul = document.querySelector("ul");
// btn.addEventListener("click",async()=>{
//     let li =  document.createElement("li");
//     let del = document.createElement("button"); 
//     li.innerText =  input.value;
//     del.innerText = "delete"
//     ul.append(li);
//     ul.append(del);
//     del.addEventListener("click", async()=>{
//         li.innerText= "";
//         del.innerText="";
//     })
// })

function addTask(){
    if(input.value == ''){
        alert("you must write something!");
    }else{
        let li = document.createElement("li");
        li.innerText =  input.value;
        ul.append(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        // span.style.backgroundImage = "url('/Images/complete.png')";
        li.appendChild(span);
        // let btn = document.createElement("button");
        // btn.innerText="delete";
        // li.append(btn);
    }
    input.value = '';
    saveData();
}

ul.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",ul.innerHTML);
    }
function showTask(){
    ul.innerHTML = localStorage.getItem("data");
}
showTask();