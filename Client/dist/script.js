const header = document.createElement("h1")
const divRoot = document.querySelector('#root')
header.textContent = 'Hello world!'
divRoot.append(header)
if (window.SSR) finishRender()