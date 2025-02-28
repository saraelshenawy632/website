let button=document.querySelectorAll('button');
let box=document.querySelector('.box');
let cart=document.querySelector('.div');
let h1=document.querySelector('h1');
let boxs=Array.from(document.querySelectorAll('.box'));























for(let i=0;i<boxs.length;i++){


button[i].addEventListener('click',function(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 2000
      });





})}



let list=document.getElementsByClassName('fa-solid fa-list');
let container=document.getElementById('cart')

function elementAppear(){
container.style.display='block';
}
function closeElement(){
container.style.display='none';
}
