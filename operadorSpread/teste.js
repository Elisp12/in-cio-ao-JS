// podendo ultizar para espalhar varios elemntos 

const obj = document.getElementsByTagName("div")
console.log(obj)

// usando Spread
const obj2 = [...document.getElementsByTagName("div")]
// percorrendo array

obj2.forEach(elemento => {
    console.log(elemento)
});