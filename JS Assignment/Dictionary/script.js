const users = [
    { name: "Alice", age: 30, role: "Developer" },
    { name: "Bob", age: 25, role: "Designer" },
    { name: "Charlie", age: 32, role: "Manager" },
    { name: "David", age: 28, role: "Analyst" },
    { name: "Eva", age: 22, role: "Intern" }
];

const sortByName = document.getElementById('sortByName');
const sortByAge = document.getElementById('sortByAge');
const userList = document.getElementById('userList');

function display(useArray){
    userList.textContent = "";

    useArray.forEach(function(user){
     const li = document.createElement('li');
     li.textContent = user.name + " " + user.age + " " + user.role;
     userList.appendChild(li);
    })
}

display(users);

sortByName.addEventListener('click',function(){
    const names = users.slice().sort(function(a,b){
        return a.name.localeCompare(b.name);
    })
    display(names);
    userList.style.display = 'block';
})

sortByAge.addEventListener('click',function(){
    const ages = users.slice().sort(function(a,b){
        return a.age - b.age;
    })
    display(ages);
    userList.style.display = 'block'
})