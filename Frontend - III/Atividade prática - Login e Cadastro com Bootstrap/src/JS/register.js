const formRegister = document.getElementById('register-form')
const emailInput = document.getElementById('input-email').value
const pass = document.getElementById('input-pass').value
const rePass = document.getElementById('input-re-pass').value

const alertPlaceholder = document.getElementById('alert')

const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)

    setTimeout(() => {
        wrapper.innerHTML = "";
      }, 3000);
  }

function validateRePass(pass, rePass) {
    if (pass != rePass) {
        return false
    }
    return true
}

formRegister.addEventListener('submit', function (event) {
    event.preventDefault()

    const emailInput = document.getElementById('input-email').value
    const pass = document.getElementById('input-pass').value
    const rePass = document.getElementById('input-re-pass').value

    if (validateRePass(pass, rePass)) {
        api.post('/singup', {
            email: `${emailInput}`,
            pass: `${pass}`
        })
            .then(function (response) {
                console.log(response.data);
                appendAlert('Usúario cadastrado com sucesso!', "success")
            })
            .catch(function (error) {
                console.log(error)
                appendAlert("Ops... algo aconteceu mal", "warning")
            })
    } else {
        appendAlert("Ops... As senhas não coincidem", "danger")
    }



})