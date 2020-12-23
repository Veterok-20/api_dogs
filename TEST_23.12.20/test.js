function Zaderzhka(ms) {
    return new Promise ((resolve, reject) => {    
        setTimeout(() => {resolve()},ms)    
    })
}

// Zaderzhka(1000).then(() => {
//     console.log('message')
//     return Zaderzhka(2000)
// }).then(() => {
//     console.log('message1')
// return Zaderzhka(3000)})

async function Delay() {
    await Zaderzhka(1000)
    console.log('message2')     
    await Zaderzhka(1000)
    console.log('message3')     
    await Zaderzhka(1000)
    console.log('message4')     
}
Delay()

