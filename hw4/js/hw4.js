'use strict';

// Задание 1

let str1 = 'дом домик домой одомашненный';
let str2 = 'дом';
let newStr = str1.split(str2).length - 1;
console.log(newStr);

// Задание 2
// очень длинно, конечно, получилось
let word = 'а роза упала на лапу азораа';
    
    let arrWord = word.split('');
        let straightWord = arrWord;
            for (let m = straightWord.length-1; m >= 0; m--) {
                if (straightWord[m] === " ") {
                    straightWord.splice(m, 1);
                }
            }
            straightWord = straightWord.join('');  
            
        let reverseWord = arrWord.reverse();
        for (let m = reverseWord.length-1; m >= 0; m--) {
            if (reverseWord[m] === " ") {
                reverseWord.splice(m, 1);
            }
        }
        reverseWord = reverseWord.join('');
        let result = straightWord === reverseWord;
        if (result === true) {
            console.log('Является палиндромом'); 
            } else {
                console.log('Не является палиндромом'); 
            }

// Задание 3

let str = 'anDrEY';
    str = str.toLowerCase();
    let arrFromStr = str.split('');
        let firstLetter = arrFromStr.shift();
            firstLetter = firstLetter.toUpperCase();
                let secondPart = arrFromStr.join('');
                    let full = firstLetter + secondPart;
                    console.log(full);

// Задание 4

let string = 'в предложении все слова разной длины';
    let strArr = string.split(" ");
    let longest = 0;
    let answer;
    for (let i = 0; i < strArr.length - 1; i++) {
        if (longest < strArr[i].length) {
            longest = strArr[i].length;
            answer = strArr[i];
        }
    }
    console.log(answer);



