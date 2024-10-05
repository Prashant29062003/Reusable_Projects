let postsListContainer = document.querySelector(".posts-list-container");

// fetch using XHR

function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      displayData(xhr.response);
    } else {
      console.log("Some Error Occurred.");
    }
  };
}

// fetch using fetch API
function fetchUsingFetchmethod() {
  const fetchData = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  fetchData
    .then((response) => response.json())
    .then((data) => displayData(data))
    .catch((e) => console.log(e));
}

// fetch using async await
async function fetchUsingAsyncAwaitMethod(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    const postsData = await response.json();
    displayData(postsData);
}

// using helper method to provide 
function helperMethod(method, url){
    const promise = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = "json";
        xhr.send();

        xhr.onload = () =>{
            if(xhr.status === 200){
                resolve(xhr.response);
            }else{
                reject(xhr.response)
            }
        }
    })
    return promise
}

async function fetchUsingXHRandAsyncAwait(){
    const response = await helperMethod("GET","https://jsonplaceholder.typicode.com/posts")
    displayData(response)
}

function displayData(posts) {
  postsListContainer.innerHTML = posts
    .map(
      (postItem) =>
        `
        
        <div class="postItem" id="postItem-${postItem.id}">
            <h3>&#8212; ${postItem.title}</h3>
            <p>${postItem.body}</p>
        </div>`
    )
    .join(" ");
}


// fetchUsingXHR();
// fetchUsingFetchmethod();
// fetchUsingAsyncAwaitMethod();
fetchUsingXHRandAsyncAwait();