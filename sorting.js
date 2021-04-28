const lastNames = [Mason, Marcora, Rico, Neves, Ivanov]

const yourlastName = prompt("What is your last name?")
lastNames.push(yourlastName)
console.log(lastNames.sort())
console.log(lastNames.findIndex(yourlastName))
for (const lastName of lastNames) {
    console.log(lastName.toUpperCase())
}