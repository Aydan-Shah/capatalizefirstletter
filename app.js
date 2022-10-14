//Different Ways 1
// function capatalizeWords(str) {
//     let words = str.split(" ").map(word => {
//         let firstLetter = word.slice(0,1);
//         let rest = word.slice(1);
//         firstLetter = firstLetter.toUpperCase();
//         // console.log(firstLetter, rest);
//         return `${firstLetter}${rest}`;
//     })
//     return words.join(" ");
// }
// console.log(capatalizeWords("test Test"))
// // console.log(capatalizeWords(prompt("Enter messages")))

//Different Ways 2
function capatalizeWords(str) {
    let words = str.split(" ").map(word => {
       return word.charAt(0).toUpperCase()+word.slice(1);
    })
    return words.join(" ");
}
console.log(capatalizeWords("test Test"))
// console.log(capatalizeWords(prompt("Enter messages")))

