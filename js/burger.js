const menuBtn = document.querySelector(".menu_btn");
const menu = document.querySelector(".dropdown_menu")
let menuOpen = false;

console.log("hello")
menuBtn.addEventListener('click', ()=>{
    
    if(!menuOpen){
        menuBtn.classList.add('open')
        menu.classList.add('open')
        menuOpen = true;
        
    }else{
        menuBtn.classList.remove('open');
        menu.classList.remove('open')
        menuOpen = false;
    }
})

document.addEventListener('scroll', ()=>{
    if(menuOpen){
        menuBtn.classList.remove('open');
        menu.classList.remove('open')
        menuOpen = false;
    }
})

