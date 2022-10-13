// 1
console.log(/^http\:\/\//g.test('http://'))

// 2
console.log(/^htt(p|ps)\:\/\//g.test('httpps://'))

// 3
console.log(/$(.txt)|(.html)|(.php)/g.test('httpps://php'))

// 4
console.log(/$(.jpg)|(.jpeg)/g.test('httpps://php'))

// 5
console.log(/$(.jpg)|(.jpeg)|(.png)/g.test('httpps://php'))

// 6
console.log(/\d{1,12}/g.test('123456789123456789')) 