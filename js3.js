// УРОК 19
const a = 5

let b = a

b = 22

console.log(a)

console.log(b)

БАЗА_ЦРУ = "БАЗА ЦРУ"
console.log(БАЗА_ЦРУ)

const Base1 = {
    person: "Pablo Escobar",
    Criminal_Type: "Drug Dealer",
    Age: "False"
    // (Killed)
}

const Base2 = Base1

Base2.Third_Variable = "AAA"
console.log(Base2)

const Base3 = Object.assign ({}, Base1) 
Base3.person = "Al Capone"
Base3.Age = "False"
Base3.Criminal_Type = "Gangster"

console.log(Base3)

const Base4 = {... Base1}
Base4.person = "Doku Umarov"
Base4.Age = 60
Base4.Criminal_Type = "Terrorist"

console.log(Base4)
console.log(Base1.person)

const Base5 = JSON.parse(JSON.stringify(Base2))

Base5.person = "Мне лень менять"
Base5.Age = "Мне лень менять"
Base5.Criminal_Type = "Мне лень менять"

// УРОК 22

function myFunction (a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

console.log(myFunction (5, 25))
console.log(myFunction (7, 8))
// Я уже экспериментировал с тем что если не добавлять "return"

// УРОК 23
const penis = {
    fimoz: true,
    length: 19
}
console.log(penis)
function test (отсекация) {
    penis.length -= 12,
    penis.fimoz = "отрезан"
    return отсекация
}

test(penis)
console.log(penis)

function test2 (отсекация) {
    const newots = Object.assign ( {}, отсекация) 
    newots.length -= 13
    return newots
}

const otsek = test2(penis)
console.log(penis)
console.log(otsek) 