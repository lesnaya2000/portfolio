document.querySelector(".top-bar-icon").onclick=function(){
document.querySelector("nav").classList.toggle("nav-open")
    
}
document.querySelector(".icon-close").onclick=function(){
    document.querySelector("nav").classList.toggle("nav-open")
        
    }
let sr= ScrollReveal({
    distance: "500px", 
    duration: 2000,
    reset: false
})
sr.reveal(".header_knight",{delay:500, origin:"bottom"})
sr.reveal(".header-link",{delay:500, origin:"bottom"})
let sr2= ScrollReveal({
    distance: "800px", 
    duration: 1500,
    reset: false
})
sr.reveal(".about",{delay:500, origin:"right"})
sr.reveal(".portfolio",{delay:500, origin:"right"})
sr.reveal(".stages",{delay:500, origin:"right"})

let prevscrollpos= window.scrollY
window.onscroll=function(){
    let carrentscrollpos=window.scrollY
    if(prevscrollpos>carrentscrollpos){
        document.getElementById("top-bar").style.top="0"
    }
    else{
         document.getElementById("top-bar").style.top="-70px"
    }
    prevscrollpos=carrentscrollpos
}