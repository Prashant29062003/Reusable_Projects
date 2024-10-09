const qrTextInput = document.querySelector(".qr-text");
const generateQRCodeBtn = document.querySelector(".generate-qr-code-btn");
const qrCodeImg = document.querySelector(".qr-code-img");
const qrContainer = document.querySelector(".qr-container");
const errorMsgText = document.querySelector(".error-msg-text");

generateQRCodeBtn.addEventListener("click", () => {
  const text = qrTextInput.value.trim();
  if (text.length > 0) {
    fetch(`/generate_qr?text=${encodeURIComponent(text)}`)
      .then((response) => response.blob())
      .then((blob) => {
        const qrCodeUrl = URL.createObjectURL(blob);
        qrCodeImg.src = qrCodeUrl;
        qrContainer.style.display = "block";
        errorMsgText.textContent = "";
      })
      .catch((error) => {
        errorMsgText.textContent = "Failed to generate QR code!";
        qrContainer.style.display = "none";
        console.error(error);
      });
  } else {
    errorMsgText.textContent =
      "Please enter some text or URL to generate QR code!";
    qrContainer.style.display = "none";
  }
});
