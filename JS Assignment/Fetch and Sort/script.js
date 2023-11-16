const url = "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses";
const dataContainer = document.getElementById('data-container');
async function initial(){
    try{
    const response = await fetch(url);
    const data = await response.json();
    let priceSort = data.sort((a,b)=>{
        return a.ticketPrice-b.ticketPrice;
    })
    dataContainer.innerHTML = '';
    priceSort.forEach(bus=>{
      const discriptionDiv = document.createElement('div');
      discriptionDiv.setAttribute('class','description')
      discriptionDiv.textContent = JSON.stringify(bus);
      dataContainer.appendChild(discriptionDiv);
    })
     
    }catch(err){

    }
}
initial();