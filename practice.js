//1. String in JS

let username = "rishabh"

let message = "You have tree new notifications"
let messageToUser = "You have Logged"

console.log(message + " " + username + "!")

//2. Create a variable, messageToUser, that contains the message we have logged

console.log(messageToUser)

//3. Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

let name = "Rishabh Dhawad"
let greeting = "Hi, my name is "

let myGreetings = greeting + name
console.log(myGreetings)

//4. Strings vs Numbers

let points = 5
let bonusPoints = "12"

let totalPoints = points + bonusPoints
console.log(totalPoints)

console.log(4 + 5) 
// 9
console.log("2" + "4") 
// "24"
console.log("5" + 1) 
// "51"
console.log(100 + "100") 
// "100100"

//5. Grab the welcome-el paragraph and store it in a variable called welcomeEl

let welcomeEl = document.getDocumentById("welcome-el")
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let name2 = "Rishabh Dhawad"
let greeting2 = "Welcome Back "
// Render the welcome message using welcomeEl.innerText

welcomeEl.innerText = greeting2 + name2

//6. Add an emoji to the end! 
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText = welcomeEl.innerText + "👋"