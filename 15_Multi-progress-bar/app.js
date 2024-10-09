const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const progress = document.querySelector(".progress");
const iconWrapper = document.querySelectorAll(".icon-wrapper");
let progressVal = 1;
nextBtn.addEventListener("click",()=>{
    if(progressVal < iconWrapper.length){
        progressVal++;
    }
    handleUpdateStep();
})
prevBtn.addEventListener("click",()=>{
    if(progressVal > 1){
        progressVal--;
    }
    handleUpdateStep();
})

function handleUpdateStep(){
    iconWrapper.forEach((item,index)=>{
        if(index<progressVal){
            item.classList.add("active");
        }else{
            item.classList.remove("active");
        }
    })

    progress.style.width = ((progressVal - 1) / (iconWrapper.length - 1)) * 100 + "%";

    if(progressVal === 1){
        prevBtn.disabled = true;
    }else if(progressVal === iconWrapper.length){
        nextBtn.disabled = true;
    }else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}