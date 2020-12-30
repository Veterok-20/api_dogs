const root = document.getElementById("root");

if (window.SSR) checkPathname();

window.onpopstate = function (event) {
  checkPathname();
};

function checkPathname() {
  const pathname = document.location.pathname;
  if (pathname === "/dogs/" || pathname === "/dogs") renderDogs();
  if (pathname === "/dogs/new") renderNewDog();
  if (pathname === "/dogs/remove") renderRemoveDog();
}

function redirect(event, id) {
  event.preventDefault();
  history.pushState({}, "", event.target.getAttribute("href"));
  if (id) renderDog(id)
  checkPathname();
}

function renderDogs() {
  fetch("/api/dog")
    .then((response) => response.json())
    .then((dogs) => {
      const list = dogs.reduce((acc, dog) => acc + 
      `<li><a onclick="redirect(event, ${dog.id})" href="/dogs/${dog.id}">${dog.name}</li>`, "");
      const template = `<ul>${list}</ul>
        <a onclick="redirect(event)" href="/dogs/new">Create a dog!!!</a><br> 
        <a onclick="redirect(event)" href="/dogs/remove">Remove a dog!!!</a>`;
      root.innerHTML = template;
      if (window.SSR) finishRender();
    });
}

function renderNewDog() {
  root.innerHTML = `<a onclick="redirect(event)" href="/dogs/">Back to the main page</a>
    <form id="create-dog" onsubmit='createDog(event)'action="/api/dog">
        <label>Name: <input name="name" type="text"></label>
        <label>Breed: <input name="breed" type="text"></label>
        <label>Age: <input name="age" type="text"></label>
        <button type="submit">Create</button>
    </form>`;
  if (window.SSR) finishRender();
}

function renderRemoveDog() {
  root.innerHTML = `<a onclick="redirect(event)" href="/dogs/">Back to the main page</a>    
        <label>Name: <input name="name" type="text"></label>       
        <button type="submit">Create</button>`;
   
  if (window.SSR) finishRender();
}





async function renderDog(id) {
    const response = await fetch('/api/dogs/' + id)
       if (response.ok) {
           const dog = await response.json()
           root.innerHTML= `<div>ID: ${dog.id}</div>  
                <div>Name:${dog.name}</div>
                <div>Breed:${dog.breed}</div>
                <div>Age:${dog.age}</div>
                <div>Create:${dog.createdAt}</div>     
                <button>Edit</button>
                <button onclick='Are yor sure?'>Remove</button>`
        }
}
async function createDog(event) {
  event.preventDefault();
  const response = await fetch("/api/dog", {
    method: "POST",
    haders: {
      "Content-type": "aplication/json",
    },
    body: JSON.stringify({
      name: form[0].value,
      breed: form[1].value,
      age: form[2].value,
    }),
  });
  if (response.ok) {
    history.pushState({}, "", "/dogs/");
    checkPathname();
  }
}

async function RemoveDog(event) {
  event.preventDefault();
  root.innerHTML = `<a onclick="redirect(event)" href="/dogs/">Back to the main page</a>`
  // const response = await fetch('/api/dog').then(response => response.json()).then(dogs => {
  //     dogs = dogs.splice(dogs.name,1) 
  const response = await fetch('/api/dog');
  if (response.ok) {
    history.pushState({}, "", "/dogs/");
    checkPathname();
  }
  }
}
 
