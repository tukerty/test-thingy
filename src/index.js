import IMask from 'imask';

import 'Styles/index.scss'
import 'Images/logo.png'


let loginButton = document.getElementsByClassName('login-button')[0]

// Handling all phone fields on page
let phone = document.getElementsByClassName('text-input_phone')[0]
let phoneField = phone.getElementsByClassName('text-input__field')[0]
let phoneMask = IMask(phoneField, {
    mask: '{8} (000) 000-00-00'
})

phoneField.addEventListener('input', (e) => {
    loginButton.disabled = true
    phoneField.parentNode.classList.remove('text-input_error', 'text-input_success')
    // fixing Safari not-firing-event bug
    if (phoneField.value.length == 17) {
        phoneField.parentNode.classList.add('text-input_success')
        if (passwordField.value.length >= 5) {
            loginButton.disabled = false
        }
        else{
            loginButton.disabled = true
        }
    }
})

phoneField.addEventListener('change', (e) => {
    switch (phoneField.value.length) {
        case 17:
            phoneField.parentNode.classList.add('text-input_success')
            break;
        case 0:
            phoneField.parentNode.classList.remove('text-input_success', 'text-input_error')
            break;
        default:
            phoneField.parentNode.classList.add('text-input_error')
            break;
    }
})

// Handling all password fields on page
let password = document.getElementsByClassName('text-input_password')[0]
let passwordField = password.getElementsByClassName('text-input__field')[0]

passwordField.addEventListener('input', (e) => {
    passwordField.parentNode.classList.remove('text-input_error', 'text-input_success')
    if (phoneField.value.length == 17 && passwordField.value.length >= 5) {
        loginButton.disabled = false
    }
    else{
        loginButton.disabled = true
    }
})

passwordField.addEventListener('change', (e) => {
    if (passwordField.value.length >= 5) {
        passwordField.parentNode.classList.add('text-input_success')
    } else if (passwordField.value.length != 0) {
        passwordField.parentNode.classList.add('text-input_error')
    }
})

let modalForm = document.getElementsByClassName('modal__form')[0]
modalForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let payload = {
        phone: phoneField.value,
        password: passwordField.value
    }
    fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify(payload)
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
})
