let inputNumber = document.querySelector("#numbers");
let submitBtn = document.querySelector("#submitBtn");
let result = document.querySelector("#result");
let evenArr = [];
submitBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let num = inputNumber.value;
    let splitNums = num.split(',').map((eventNumbers)=>{
        return Number(eventNumbers);
    })
    for(let obj of splitNums){
        if(obj % 2 == 0){
            evenArr.push(obj);
        }
    }
    let display = evenArr.join(', ');
   return result.textContent = `The even numbers are: ${display}`
})