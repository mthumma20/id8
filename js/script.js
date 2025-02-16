console.log("Starting script")

window.onload = function(){
    let username_val = sessionStorage.getItem("username")
    let pass_val = sessionStorage.getItem("password")

    if(username_val != "") {
        console.log("reading values for " + username_val)
        document.getElementById("welcome").innerText = "Hello " + username_val + "!"
    } else {
        document.getElementById("welcome").innerText = "Hello, you!"
    }
}

function goAccDetail(){
    username = document.getElementById("username").value
    password = document.getElementById("pw").value
    sessionStorage.setItem("username", username)
    sessionStorage.setItem("password", password)
    console.log("rcv vals" + username + password)
    window.location.href='account-details.html'
}