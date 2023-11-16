const button = document.querySelector(".mobile-nav-toggle");
const header = document.querySelector(".header");
const headerNav= document.querySelector(".nav-menu");
const headerIcons= document.querySelectorAll(".nav-menu>ul>li>a>i");
const headerLinks= document.querySelectorAll(".nav-menu>ul>li>a");


headerNav.addEventListener("click",(event)=>{
    headerLinks.forEach(element => {
            element.classList.remove("active");
            if(element.hash == event.target.hash){
                event.target.classList.add("active");
            }
            
    });
    if(window.innerWidth<1201){
        header.classList.remove("header-show");
        header.classList.add("header-hide");
        button.classList.remove("bi-x");
        button.classList.add("bi-list");
    }
    
});
onload = () =>{
    if(window.innerWidth<1201){
        header.classList.add("header-hide");
        header.style.transition = ".5s ease-in";
    }if(window.innerWidth>=1201){
        header.style.transition = null;
    }
};
onresize = (event) => {
    if(window.innerWidth>1201 && header.classList.contains("header-hide")){
        header.classList.remove("header-hide");
        header.classList.add("header-show");
    }
    if(window.innerWidth<1201 && header.classList.contains("header-show")){
        header.classList.add("header-hide");
        header.classList.remove("header-show");
        button.classList.remove("bi-x");
        button.classList.add("bi-list");
    }

};

button.addEventListener("click", (event) =>{
    if(event.target.classList.contains("bi-list")){
        event.target.classList.remove("bi-list");
        event.target.classList.add("bi-x");
        if(header.classList.contains("header-hide")){
            header.classList.remove("header-hide");
            header.classList.add("header-show");
        }
    }else{
        if(header.classList.contains("header-show")){
            header.classList.remove("header-show");
            header.classList.add("header-hide");
        }
        event.target.classList.remove("bi-x");
        event.target.classList.add("bi-list");
    }
  });