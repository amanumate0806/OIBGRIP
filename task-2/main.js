/*======= MENU SHOW Y HIDDEN =======*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')
/*====== menu show ===== */
/*====== validation if constant exists ====*/ 
if(navToggle){
navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
})
}

/*====== Menu Hidden =====*/
/* variable of constant exist */
if(navClose){
  navClose.addEventListener('click',() =>{
    navMenu.classList.remove('show-menu')
  })
}
