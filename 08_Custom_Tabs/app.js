const container = document.querySelector(".container");
const tabBtn = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".content");

container.addEventListener("click",(e)=>{
    const currentId = e.target.dataset.id;
    
    if(currentId){
        tabBtn.forEach((btn)=>{
            btn.classList.remove("active");
        })
        e.target.classList.add("active");

        tabContents.forEach(tabContentItem =>{
            tabContentItem.classList.remove("active");
        })

        const activeContent = document.getElementById(currentId);
        activeContent.classList.add("active")
    }
})