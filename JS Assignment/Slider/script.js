const sizeSlider = document.getElementById("sizeSlider");
const currentSize = document.getElementById("currentSize");
const textContent = document.getElementById("textContent");
const textElement = textContent.querySelector("p");

function updateSize(){
    const newSize = sizeSlider.value;
    currentSize.innerHTML = `Current Size: ${newSize}px`;
    textElement.style.fontSize = `${newSize}px`;
}

sizeSlider.addEventListener('input',updateSize);
updateSize();