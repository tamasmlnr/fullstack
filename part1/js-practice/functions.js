const separator = "_________________"

const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

console.log(sum(3,5));

console.log(separator)


const square = p => {
  console.log(p)
  return p * p
}

const square_short = p => p*p;

console.log(square(2))
console.log(square_short(2))


console.log(separator)

const average = function(a, b) {
  return (a + b) / 2
}

const result = average(2, 5)
// result is now 3.5