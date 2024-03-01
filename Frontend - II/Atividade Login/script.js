async function validaLogin(emailInput, passInput) {
    try {
        const response = await api.get("https://restfy.onrender.com/getusers")
        const respondeData = response.data.data
        const indexUserRegister = respondeData.findIndex(val => val.email == emailInput)
        if (indexUserRegister !== -1) {
            if (passInput == respondeData[indexUserRegister].pass) {
                const logged = respondeData[indexUserRegister].idUser
                localStorage.setItem("Email", `${emailInput}`)
                window.location.href = "listaderecados.html"
            } else {
                const textProblemResponse = document.getElementsByClassName('textProblem')
                textProblemResponse[0].style.display = 'block'
            }
        } else {
            const textProblemResponse = document.getElementsByClassName('textProblem')
            textProblemResponse[0].style.display = 'block'
        }

    } catch (error) {
        console.log("Problemas durante a requisição: ${error}")
    }
}


function checkLogged(){
    console.log("Teste")
}


document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault()
    const emailInput = document.getElementById('emailInput').value
    const passInput = document.getElementById('passInput').value
    const rememberInput = document.getElementById('remember')
    validaLogin(emailInput, passInput)
    if(rememberInput.checked){
        checkLogged()
    }
})