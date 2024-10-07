const backgroundContainer = document.querySelector(".container");
const popUpBtnOpen = document.querySelector(".pop-up-btn-open");
const popUpBtnClose = document.querySelector(".pop-up-btn-close");
const modal1 = document.querySelector('.modal1');

const modal2 = document.querySelector('.modal2');
const openMessageBox = document.querySelector(".open-message-box");
const messageBtnClose = document.querySelector('.close-message-box');

popUpBtnOpen.addEventListener('click',(e)=>{
    modal1.style.transform = `translate(-50%,-50%)`;
    modal1.style.top = `50%`;
    backgroundContainer.classList.add("modal-open"); // Add overlay effect
    
    // close modal-1 after 5sec
    setTimeout(closePopUp, 5000)
})
function closePopUp (){
    modal1.style.transform = `translate(-50%,-50%)`;
    modal1.style.top = `-50%`;
    backgroundContainer.classList.remove("modal-open"); // Add overlay effect
}
window.addEventListener("click",(e)=>{
    if(e.target === backgroundContainer){
        closePopUp();
    }
})
// Close Modal 1 on button click
popUpBtnClose.addEventListener("click",closePopUp)


// Model - 2
function closeMessageBox (){
    modal2.style.display = "none";
    backgroundContainer.classList.remove("modal-open");

}
// Open Modal 2 on button click
openMessageBox.addEventListener("click",()=>{
    modal2.style.display = "block";
    modal2.style.transform = `translate(-50%,-50%)`;
    backgroundContainer.classList.add("modal-open");
})

// Close Modal 2 when clicking outside the modal (on the container)
messageBtnClose.addEventListener("click",closeMessageBox)
window.addEventListener("click",(e)=>{
    if(e.target === backgroundContainer){
        closeMessageBox();
    }
})