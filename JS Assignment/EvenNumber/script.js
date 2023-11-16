const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');
const numbers = document.getElementById('numbers');

submitBtn.addEventListener('click',function(event){
    event.preventDefault()
   let input = numbers.value;
   const numArray = input.split(',').map(function(num){
        return Number(num.trim());
   });
   const evenNum = [];
   for(let i=0;i<numArray.length;i++){
        if(!isNaN(numArray[i]) && numArray[i] % 2 == 0){
            evenNum.push(numArray[i]);
        }
   }
   result.textContent = evenNum.join(', ');
})