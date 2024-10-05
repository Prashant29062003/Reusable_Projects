(function (){
    let stars = document.querySelector(".stars");
    let selectedRating = 0;
    let ratingDisplay =document.querySelector(".numberOfStars");

    for (let i = 0; i < 5; i++) {
        stars.innerHTML += `<i class="fa-solid fa-star"></i>`
    }
    let starIcons = document.querySelectorAll(".fa-star");
    starIcons.forEach((starIcon,index) =>{
        starIcon.addEventListener("mouseover",()=>{
            resetStars();
            for(let i = 0; i< index+1; i++){
                starIcons[i].style.color = "yellow";
            }
        })

        starIcon.addEventListener("mouseout",()=>{
            resetStars();
            if(selectedRating > 0){
                for(let i = 0; i < selectedRating; i++){
                    starIcons[i].style.color = "yellow"
                }
            }
        })

        starIcon.addEventListener("click",()=>{
            selectedRating = index +1
            ratingDisplay.innerHTML = selectedRating;
        })
    })

    function resetStars(){
        starIcons.forEach(starIcon =>{
            starIcon.style.color = "#fff";
        })
    }

})();