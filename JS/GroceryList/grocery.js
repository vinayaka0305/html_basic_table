function calcTotal(){
    const fetch = fetchPriceElement();
    const totalPrice = sumOfAllElement(fetch);
    if(!toCheckGrandTotalrowExists()){
        const create = createNewElements(totalPrice);
        appendendGrandTotalRowToTable(create);
    }else{
        updateGrandTotalRow(totalPrice);
    }
}

function fetchPriceElement(){
    const selector = '[data-ns-test="price"]';
    const elements = document.querySelectorAll(selector);
    return elements;
}

function sumOfAllElement(elements){
    let sum = 0;
    for(let i=0;i<elements.length;i++){
        const amountInText = elements[i].innerText;
        const amount = Number(amountInText);
        sum += amount;
    }
    return sum;
}

function createNewElements(totalPrice){
    const row = document.createElement('tr');
    const coloumn1 = document.createElement('td');
    const coloumn2 = document.createElement('td');
    coloumn1.innerText = 'Grand Total';
    coloumn2.innerText = totalPrice;
    coloumn2.setAttribute('data-ns-test','grandTotal');
    row.appendChild(coloumn1);
    row.appendChild(coloumn2);
    return row;
}

function appendendGrandTotalRowToTable(grandTotalRow){
    const tbodyElement = document.getElementsByTagName('tbody');
    const tbodyElements = tbodyElement[0];
    tbodyElements.appendChild(grandTotalRow);
}

function updateGrandTotalRow(totalPrice){
    const selector = '[data-ns-test="grandTotal"]';
    const total = document.querySelector(selector);
    total.innerText = totalPrice;
}

function toCheckGrandTotalrowExists(){
    const selector = '[data-ns-test="grandTotal"]';
    const total = document.querySelector(selector);
    return total !== null; 
}