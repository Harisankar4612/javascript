function reversestring(str) {
    return str.split('').reverse().join('');
}

let originalString = "Hello, world!";
console.log("Reversed string: " + reversestring(originalString)); 