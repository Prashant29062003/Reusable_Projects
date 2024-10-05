(function (){
    // all variables
    let starsContainer = document.querySelector(".stars");
    let totalStars = 5;
    let selectedRating = 0;
    let displayRating = document.querySelector(".numberOfStars");

    // Initialize stars
    function createStars(){
        for(let i = 0;i<totalStars;i++){
            let starElment = document.createElement("i");
            starElment.classList.add("fa-solid", "fa-star-o");
            starElment.dataset.rating = i+1;    // set rating 1 to 5
            starsContainer.appendChild(starElment);
        }
    }
    
    // highlights the stars
    function highlightStars(currentRating){
        let stars = document.querySelectorAll(".fa-solid");
        stars.forEach((star, index)=>{
            if(index<currentRating){
                star.classList.replace("fa-star-o", "fa-star"); //fill the stars
            }
            else{
                star.classList.replace("fa-star","fa-star-o");  //reset unselected stars
            }
        })
    }

    // Star-Hover effect
    function onStarHover(e){
        let hoverIndex = parseInt(e.target.dataset.rating);
        if(!isNaN(hoverIndex)) {
            return highlightStars(hoverIndex);
        }
    }

    // 
    function onStarOut(){
        highlightStars(localStorageRating);
    }

    function onStarSelected(e){
        selectedRating = parseInt(e.target.dataset.rating);
        displayRating.textContent = selectedRating;
        highlightStars(selectedRating);
    }

    // Event-Listning function using enevt delegation
    function attachEventListeners(){
        starsContainer.addEventListener("mouseover",(e)=>{
            if(e.target.classList.contains("fa-star-o") || e.target.classList.contains("fa-star")){
                onStarHover(e);
            }
        })

        starsContainer.addEventListener("mouseout",(e)=>{
            if(e.target.classList.contains("fa-star-o") || e.target.classList.contains("fa-star")){
                onStarOut();
            }
        })
        starsContainer.addEventListener("click",(e)=>{
            if(e.target.classList.contains("fa-star-o") || e.target.classList.contains("fa-star")){
                onStarSelected(e);
            }
        })
    }

    
    


    // main function
    function main(){
        createStars();
        attachEventListeners();
    }
    main();
})();