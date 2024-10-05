(function () {
    const starsContainer = document.querySelector(".stars");
    const ratingDisplay = document.querySelector(".numberOfStars");
    let selectedRating = 0;
    const totalStars = 5;

    // Initialize stars
    function createStars() {
        for (let i = 0; i < totalStars; i++) {
            const starElement = document.createElement("i");
            starElement.classList.add("fa-solid", "fa-star");
            starElement.dataset.index = i;
            starsContainer.appendChild(starElement);
        }
    }

    // Reset all stars to default color
    function resetStars() {
        const starIcons = starsContainer.querySelectorAll(".fa-star");
        starIcons.forEach(star => {
            star.style.color = "#fff"; // Default color
        });
    }

    // Highlight stars up to the hovered/selected index
    function highlightStars(index) {
        const starIcons = starsContainer.querySelectorAll(".fa-star");
        for (let i = 0; i <= index; i++) {
            starIcons[i].style.color = "yellow";
        }
    }

    // Handle star mouseover
    function onStarHover(e) {
        const hoverIndex = parseInt(e.target.dataset.index);
        resetStars();
        highlightStars(hoverIndex);
    }

    // Handle star mouseout
    function onStarOut() {
        resetStars();
        if (selectedRating > 0) {
            highlightStars(selectedRating - 1);
        }
    }

    // Handle star click
    function onStarClick(e) {
        selectedRating = parseInt(e.target.dataset.index) + 1;
        ratingDisplay.textContent = selectedRating;
        resetStars();
        highlightStars(selectedRating - 1);
    }

    // Attach event listeners using event delegation
    function attachEventListeners() {
        starsContainer.addEventListener("mouseover", (e) => {
            if (e.target.classList.contains("fa-star")) {
                onStarHover(e);
            }
        });

        starsContainer.addEventListener("mouseout", (e) => {
            if (e.target.classList.contains("fa-star")) {
                onStarOut();
            }
        });

        starsContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("fa-star")) {
                onStarClick(e);
            }
        });
    }

    // Initialize the component
    function init() {
        createStars();
        attachEventListeners();
    }

    // Call init to set up the star rating component
    init();
})();
