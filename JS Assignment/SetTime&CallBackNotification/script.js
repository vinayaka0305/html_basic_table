const notif1 = document.getElementById("notif1");
const notif2 = document.getElementById("notif2");
const notif3 = document.getElementById("notif3");
const notif4 = document.getElementById("notif4");
const finalMessage = document.getElementById("textContent")

function displayNotification(notification,delay){
    setTimeout(function(){
        notification.style.display = 'block'
    },delay)
}
    displayNotification(notif1,2000);
    displayNotification(notif2,4000);
    displayNotification(notif3,6000);
    displayNotification(notif4,8000);

setTimeout(function(){
    finalMessage.innerHTML = "All notifications displayed!"
},10000)

