const searchBtn = document.getElementById('search-btn');
const inputValue = document.getElementById('inputValue');
const tableData = document.getElementById('centres');
const cityBtn = document.getElementById('cityBtn');
const stateBtn = document.getElementById('stateBtn');
const centerBtn = document.getElementById('centerBtn');
const dataContainer = document.getElementById('data-container');

const fetchData = async () => {
  let response = await fetch('https://isro.vercel.app/api/centres');
  let responseData = await response.json();
  responseData = responseData.centres
  return responseData;
}


async function bindingData() {
  let input = await fetchData();
  fetchtableData(input)
}

bindingData();


function fetchtableData(input) {
  // console.log(input)
  list = input.map(function (data) {
    return `<div class="card">
                <div class="heading">
                  <div>CENTER</div>
                  <div>CITY</div>
                  <div>STATE</div>
                </div>
            <div class="data">
              <div>${data.name}</div>
              <div>${data.Place}</div>
              <div>${data.State}</div>
            </div>
          </div>`
  })
  // console.log(list);
  dataContainer.innerHTML += list.join('');
}
async function displayData(type) {
  console.log(type);
  let input = inputValue.value.toLowerCase();
  dataContainer.innerHTML = '';
  let data = await fetchData();
  cityBtn.style.backgroundColor = "";
  centerBtn.style.backgroundColor = "";
  stateBtn.style.backgroundColor = "";
  let filerData = data.filter(function (data) {
    if (type == 'city' && input != "") {
      cityBtn.style.backgroundColor = "#89CFF0";
      return data.Place.toLowerCase().includes(input);
    } else if (type == 'center' && input != "") {
      centerBtn.style.backgroundColor = "#89CFF0";
      return data.name.toLowerCase().includes(input);
    } else if (type == 'state' && input != "") {
      stateBtn.style.backgroundColor = "#89CFF0";
      return data.State.toLowerCase().includes(input);
    }
  })
 
  // console.log(filerData)
  fetchtableData(filerData);
}




