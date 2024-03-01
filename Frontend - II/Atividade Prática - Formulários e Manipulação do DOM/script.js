document.getElementById('form-primary').addEventListener('submit', function(event) {
    event.preventDefault()
    const nomeCompleto = document.getElementById('nameInput').value
    const endereco = document.getElementById('enderecoInput').value
    const cidade = document.getElementById('cityInput').value
    const estado = document.getElementById('estadoInput').value
    const cargo = document.getElementsByName('cargo')
    const interesse = document.getElementsByName('interesse')

    console.log(`Nome completo: ${nomeCompleto}`)
    console.log(`Endereço: ${endereco}`)
    console.log(`Cidade: ${cidade}`)
    console.log(`Estado: ${estado}`)

for (let index = 0; index < cargo.length; index++) {
    if(cargo[index].checked){
        console.log(`Cargo: ${cargo[index].value}`)
    }
}

interesse.forEach(function(checkbox) {
    if (checkbox.checked) {
        console.log("Interesse: ",checkbox.nextSibling.textContent.trim());
    }
});

})