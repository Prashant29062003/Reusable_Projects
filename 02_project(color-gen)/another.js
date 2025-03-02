const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
function generateColor (){
    let hexColor = "#";
    for (let i = 1; i <= 6; i++) {
        let randomHexNumber = Math.floor(Math.random() * 16) + 1;
        hexColor += randomHexNumber.toString(16);
    }
    return hexColor;
}

btn.addEventListener("click",()=>{
    const hexValue = generateColor();
    color.innerHTML = `${hexValue}`;
    document.body.style.backgroundColor = `${hexValue}`;
})
