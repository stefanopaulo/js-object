console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

const arr1 = [1, 2, 3, 4, 5]
const arr2 = ['a', 'b', 'c']
console.log(arr1.first())
console.log(arr2.first())
