const paginationListWrapper = document.querySelector(".pagination-list");

function createDummyData(){
    for (let i = 1; i <= 100; i++) {
        const liElem = document.createElement("li");
        liElem.classList.add("list-item")
        liElem.textContent = `card ${i}`;
        paginationListWrapper.appendChild(liElem);
    }
}
createDummyData();

let paginationLimit = 10;
let pageCount = Math.ceil(extractAllListItem.length/paginationLimit)

const extractAllListItem = document.querySelectorAll(".list-item")
console.log(extractAllListItem);

function createPageNumber(getCurrentIndex){
    
}

function createPaginationNumbers(){
    for(let i = 0;i<pageCount;i++){
        createPageNumber()
    }
}   
createPaginationNumbers()