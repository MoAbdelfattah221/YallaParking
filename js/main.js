// Burger Function
let icon = document.querySelector(".icon");
let menu = document.querySelector(".menu");
icon.onclick = () => {
    menu.classList.toggle("active");
};

// To-Top Function
let toTop = document.querySelector(".to-top");
window.onscroll = () => {
    if(this.scrollY >= 600){
        toTop.classList.add("show");
    }else{
        toTop.classList.remove("show");
    }
}
toTop.onclick = () => {
    window.scrollTo(0,0);
}