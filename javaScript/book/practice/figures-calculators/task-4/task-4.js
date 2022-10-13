"use strict"

const calculator = (a, b, c) => {
  let p = (a + b + c) / 2
  let S = Math.sqrt(p * (p - a) * (p - b) * (p - c))
  console.log(`Area of ​​a triangle = ${S}`)
}

calculator(3, 4, 5)