// navbar JS
const navbar = document.querySelector('.nav-container');
window.addEventListener("scroll", function(){
 navbar.classList.toggle("sticky", window.scrollY>0);
});

const btn = document.querySelector('.ham');
const menu =document.querySelector('.menu');
let isopen = false;
btn.addEventListener('click', nav);

function nav(){
    if(!isopen){
        isopen = true;
        btn.classList.add('open');
        menu.style.left = '0';
    }
    else{
        isopen=false;
        btn.classList.remove('open');
        menu.style.left = '-100em'; 
    }
}

