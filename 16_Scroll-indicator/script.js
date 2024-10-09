const addMore = document.querySelector(".add-more");
const recipesContainer = document.querySelector(".recipes-container");
const progressBar = document.querySelector(".progress-bar");

let recipiesLimit = 10;
let currentSkip = recipiesLimit;

// async function fetchData(recipiesLimit,currentSkip){
//    try {
//         const response = await fetch(`https://dummyjson.com/recipes?limit=${recipiesLimit}&skip=${currentSkip}`);
//         const recipesData = await response.json();

//         // console.log(recipesData.recipes);
//         if(recipesData && recipesData.recipes) showRecipes(recipesData.recipes)
//    } catch (error) {
//     console.error(error)
//    }
// }
function fetchData(recipiesLimit,currentSkip){
    fetch(`https://dummyjson.com/recipes?limit=${recipiesLimit}&skip=${currentSkip}`,{
        method: "GET",
    })
    .then((response=> response.json()))
    .then((result)=> {
        showRecipes(result.recipes);
    })
    .catch((error)=> console.error(error))

}

fetchData(recipiesLimit,currentSkip);

addMore.addEventListener("click",()=>{
    currentSkip += recipiesLimit;
    fetchData(recipiesLimit,currentSkip);
})

function showRecipes(recipesData){
    recipesData.forEach((recipe)=>{
        const recipeCard = document.createElement("div");
        const recipeImg = document.createElement("img");
        const recipeName = document.createElement("p");
        const divElem = document.createElement("div");
        const rating = document.createElement("span");
        const review = document.createElement("span");

        recipeCard.classList.add("recipe-card");
        recipeName.classList.add("recipe-name");
        divElem.classList.add("recipe-rating-data");
        

        recipeImg.src = recipe.image;
        recipeName.textContent = recipe.name;
        rating.textContent = recipe.rating;
        review.textContent = recipe.reviewCount;

        divElem.appendChild(rating);
        divElem.appendChild(review);
        recipeCard.appendChild(recipeImg);
        recipeCard.appendChild(recipeName);
        recipeCard.appendChild(divElem);
        recipesContainer.appendChild(recipeCard);
    })
}

window.onscroll = function(){
    handleScroll();
}

function handleScroll(){
    let getScrollFromTop = document.body.scrollTop || document.documentElement.scrollTop;
    let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let howMuchPercentageAlreadyScrolled = (getScrollFromTop/totalHeight) * 100;
    progressBar.style.width = `${howMuchPercentageAlreadyScrolled}%`
}