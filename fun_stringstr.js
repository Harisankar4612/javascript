let str= "JavaScript is fun. Learn JavaScript!";
str = str.toLowerCase();
str = str.trim();
str = str.replaceAll("javascript ", "js");

console.log("After replacements:", str);

str = str.toUpperCase();
console.log("Uppercase version:", str);

str = str.split("JAVASCRIPT").join("JS");
str = str + "Let's code!";
str = str.repeat(2);

console.log("Final repeated string:", str);
