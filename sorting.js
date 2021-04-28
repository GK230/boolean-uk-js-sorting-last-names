const lastNames = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]

const yourLastName = prompt("What is your last name?")
lastNames.push(yourLastName)

console.log(lastNames.sort())

console.log(lastNames.indexOf(yourLastName))

const upperLastNames = []

const allLastNames = []
for (const lastName of lastNames) {
    let arr = []
    console.log(lastName.toUpperCase())
    arr.push(lastName)
    arr.push(lastName.toUpperCase())
    allLastNames.push(arr)
}
console.log(allLastNames)





