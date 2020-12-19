if (window.SSR) {
    const header = document.createElement("h1")
const divRoot = document.querySelector('#root')
header.textContent = 'Hello word!'
divRoot.append(header)
finishRender()
}


document.querySelector('Button').addEventListener('click', ()=> {
    console.log('ghghg')
  })