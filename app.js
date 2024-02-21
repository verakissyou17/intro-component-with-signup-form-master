const form = document.getElementById("form")
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  validateFirstName(firstNameValue)
  validateLastName(lastNameValue)
  validatePassword(passwordValue)
  validateEmail(emailValue)
})

function validateFirstName(inputValue) {
  const formControl = firstName.parentElement
  const small = formControl.querySelector("small")
  if (inputValue === "") {
    formControl.classList.add("error")
    small.textContent = "First Name cannot be empty"
  } else {
    formControl.classList.remove("error")
    small.textContent = ""
  }
}

function validateLastName(inputValue) {
  const formControl = lastName.parentElement
  const small = formControl.querySelector("small")
  if (inputValue === "") {
    formControl.classList.add("error")
    small.textContent = "Last Name cannot be empty"
  } else {
    formControl.classList.remove("error")
    small.textContent = ""
  }
}

function validatePassword(inputValue) {
  const formControl = password.parentElement
  const small = formControl.querySelector("small")
  if (inputValue === "") {
    formControl.classList.add("error")
    small.textContent = "Password cannot be empty"
  } else {
    formControl.classList.remove("error")
    small.textContent = ""
  }
}

function validateEmail(inputValue) {
  const formControl = email.parentElement
  const small = formControl.querySelector("small")

  if (inputValue === "") {
    formControl.classList.add("error")
    small.textContent = "Email Address is required"
  } else if (!testEmail(inputValue)) {
    formControl.classList.add("error")
    small.textContent = "Looks like this is not an email"
    email.value = "example@email.com"
    email.classList.add("email-error")
  } else {
    formControl.classList.remove("error")
    small.textContent = ""
  }
}
function testEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}
