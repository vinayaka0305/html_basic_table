function initial(){
    fetch("https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes").then((result)=>{
        return result.json();
    }).then((data)=>{
        bindingData(data)
    })
}
initial();

function bindingData(data){
    let parent = document.querySelector("#recipeList");
    data.forEach((ele)=>{
        let li = document.createElement("li");
        li.textContent = ele.title;
        li.addEventListener("click",()=>{
            document.querySelector("#recipeReadyInMinutes").textContent = `Ready in minutes:${ele.readyInMinutes}`
        })
        parent.appendChild(li);
    })
}