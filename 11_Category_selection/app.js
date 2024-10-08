const categories = {
    All: {
        "background-color": "yellow",
        "text-color": "black"
    },
    Men: {
        "background-color": "blue",
        "text-color": "#fff"
    },
    Women: {
        "background-color": "magenta",
        "text-color": "#fff"
    },
    Kids: {
        "background-color": "teal",
        "text-color": "#fff"
    }
};
const categoriesType = Object.keys(categories);
const content = [
    {
        id: "Men",
        label: "Men Shirt",
        brand: "Prashant's choice"
    },
    {
        id: "Men",
        label: "Men's Jacket",
        brand: "Winter Wear",
    },
    {
        id: "Men",
        label: "Men's Trousers",
        brand: "ClassicFit",
    },
    {
        id: "Men",
        label: "Men's Watch",
        brand: "TimeMaster",
    },
    {
        id: "Men",
        label: "Men's Sneakers",
        brand: "StreetStyle",
    },
    {
        id: "Women",
        label: "Women's Dress",
        brand: "FashionX",
    },
    {
        id: "Women",
        label: "Women's Skirt",
        brand: "Elegant Couture",
    },
    {
        id: "Women",
        label: "Women's Handbag",
        brand: "Luxury Leather",
    },
    {
        id: "Women",
        label: "Women's Heels",
        brand: "Glamorous Steps",
    },
    {
        id: "Kids",
        label: "Kid's T-shirt",
        brand: "Junior Fashion",
    },
    {
        id: "Kids",
        label: "Kid's Shorts",
        brand: "FunWear",
    },
    {
        id: "Kids",
        label: "Kid's Jacket",
        brand: "Little Explorer",
    },
    {
        id: "Kids",
        label: "Kid's Sneakers",
        brand: "TinyWalkers",
    }

];

const filterBtnsWrapper = document.querySelector('.filter-button-wrapper');
const categoryCardsWrapper = document.querySelector('.category-content');

function createCategories(){
    categoriesType.map((category)=>{
        const btnElem = document.createElement("button");
        btnElem.classList.add("category-btn");
        btnElem.textContent = category;
        btnElem.setAttribute("data-filter", category);

        filterBtnsWrapper.appendChild(btnElem);
    })
}
createCategories();
function createContent(){
    content.map((contentItem)=>{
        const divElem = document.createElement("div");
        divElem.classList.add("card", contentItem.id);
        divElem.textContent = contentItem.label;


        categoryCardsWrapper.appendChild(divElem);
    })
}
createContent();

const filterBtns = document.querySelectorAll(".category-btn");
const categoryCards = document.querySelectorAll(".card");

filterBtns.forEach((singleFilterBtnItem)=>{
    singleFilterBtnItem.addEventListener("click",(e)=>{
        const extractCurrentCategory = e.target.dataset.filter;

        filterCardsByCategory(extractCurrentCategory);
    })
})

const filterCardsByCategory = (item) =>{
    categoryCards.forEach((categoryItem)=>{
        const isShowAllCards = item.toLowerCase() === "all";
        const isItemFilterd = !categoryItem.classList.contains(item);

        if(isItemFilterd && !isShowAllCards){
            categoryItem.classList.add("hide");
        }else{
            categoryItem.classList.remove("hide");
        }
        if(categoryItem.classList.contains(item)){
            categoryItem.style.backgroundColor = categories[`${item}`]["background-color"];
            categoryItem.style.color = categories[`${item}`]["text-color"];
        }

        // if all category is selcted
        if(item.toLowerCase() === "all"){
            categoryItem.style.backgroundColor = "yellow";
            categoryItem.style.color = "#000";

        }
    })
}