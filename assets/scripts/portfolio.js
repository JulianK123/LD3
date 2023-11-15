const filterContainer = document.querySelector(".portfolio-filters>ul");
const galleryItems = document.querySelectorAll(".portfolio-item");

console.log(filterContainer);
filterContainer.addEventListener("click", (event) =>{
    
    if(event.target.classList.contains("filter-item")){
      // deactivate existing active ‘filter-item’
        filterContainer.querySelector(".filter-active").classList.remove("filter-active");
      // activate new ‘filter-item’
        event.target.classList.add("filter-active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) =>{
        if(item.classList.contains(filterValue) || filterValue === '*'){
            item.classList.remove("hide");
             item.classList.add("show");
        }
        else{
            item.classList.remove("show");
            item.classList.add("hide");
        }
         });
    }
  });