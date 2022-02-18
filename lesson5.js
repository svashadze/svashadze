1.
let array=[5, 25, 89, 120, 36];
array.push('javascript', 'python' )
console.log(array);

array.unshift('html','css')
console.log(array);

console.log(array.length);

array.shift()
console.log(array);

array.pop()
console.log(array);

2.

let fruits= ['orange','banana','pear']
console.log(fruits.length);

fruits.push('apple', 'pineapple')
console.log(fruits);

fruits.unshift('watermelon')
console.log(fruits);

console.log(fruits.length);

fruits.splice(2,0, 'mango')
console.log(fruits);

fruits.shift()
console.log(fruits);

fruits.pop()
console.log(fruits);

console.log(fruits.length);

3.
let array = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray1 = array.map(x => x / 3);
console.log(newArray1);
4.
let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let number1 = array.filter (x => x > 0);
console.log(number1);

    
5.
let languages = ['html', 'css', 'javascript', 'python','php'];
let newlang= languages.filter (x => x.length > 3);
console.log(newlang)

6.
let array= ['academy', 'of', 'digital', 'industries'];
let newarray=array.reduce(function(accumulator, currentValue) {
   return accumulator.concat(currentValue)},
   
   )
   console.log(newarray);
    

