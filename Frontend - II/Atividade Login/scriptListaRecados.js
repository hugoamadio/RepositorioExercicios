async function getRecados() {
    try {
        const getNotes = await api.get("https://restfy.onrender.com/getnote")
        const notesAPI = getNotes.data.data

        const verifyUserLogged = localStorage.getItem("Email")

        if (verifyUserLogged) {
            let notes = ``

            notesAPI.forEach(Object => {
                if(Object.email == verifyUserLogged){
                    notes += `<tr>
                                    <td>${verifyUserLogged}</td>
                                    <td>${Object.annotations}</td>
                              <tr>`
                }
            });

            document.getElementById('tableInsert').innerHTML = notes
        } else {
            window.location.href = "index.html"
        }
    } catch (error) {
        console.log("Erro na requisição: ", error)
    }
}


getRecados()

