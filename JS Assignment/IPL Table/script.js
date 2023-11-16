const url = "https://my-json-server.typicode.com/FreSauce/json-ipl/data"

async function initial(){
  const response = await fetch(url);
  const data = await response.json();
  let nrrData = data.sort((a,b)=>{
    return a.NRR - b.NRR
  })
  let table = document.querySelector("tbody");
  for(let obj of nrrData){
    let tr = document.createElement('tr');
    Object.keys(obj).forEach(element=>{
        let td = document.createElement("td");
        td.innerHTML = obj[element];
        tr.appendChild(td);
    })
    table.appendChild(tr);
  }
    
}
initial()