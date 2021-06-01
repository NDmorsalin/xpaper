/* nav bar position sticky */
const navbar = document.querySelector('.nav_bar');
window.addEventListener('scroll',function(e){
    console.log(window.scrollY);
    if(window.scrollY >= 200){
        navbar.style.top = 0;
    }else{
        navbar.style.top= -(window.scrollY*.5) +'px';
    }
})

