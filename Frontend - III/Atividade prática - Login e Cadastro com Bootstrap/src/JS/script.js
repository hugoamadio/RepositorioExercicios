const formLogin = document.getElementById('form-login')
const emailInput = document.getElementById('email-input').value
const passInput = document.getElementById('pass-input').value

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


formLogin.addEventListener('submit', (event) => {
    event.preventDefault()

    const emailInput = document.getElementById("email-input").value
    const passInput = document.getElementById("pass-input").value
    console.log(`Login: ${emailInput} e senha: ${passInput}`)
    api.post('/login', {
        email: emailInput,
        pass: passInput
      })
      .then(function (response) {
        console.log(response);
        appendAlert("Usúario Logado!!", "success")
      })
      .catch(function (error) {
        console.log(error);
        appendAlert("Ops, algo deu errado", "danger")
      });
})