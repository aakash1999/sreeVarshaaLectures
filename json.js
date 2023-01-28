// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const recievedData = '{ "name" : "John", "age" : 45, "City" : "Delhi"}'

const jsonObject = JSON.parse(recievedData)

console.log(jsonObject.name + " " + jsonObject.age)

const obj = {
    name : "John",
    age : 45,
    city : "Delhi"
}

const myJsonString = JSON.stringify(obj)

console.log(myJsonString)
