export function handleRegister(username, password) {
  console.log(username, password)

    fetch("http://localhost:3000/register", {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "username": username,
      "password": password
    }),
    redirect: 'follow'
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
