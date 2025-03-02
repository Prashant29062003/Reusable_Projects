(function(){
    
    const playSound = (e)=>{
        const audio = document.querySelector(`audio[data-key="${String (e.key)}"]`);
        const key = document.querySelector(`.key[data-key="${String (e.key)}"]`);
        // console.log(audio);
        // console.log(e.key);
        if(!audio) return  // stop the function from removing all together 
        audio.currentTime = 0;  // rewind the start
        audio.play();
        key.classList.add("playing");

    }
    const playWithMouse = (e)=>{
        // console.log(e.target.parentNode);
        e.target.parentNode.classList.add("playing");
        playSound()

    }
    

    function removeTransition(e){
        if(e.propertyName !== "transform") return //skip it if it's not a transform
        this.classList.remove("playing")
        // console.log(this);
    }

    const keys = document.querySelectorAll(".key");
    keys.forEach((key)=>{
        key.addEventListener('click', playWithMouse)
        key.addEventListener("transitionend", removeTransition)
    })
    
    window.addEventListener("keydown", playSound)
})();