import './style.css'
import {handleRegister} from '/register'
import {handleLogin} from '/login'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Register a new account</h1>
    <label for="username">username</label>
    <input type="text" id="username">
    <label for="password">password</label>
    <input type="password" id="password">
    <button id="submit-register">Register New User</button>
    <button id="submit-login">Login Existing User</button>
  </div>
`

document.querySelector('#submit-register').addEventListener('click', () => {
  const username = document.querySelector('#username').value
  const password = document.querySelector('#password').value
  handleRegister(username, password)
})

document.querySelector('#submit-login').addEventListener('click', () => {
  const username = document.querySelector('#username').value
  const password = document.querySelector('#password').value
  handleLogin(username, password)
})

