function calcTotal() {
    const priceNodes = fetchPriceNode();
    const totalPrice = sumOfallPriceNodes(priceNodes);
    if(!checkGrandTotalExisits()){
     const grandTotalRow = createGrandTotalRow(totalPrice);
     appendGrandtotalRowToTable(grandTotalRow);
    }else{
        updateGrandTotalRow(totalPrice)
    }
}

function fetchPriceNode() {
    const selector = '[data-ns-test="price"]';
    const nodes = document.querySelectorAll(selector);
    //array of price node and length of this array as
    //per ex we have 4
    return nodes;
}
function sumOfallPriceNodes(nodes){
    let sum = 0;
    for(let i=0;i<nodes.length;i++){
        const priceText = nodes[i].innerText;
        const price = Number(priceText);//price in number
        sum += price; 
    }
    return sum;
}

function createGrandTotalRow(totalPrice){
    const row = document.createElement('tr');
    const coloumn1 = document.createElement('td');
    const coloumn2 = document.createElement('td');
    coloumn1.innerText ='Grand Total';
    coloumn2.innerText = totalPrice;
    coloumn2.setAttribute('data-ns-test','grandTotal')
    row.appendChild(coloumn1);
    row.appendChild(coloumn2);
    return row;
}

function appendGrandtotalRowToTable(grandTotalRow){
    const tbodyNodes = document.getElementsByTagName('tbody');
    const tbodyNode = tbodyNodes[0];
    tbodyNode.appendChild(grandTotalRow);
}

function updateGrandTotalRow(totalPrice){
    const selector = '[data-ns-test="grandTotal"]';
     const grandTotalNode = document.querySelector(selector);
     grandTotalNode.innerText = totalPrice;
}

function checkGrandTotalExisits(){
    const selector = '[data-ns-test = "grandTotal"]';
     const grandTotalNode = document.querySelector(selector);
     return grandTotalNode !== null;
}