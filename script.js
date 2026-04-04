//your JS code here. If required.
const a=document.querySelector("#book-list");
let b=document.querySelector("#title");
let c=document.querySelector("#author");
let d=document.querySelector("#isbn");
const e=document.querySelector("#submit");

e.addEventListener("click",add_func);


function add_func(){
    a.innerHTML+=`<tr><td>${b.value}</td><td>${c.value}</td><td>${d.value}</td><td><button class="delete">*</button></td></tr>`;
}

document.getElementById('book-list').addEventListener('click', function(e) { if (e.target.classList.contains('delete')) { e.target.parentElement.parentElement.remove(); } });
