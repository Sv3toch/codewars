// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let total = 0;
// process.stdin.on('end', () => { console.log(total); process.exit(0); });
// rl.on('line', function (data) {
//     data = data.split(' ');
//     total += parseInt(data[0]) || 0;
//     total += parseInt(data[1]) || 0;
// });


////////////////////////////
//
// const sum =(a,b)=>{
//     return a+b
// }


/////////////////////////////////////////////

// const readline = require('readline');
//
// // Создаём интерфейс для чтения из терминала
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// // Функция сложения
// const sum = (a, b) => a + b;
//
// // Запрашиваем ввод первого числа
// rl.question('Введите первое число: ', (inputA) => {
//     // Запрашиваем ввод второго числа
//     rl.question('Введите второе число: ', (inputB) => {
//         const a = Number(inputA);
//         const b = Number(inputB);
//
//         if (isNaN(a) || isNaN(b)) {
//             console.log('Ошибка: оба значения должны быть числами.');
//         } else {
//             console.log(`Сумма: ${sum(a, b)}`);
//         }
//
//         rl.close(); // Закрываем интерфейс
//     });
// });
// ///////////////////////////////////////////////////////////
//
// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// const sum = (a, b) => a + b;
//
// rl.question('Введите два числа через пробел: ', (input) => {
//     const [aStr, bStr] = input.trim().split(/\s+/);
//     const a = Number(aStr);
//     const b = Number(bStr);
//
//     if (isNaN(a) || isNaN(b)) {
//         console.log('Ошибка: оба значения должны быть числами.');
//     } else {
//         console.log(`Сумма: ${sum(a, b)}`);
//     }
//
//     rl.close();
// });
///////////////////////////////////////////////////////////////

// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// const mob = (a, b, c, d) => {
//     const extra = Math.max(0, d - b)
//     return a + extra * c
// }
//
// rl.question('line', (input) => {
//     const [aStr, bStr, cStr, dStr] = input.trim().split(/\s+/);
//     const a = Number(aStr);
//     const b = Number(bStr);
//     const c = Number(cStr);
//     const d = Number(dStr);
//
//
//     console.log(`Сумма: ${mob(a, b, c, d)}`);
//
//
//     rl.close();
// })
// ;

//////////////////////////////////////
// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// const knife = (n) => {
//     let i = 0
//     while (2 ** i < n) {
//         i++
//     }
//     return i
// }
//
//
// rl.question('Введите сколько кусков рулета нужно: ', (input) => {
//     const a = Number(input.trim());
//     console.log(`Минимальное количество надрезов: ${knife(a)}`);
//     rl.close();
// })

//////////////////////////////////////


// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('Введите n и t через пробел:\n', (line1) => {
//     const [n, t] = line1.trim().split(/\s+/).map(Number);
//
//     rl.question('Введите этажи сотрудников через пробел:\n', (line2) => {
//         const floors = line2.trim().split(/\s+/).map(Number);
//
//         rl.question('Введите номер сотрудника, который уйдёт:\n', (line3) => {
//             const k = Number(line3.trim());
//
//             const targetFloor = floors[k - 1];
//             const minFloor = floors[0];
//             const maxFloor = floors[floors.length - 1];
//             let result = maxFloor - minFloor
//
//             if (targetFloor - minFloor > t) {
//                 result = Math.min((2*maxFloor- minFloor- targetFloor), (maxFloor - 2*minFloor + targetFloor))
//             }
//             console.log(`Минимальное время: ${result} минут`);
//
//             rl.close();
//         });
//     });
// });

//////////////////////////////////////



// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('Введите n и k через пробел:\n', (line1) => {
//     const [n, k] = line1.trim().split(/\s+/).map(Number);
//
//     rl.question('Введите n чисел через пробел:\n', (line2) => {
//         const numbers = line2.trim().split(/\s+/);
//
//         const gains = [];
//
//         for (const numStr of numbers) {
//             const digits = numStr.split('').map(Number);
//             const len = digits.length;
//
//             for (let i = 0; i < len; i++) {
//                 const digit = digits[i];
//                 const power = len - i - 1;
//                 const gain = (9 - digit) * Math.pow(10, power);
//                 if (gain > 0) {
//                     gains.push(gain);
//                 }
//             }
//         }
//
//         // Сортируем приросты по убыванию
//         gains.sort((a, b) => b - a);
//
//         // Берём k самых больших
//         const maxGain = gains.slice(0, k).reduce((sum, val) => sum + val, 0);
//
//         console.log(`Максимальный прирост суммы: ${maxGain}`);
//         rl.close();
//     });
// });


///////////////////////const readline = require('readline');

// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('Введите два числа L и R через пробел:\n', (line) => {
//     const [Lstr, Rstr] = line.trim().split(/\s+/);
//     const L = BigInt(Lstr);
//     const R = BigInt(Rstr);
//
//     let count = 0n;
//
//     for (let len = 1; len <= Rstr.length; len++) {
//         const base = BigInt('1'.repeat(len)); // 1, 11, 111, ...
//         for (let d = 1; d <= 9; d++) {
//             const num = base * BigInt(d);
//             if (num >= L && num <= R) {
//                 count++;
//             }
//         }
//     }
//
//     console.log(`Количество тестов: ${count}`);
//     rl.close();
// });


///////////////////////



// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('Введите количество учеников:\n', (line1) => {
//     const n = Number(line1.trim());
//
//     rl.question('Введите рост учеников через пробел:\n', (line2) => {
//         const heights = line2.trim().split(/\s+/).map(Number);
//
//         const mismatches = [];
//
//         for (let i = 0; i < n; i++) {
//             const position = i + 1; // позиции считаются с 1
//             const height = heights[i];
//             const isEvenPos = position % 2 === 0;
//             const isEvenHeight = height % 2 === 0;
//
//             if (isEvenPos !== isEvenHeight) {
//                 mismatches.push(i);
//             }
//         }
//
//         if (mismatches.length === 2) {
//             const [i, j] = mismatches;
//             // Проверим, можно ли поменять местами
//             const hi = heights[i];
//             const hj = heights[j];
//
//             const pi = i + 1;
//             const pj = j + 1;
//
//             const validSwap =
//                 (pi % 2 === hj % 2) && (pj % 2 === hi % 2);
//
//             if (validSwap) {
//                 console.log(`${pi} ${pj}`);
//             } else {
//                 console.log(-1,-1);
//             }
//         } else {
//             console.log(-1,-1);
//         }
//
//         rl.close();
//     });
// });



//////////////////////////////////////////


//
// const readline = require('readline');
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('Введите количество учеников:\n', (line1) => {
//     const n = Number(line1.trim());
//
//     rl.question('Введите список подарков через пробел:\n', (line2) => {
//         const a = line2.trim().split(/\s+/).map(Number);
//         const visited = Array(n).fill(false);
//         let current = 0;
//         let count = 0;
//
//         // Проверим, сколько учеников задействовано в цепочке от первого
//         while (!visited[current]) {
//             visited[current] = true;
//             current = a[current] - 1;
//             count++;
//         }
//
//         if (count === n && current === 0) {
//             console.log('Цепочка уже замкнута, ничего менять не нужно');
//             rl.close();
//             return;
//         }
//
//         // Попробуем заменить одну стрелку
//         for (let i = 0; i < n; i++) {
//             for (let j = 1; j <= n; j++) {
//                 if (a[i] === j) continue; // не менять на то же
//                 const b = [...a];
//                 b[i] = j;
//
//                 const visited2 = Array(n).fill(false);
//                 let cur = 0;
//                 let cnt = 0;
//
//                 while (!visited2[cur]) {
//                     visited2[cur] = true;
//                     cur = b[cur] - 1;
//                     cnt++;
//                 }
//
//                 if (cnt === n && cur === 0) {
//                     console.log(`${i + 1} ${j}`);
//                     rl.close();
//                     return;
//                 }
//             }
//         }
//
//         console.log(-1, -1);
//         rl.close();
//     });
// });


///////////////////////////////////////////

///////////////////////////


const readline = require('readline');

const minValue=(x)=>{
    resArr=x.split('').sort((a,b)=>Number(b)-Number(a))
    return resArr
}

console.log(minValue(7331))

//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('Введите число x:\n', (line) => {
//     const [Lstr, Rstr] = line.trim().split(/\s+/);
//     const L = BigInt(Lstr);
//     const R = BigInt(Rstr);
//
//     let count = 0n;
//
//     for (let len = 1; len <= Rstr.length; len++) {
//         const base = BigInt('1'.repeat(len)); // 1, 11, 111, ...
//         for (let d = 1; d <= 9; d++) {
//             const num = base * BigInt(d);
//             if (num >= L && num <= R) {
//                 count++;
//             }
//         }
//     }
//
//     console.log(`Количество тестов: ${count}`);
//     rl.close();
// });