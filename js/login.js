let userName = prompt("Enter username");
let password = prompt("Enter your password");

const login = {
  username: userName,
  password: password
}

const loginURL = `http://localhost:8080`;

async function tryLogin() {
  
  await fetch(loginURL + "/login", {
    method: "POST",
    body: JSON.stringify(login),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  }).then((response) => response.json()).then((data) => {
    console.log(data)

    if (data === false) {
      window.location.replace("http://127.0.0.1:5500/index.html");
    }

  })

}

tryLogin();