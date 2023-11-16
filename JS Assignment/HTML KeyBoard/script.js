let btns = document.querySelectorAll("button");
let preview = document.querySelector(".preview");
let inputText = ""
let body = document.querySelector("body");

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.textContent == 'space') {
            inputText += ' '
        } else {
            inputText += btn.textContent;
        }

        preview.textContent = inputText;

        if(inputText == 'forty two'){
            initial();
        }else{
            let quote = document.querySelector(".quote");
            if(quote){
                quote.remove();
            }
        }

    })
})

async function initial(){
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    let div = document.createElement("div");
    div.setAttribute('class','quote');
    div.textContent = data.content;
    body.appendChild(div);
}