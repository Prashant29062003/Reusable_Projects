document.addEventListener("DOMContentLoaded", function () {
  let colorBox = document.querySelector(".color-box");
  let hexValue = document.querySelector(".hex-value");
  let rgbValue = document.querySelector(".rgb-value");

  let rgbColorBox = document.querySelector(".rgb-color-box");
  let redRange = document.querySelector("#red-range");
  let greenRange = document.querySelector("#green-range");
  let blueRange = document.querySelector("#blue-range");
  let opacityRange = document.querySelector("#opacity-range");

  colorBox.addEventListener("click", function (e) {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      let randomColor = Math.floor(Math.random() * 16);
      hex += randomColor.toString(16);
    }
    if (e.target.closest(".hex-btn")) {
      hexValue.innerHTML = hex;
      colorBox.style.backgroundColor = `${hex}`;
    }
    if (e.target.closest(".hex-copy-btn")) {
      window.navigator.clipboard
        .writeText(hexValue.innerHTML)
        .then(() => {
          alert("Color Copied, " + hexValue.innerHTML);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  });

  function updateRGBcolor() {
    let red = redRange.value;
    let green = greenRange.value;
    let blue = blueRange.value;
    let opacity = opacityRange.value;

    let rgbColor = `rgba(${red},${green},${blue},${opacity})`;
    rgbColorBox.style.backgroundColor = rgbColor;
    rgbValue.innerHTML = rgbColor;
  }
  if (redRange && greenRange && blueRange) {
    redRange.addEventListener("input", updateRGBcolor);
    greenRange.addEventListener("input", updateRGBcolor);
    blueRange.addEventListener("input", updateRGBcolor);
    opacityRange.addEventListener("input", updateRGBcolor);
  }

  if(rgbColorBox){
    rgbColorBox.addEventListener("click", (e) => {
        if (e.target.closest(".rgb-btn")) {
          let red = Math.floor(Math.random() * 256);
          let green = Math.floor(Math.random() * 256);
          let blue = Math.floor(Math.random() * 256);
          let opacity = Math.random();
          redRange.value = red;
          greenRange.value = green;
          blueRange.value = blue;
          opacityRange.value = opacity;
    
          updateRGBcolor();
        }
        if (e.target.closest(".rgb-copy-btn")) {
          window.navigator.clipboard.writeText(rgbValue.innerHTML).then(()=>{
            alert(`color copied, ${rgbValue.innerHTML}`);
          }).catch((err)=>{
            alert(err)
          });
        }
      });
  }
});
