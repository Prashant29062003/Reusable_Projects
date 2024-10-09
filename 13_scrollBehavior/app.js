const usersList = document.querySelector(".users-list");
const loader = document.querySelector(".loader");
const dots = document.querySelector(".dots");
const scrollTopToBottom = document.querySelector(".scroll-top-to-bottom");
const scrollBottomToTop = document.querySelector(".scroll-bottom-to-top");

function dotCreation(dots){
    setTimeout(()=>{
        dots.innerHTML += ".";
        setTimeout(()=>{
            dots.innerHTML += ".";
            setTimeout(()=>{
                dots.innerHTML += "."
            },500)
        },500)
    },500)
}

dotCreation(dots);
function showLoader(){
    loader.style.display = "block";
}
function removeLoader(){
    loader.style.display = "none";
}
async function fetchUsersList(){
    try {
        const response = await fetch("https://dummyjson.com/users", {
            method: "GET"
        })
        const result = await response.json();

        if(result && (loader.style.display === "block")){
            showLoader();
        }else{
            removeLoader();
        }
        showUsersData(result.users);
    } catch (error) {
        console.log("Error :: ",error);
    }
}
fetchUsersList();
function showUsersData(usersData){
    usersData.map((user)=>{
        const listitem = document.createElement("li");
        listitem.classList.add("user-data");
        const childDiv = document.createElement("div");
        childDiv.classList.add("user-profile-name");
        const userName = document.createElement("p");
        const userImage = document.createElement("img");
        userImage.src = user.image;
        userName.textContent = `${user.firstName} ${user.lastName}`; 
        childDiv.appendChild(userImage);
        childDiv.appendChild(userName);
        listitem.appendChild(childDiv);
        usersList.appendChild(listitem);
    })
}

// top => bottom
scrollTopToBottom.addEventListener("click",()=>{
    const specifiedHeight = document.body.scrollHeight;
    window.scrollTo({
        top: specifiedHeight,
        behavior: "smooth"
    })
})

// bottom => top
scrollBottomToTop.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})