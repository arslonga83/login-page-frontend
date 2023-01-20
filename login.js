import {getPageHtml} from '/page.js'

export function handleLogin(username, password) {
  console.log(username, password)

    fetch("http://localhost:3000/login", {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "username": username,
      "password": password
    }),
    redirect: 'follow'
    })
    .then(response => response.text())
    .then(result => {
      console.log(result)
      if (result === 'login successful') {
        document.querySelector('#app').innerHTML = getPageHtml()
        document.querySelector('#logout').addEventListener('click', () => {
          location.reload()
        })
      }
    })
    .catch(error => console.log('error', error));
  }
