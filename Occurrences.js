let string ="asus";
let charactercount= "s";
let count = 0;
for (let i = 0; i < string.length; i++) {
    if(charactercount===string[i])
    {
        count++;
    }  
}
console.log("The count of occurrence of the character",charactercount,"is",count);
