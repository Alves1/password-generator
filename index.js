const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genPassWord = document.getElementById("password")
let inputPassW1 = document.getElementById("passw1")
let inputPassW2 = document.getElementById("passw2")
let randomPassW1 = ""
let randomPassW2 = ""
let indexPassW1 = 0
let indexPassW2 = 0


genPassWord.addEventListener("click", genPassWd)


function genPassWd() {
    
    for(let i = 0; i < 15; i++) {
        i
        indexPassW1 = Math.floor(Math.random() * characters.length)
        indexPassW2 = Math.floor(Math.random() * characters.length)
        randomPassW1 += characters[indexPassW1]
        randomPassW2 += characters[indexPassW2]
    }
    // console.log(randomPassW1)
    // console.log(randomPassW2)
    inputPassW1.value = randomPassW1
    inputPassW2.value = randomPassW2
    randomPassW1 = ""
    randomPassW2 = ""
    indexPassW1 = 0
    indexPassW2 = 0
    
    
    // indexPassW1 = Math.floor(Math.random() * characters.length)
    // indexPassW2 = Math.floor(Math.random() * characters.length)
    // randomPassW1 = characters[indexPassW1]
    // randomPassW2 = characters[indexPassW2]
    
    
    // console.log(characters.length)
    // console.log(`IndexPassW1 is ${indexPassW1}`)
    // console.log(`IndexPassW2 is ${indexPassW2}`)
    // console.log(`randomPassW1 is ${randomPassW1}`)
    // console.log(`randomPassW2 is ${randomPassW2}`)
    
}
