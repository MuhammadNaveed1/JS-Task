// Array (Palindrome task)
// var palindrome = prompt("Enter a word");
// var checkForWord = palindrome.split("").reverse().join("");
// if (palindrome === checkForWord) {
//     alert("It's a palindrome word");
// }
// else {
//     alert("Not a palindrome word");
// }

// // For loop (Palindrome task);
// var palindrome = prompt("Enter a word");
// var reverse = "";
// for (var i = palindrome.length - 1; 0 <= i; i--) {
//     reverse = reverse + palindrome[i]
// }
// if (reverse === palindrome) {
//     alert("It's a palindrom word");
// }
// else {
//     alert("Not a palindrome word");
// }

// // Array (Swapping value)
// var arr = ["Naveed", "Anas", "Umer"];
// arr[0] = [arr[2],arr[2] = arr[0]][0];
// console.log(arr);

// For loop (Capitalizing names in array)
// var names = prompt("Enter your name");
// var split = names.split(" ");
// var capitalize;
// var arr = [];
// for (var i = 0; i < split.length; i++) {
//     capitalize = (split[i].slice(0, 1).toLocaleUpperCase());
//     arr.push(capitalize + split[i].slice(1));
// }
// document.write("Welcome " + arr.join(" "));

// For loop (Finding any number of same word and replacing all of it with differenct word)
// var text = "smit saylani smit saylani smit saylani smit saylani";
// var split = text.split("");
// for (var i = 0; i < split.length; i++) {
//     if (split.slice(i, i + 7).join("") == "saylani") {
//         split.splice(i, 7, "s", "m", "i", "t");
//     }
// }
// console.log(split.join(""));