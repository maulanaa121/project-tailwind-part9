const btnHeader = document.getElementById("button-header")
const navLink = document.querySelector(".nav__link")
const header = document.querySelector("header")



btnHeader.addEventListener("click",function(){
    btnHeader.classList.toggle("is-active")
    navLink.classList.toggle("btn-active")
})

window.addEventListener('scroll',()=>{
    header.classList.toggle('blur-active',window.scrollY > 60)
})


// link active

const nav_items = document.querySelectorAll(".nav__item")
const sections = document.querySelectorAll("section")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")
    
        if(top >= offset && top < offset + height){
            nav_items.forEach(links => {
                links.classList.remove("nav-active");
                document.querySelector("ul li a[href*="+ id + "]").classList.add("nav-active")
                
            })
        }
    
    
    })
}