var innerCard = document.getElementById('row-inner-card')
const inputSearch = document.getElementById('search-input')

const impressPeoples = async () => {
    await api.get('/v1/people')
        .then(function (res) {
            const peopleList = res.data
            peopleList.forEach(people => {
                innerCard.innerHTML += `
                    <div class="col-4 mb-5 d-flex justify-content-center">
                            <div class="card" style="width: 25rem; height: 36rem;">
                                <img src="${people.avatar}" class="card-img-top" alt="Card Peoples">
                                <div class="card-body d-flex flex-column">
                                <h5 class="card-title align-self-center">${people.name}</h5>
                                <p class="mb-0 mt-3"> <strong>#${people.id} </p></strong>
                                <p class="mb-0"> Last Name: ${people.last_name}</p>
                                <p class="mb-0"> Phone: ${people.phone}</p>
                                <p class="mb-0"> Create: ${people.createdAt}</p>
                                <p> </p>
                                </div>
                            </div>
                    </div>
                `
            });
        })
        .catch(function (error) {
            console.error(error);
        })
}

inputSearch.addEventListener('input', function (event) {
    const inputValue = inputSearch.value.toLowerCase()
    api.get(`/v1/people`)
        .then(function (res) {
            innerCard.innerHTML = ""
            const peopleListSearch = res.data
            peopleListSearch.forEach(people => {
                const name = people.name.toLowerCase()
                if(name.includes(inputValue)){
                    innerCard.innerHTML += `
                    <div class="col mb-5 d-flex justify-content-center">
                            <div class="card" style="width: 25rem; height: 36rem;">
                                <img src="${people.avatar}" class="card-img-top" alt="Card Peoples">
                                <div class="card-body d-flex flex-column">
                                <h5 class="card-title align-self-center">${people.name}</h5>
                                <p class="mb-0 mt-3"> <strong>#${people.id} </p></strong>
                                <p class="mb-0"> Last Name: ${people.last_name}</p>
                                <p class="mb-0"> Phone: ${people.phone}</p>
                                <p class="mb-0"> Create: ${people.createdAt}</p>
                                <p> </p>
                                </div>
                            </div>
                    </div>
                `
                }              
            });
        })
        .catch(function (error) {
            console.error(error)
        })
})

impressPeoples()