// validation codes for inputs

function loginUser(event) {
  event.preventDefault()
  const email = document.getElementsByName('email').value
  const password = document.getElementsByName('password').value

  console.log('USER DATA', email, password)
}
