var count = 0;
var userName = false;
var email = false;
var server = false;
var password = false;
var college = false;
var switchDetails = false;

function onChangeHandler(event){
    if(event.target.id == "username-input"){
        if(event.target.value){
            userName = true;
            count++;
        }else{
            userName = false;
            count--;
        }
    }

    if(event.target.id == "email-handler-input"){
        if(event.target.value){
            email = true;
            count++;
        }else{
            email = false;
            count--;
        }
    }

    if(event.target.id == "server-input"){
        if(event.target.value){
            server = true;
            count++;
        }else{
            server = false;
            count--;
        }
    }

    if(event.target.id == "password-input"){
        if(event.target.value){
            password = true;
            count++;
        }else{
            password = false;
            count--;
        }
    }

    if(event.target.id == "college-input"){
        if(event.target.value){
            college = true;
            count++;
        }else{
            college = false;
            count--;
        }
    }

    if(event.target.id == "conditions-input"){
        if(event.target.checked){
            switchDetails = true;
            count++;
        }else{
            switchDetails = false;
            count--;
        }
    }

     document.getElementById('progress-bar-new').style.width = (count * 100)/6 + "%";

    if(userName && email && server && password && college && switchDetails){
        document.getElementById('submit-button').disabled = false;
    }else{
          document.getElementById('submit-button').disabled = true;
    }
   
}