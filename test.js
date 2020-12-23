//@ts-check
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const express = require("express")
const {EventEmitter} = require('events') 
class SSREmitter extends EventEmitter {}

async function render(string_path) {
    const renderEmitter = new SSREmitter
    const dom = await JSDOM.fromFile(string_path, {
        runScripts: 'dangerously',
        resources: 'usable',
        beforeParse: (window) => {
            window.SSR = true
            window.finishRender = ()=> {
               // next() 
               renderEmitter.emit('finish')     
            }
        }
    })
        renderEmitter.once('finish', () => {
            res.send(dom.serialize());
               
      
  }.then(promise = new Promise((resolve, reject) {
    const stopped = delay((),1000)
  }
      )



const app = express()

app.get('/', async (req, res, next)=> {
 const html  = await render(res)
 res.send(html)   
})  

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000')
})

// const dom = new JSDOM(`<body>
// <p>Hello!</p>`
// <script>document.body.appendChild(document.createElement("hr"));</script>
// </body>, {runScripts:"dangerously"});

// console.log(dom.window.document.querySelector("p").textContent);
// console.log(dom.serialize());