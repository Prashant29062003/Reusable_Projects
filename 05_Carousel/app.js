let slider = document.querySelector(".slider");
let dotsContainer = document.querySelector(".dots-container");

async function fetchListOfItems() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10"
    );
    const dataImages = await response.json();

    // console.log(dataImages);
    displayData(dataImages);
  } catch (error) {
    throw new Error("Error :: ", error.message);
  }
}

function displayData(dataImages) {
  slider.innerHTML = dataImages
    .map(
      (image) =>
        `
        <div class="image-slide">
            <img src='${image.download_url}'/>    
        </div>
    `
    )
    .join(" ");
  dotsContainer.innerHTML = dataImages
    .map(
      (image, index) =>
        `
          <span class="dot ${
            index === 0 ? "active" : ""
          }" data-slide="${index}"></span>
        `
    )
    .join(" ");
}
fetchListOfItems();

// Slider functionality begins

setTimeout(() => {

  const slides = document.querySelectorAll(".image-slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentSlide = 0;


  function activeDot(slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dotItem) => dotItem.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  }

  function changeCurrentSlide(currentSlide) {
    slides.forEach((slideItem, index)=>{
        slideItem.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    })
  }
  changeCurrentSlide(currentSlide);

  nextBtn.addEventListener("click", (e) => {
    currentSlide++;

    if (currentSlide > slides.length - 1) {
      currentSlide = 0;
    }
    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });
  prevBtn.addEventListener("click", (e) => {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsContainer.addEventListener("click",(event)=>{
    if(event.target.closest(".dot")){
        // console.log(event.target.classList, event.target.dataset);
        currentSlide = parseInt(event.target.dataset.slide);
        changeCurrentSlide(currentSlide);
        activeDot(currentSlide);
    }
  })
}, 10000);


