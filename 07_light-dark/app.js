const themeBtn = document.querySelector(".themeBtn");
const mainContainer = document.querySelector(".container");

themeBtn.addEventListener("click",()=>{
    if(mainContainer.getAttribute("data-theme") === "light"){
        mainContainer.setAttribute("data-theme", "dark");
    }else{
        mainContainer.setAttribute("data-theme", "light");
        
    }
})