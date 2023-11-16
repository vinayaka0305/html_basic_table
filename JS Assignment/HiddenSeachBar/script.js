// javascript code goes here
let btn = document.getElementById("search-btn");
let inputTag = document.getElementById("search-input");
let searchBar = document.getElementById("searchbar");

inputTag.style.width = "0px"
searchBar.style.width ="100px"

btn.addEventListener('click',function(){
        inputTag.style.width = "300px"
        searchBar.style.width = "400px"
        btn.style.width="100px"
    inputTag.focus();
})