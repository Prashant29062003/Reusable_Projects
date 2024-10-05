const accordionData = [
    {
        id: 1,
        question: "What is JavaScript?",
        answer: "JavaScript is a versatile, high-level programming language that is widely used for building web applications. It allows developers to implement complex features on web pages."
    },
    {
        id: 2,
        question: "What is React?",
        answer: "React is a popular JavaScript library for building user interfaces, especially for single-page applications. It allows developers to build reusable UI components."
    },
    {
        id: 3,
        question: "What is GSAP?",
        answer: "GSAP (GreenSock Animation Platform) is a powerful JavaScript library for creating high-performance animations, widely used for web development to animate elements smoothly."
    },
    {
        id: 4,
        question: "What is the difference between var, let, and const in JavaScript?",
        answer: "The `var` keyword declares variables globally or function-scoped, while `let` and `const` are block-scoped. `const` is used for variables that shouldn't be reassigned."
    },
    {
        id: 5,
        question: "What is an API?",
        answer: "An API (Application Programming Interface) is a set of rules that allows one piece of software to interact with another. It defines the methods and data formats that apps use to communicate."
    }
];

const accordionWrapper = document.querySelector(".accordion");


function createAccodionData(accordionData){
    accordionWrapper.innerHTML = accordionData.map((data)=>{
        return `<div class="accordion_item">
            <div class="accordion_title">
                <h3>${data.question}</h3>
                <i class="fa-solid fa-arrow-down"></i>
            </div>
            <div class="accordion_content">
                <p>${data.answer}</p>
            </div>
        </div>`
    }).join(" ")
}

createAccodionData(accordionData)

// let accordionTitles = document.querySelectorAll(".accordion_title");
// accordionTitles.forEach((accordionTitle) =>{
//     accordionTitle.addEventListener("click",function (e){
//         let content = e.target.nextElementSibling;
//         content.classList.toggle("display_answer");
//     })
// })

// Efficient way
// using event delegation to handle accordion title
accordionWrapper.addEventListener("click", function(e){
    if(e.target.closest(".accordion_title")){
        let tilte = e.target.closest(".accordion_title");
        let content = tilte.nextElementSibling;
        let icon = tilte.querySelector("i");

        content.classList.toggle("display_answer");
        icon.classList.toggle("icon_rotate");
    }
})
