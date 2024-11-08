let string = "geforce";
let vowels = 0;
let consonants =0;
for (let i = 0; i < string.length; i++) {
    if (
        string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' || 
        string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U' 
    ){
       vowels++; 
    }
    else{
        consonants++;
    }
}
console.log("vowels for the string", string,"is",vowels);
console.log("consonants for the string", string,"is",consonants);

