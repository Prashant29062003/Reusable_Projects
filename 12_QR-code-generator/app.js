import QRCode from "qrcode";

const qrCanvas = document.querySelector(".qr-canvas");
const qrTextInput = document.querySelector(".qr-text");
const generateQRCodeBtn = document.querySelector(".generate-qr-code-btn");
const errorMsgText = document.querySelector(".error-msg-text");

generateQRCodeBtn.addEventListener("click",()=>{

    validateInputField();
})

// function validateInputField(){
    
//     if(qrTextInput.value.trim().length > 0){
//         generateQRCode();
//     }else{
//         errorMsgText.textContent = `Please enter some text OR URL to generate QR-code!`
//     }
// }

function generateQRCode(){
    
    QRCode.toCanvas(qrCanvas, qrTextInput, function (error) {
        if (error) console.error(error)
        console.log('success!');
      })
    qrTextInput.value = "";
    errorMsgText.textContent = "";
}


// sample
// With promises
// QRCode.toDataURL('I am a pony!')
//   .then(url => {
//     console.log(url)
//   })
//   .catch(err => {
//     console.error(err)
//   })

// // With async/await
// const generateQR = async text => {
//   try {
//     console.log(await QRCode.toDataURL(text))
//   } catch (err) {
//     console.error(err)
//   }
// }

// using python 
