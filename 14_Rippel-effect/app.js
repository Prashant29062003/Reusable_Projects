const getAllButtons = document.querySelectorAll(".ripple-effect");

getAllButtons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        
        const xCoordinate = e.clientX - e.target.offsetLeft;
        const yCoordinate = e.clientY - e.target.offsetTop;

        let rippleElement = document.createElement("span");
        rippleElement.style.left = `${xCoordinate}px`;
        rippleElement.style.top = `${yCoordinate}px`;
        btn.appendChild(rippleElement);

        window.setTimeout(()=>{
            rippleElement.remove();
        },500)
    })
})