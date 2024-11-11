let String = "animals";
let characterCount = 'a';
let count = 0;
for (let i = 0; i < String.length; i++) {
    if (String[i] === characterCount) {
        count++;
    }
}
console.log("The character '" + characterCount + "' appears " + count + " times in the string.");
