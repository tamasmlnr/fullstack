let separator = "______________"
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
console.log(separator)

array = [1, 2, 3, 4]
console.log(array[1])
array.push(5)
console.log("array length:", array.length)
array.forEach(element => {
  console.log(element)
});

console.log(separator)

let rows = 5;
for (let i = 0; i<=rows; i++) {
  for (let k = rows; k>i; k--) {
    process.stdout.write(" ")
  }
  for (let j = 0; j < i; j++) {
    process.stdout.write("*")}
    console.log("")
}

console.log(separator)

const t = [1, -1, 3]
const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed


console.log(separator)
const j = [1, 2, 3]
const m1 = j.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed



console.log(separator)
const k = [1, 2, 3, 4, 5]
const [first, second, ...rest] = k
console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4 ,5] is printed

console.log(separator)
// Define  object literals and printing its properties
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object12 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Standford University',
}

const field = 'name'
object1.address = '123 Random street'
console.log(object1[field], object1.age, object1.education, object1.address);


console.log(separator)