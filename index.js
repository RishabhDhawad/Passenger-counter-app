let countEl = document.getElementById("count-el") // Pass in Argument
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count    
}

function save() {
    console.log(count)
}

let welcomeEl = document.getElementById("welcome-el")

let name = "Rishabh Dhawad"
let greeting = "Welcome Back "

welcomeEl.innerText = greeting + name

welcomeEl.innerText = welcomeEl.innerText + "👋"