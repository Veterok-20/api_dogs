const dogs = document.querySelector('#dogs ul')
const getDogInput = document.querySelector('#getDogInput')
const getDogBtn = document.querySelector('#getDogBtn')
const dogInfo = document.querySelector('#dogInfo')

fetch('http://localhost:3000/api/dog').then((response) => {
    if (response.ok) {
        return response.json()
    }
}).then((dogsArray) => {
    let resultHtml = ''
    dogsArray.forEach((item) => {
        resultHtml += `<li>${item.id} ${item.name} ${item.breed} ${item.age}</li>`
    });
    dogs.innerHTML = resultHtml
})

getDogBtn.addEventListener('click', function(event) {
    const dogId = getDogInput.value
    fetch(`http://localhost:3000/api/dog/${dogId}`).then((response) => {
        if (response.ok) {
            return response.json()
        }
    }).then((dog) => {            
            dogInfo.innerHTML = `${dog.id} ${dog.name} ${dog.breed} ${dog.age}`
    })
})    


// Добавление собаки
const addForm = document.querySelector('#addForm')
const addDogName = document.querySelector('#addDogName')
const addDogBreed = document.querySelector('#addDogBreed')
const addDogAge = document.querySelector('#addDogAge')
const addDogBtn = document.querySelector('#addDogBtn')

addForm.addEventListener('submit', function (event) {
         event.preventDefault()
         fetch('http://localhost:3000/api/dog/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify({
                name: addForm[0].value,
                breed: addForm[1].value,
                age: addForm[2].value,
            })

})

})
