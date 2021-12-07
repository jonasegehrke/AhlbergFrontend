let userName = prompt("Enter username");
let password = prompt("Enter your password");

if(userName !== "Admin" || password !=="Password"){
  window.location.replace("http://127.0.0.1:5500/index.html");
}