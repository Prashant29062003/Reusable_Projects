const productsContainer = document.querySelector(".products-container");
const loadBtn = document.querySelector('.load-btn');

async function fetchListOfProducts(productLimit) {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=${productLimit}`, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    if (data && data.products) displayProducts(data.products);
  } catch (error) {
    console.log("Error :: ", error);
  }
}

fetchListOfProducts(6);
function displayProducts(productList) {
    console.log(productList);
    productList.forEach((productItem)=>{
        const productItemWrapper = document.createElement("div");
        const productTitle = document.createElement("h4");
        const productThumbnail = document.createElement("img");
        const productDescription = document.createElement("p");
        const productPrice = document.createElement("p");

        productItemWrapper.classList.add("prodcut-item-wrapper")
        productTitle.classList.add("prodcut-title")
        productThumbnail.classList.add("prodcut-thumbnail")
        productDescription.classList.add("prodcut-description")
        productPrice.classList.add("prodcut-price")

        productTitle.textContent = productItem.title;
        productThumbnail.src = productItem.thumbnail;
        productDescription.textContent = productItem.description;
        productPrice.textContent = `$${productItem.price}`;
        productItemWrapper.appendChild(productThumbnail);
        productItemWrapper.appendChild(productTitle);
        productItemWrapper.appendChild(productDescription);
        productItemWrapper.appendChild(productPrice);

        productsContainer.appendChild(productItemWrapper);
    })
}

loadBtn.addEventListener("click",() => fetchListOfProducts(10))