// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// const minValue = (x) => {
//     const resArr = x.split('').sort((a, b) => Number(a) - Number(b));
//     const nullArr = resArr.filter(el => el === '0').join('');
//     const noNullArr = resArr.filter(el => el !== '0').join('');
//
//     return Number(noNullArr[0] + nullArr + noNullArr.slice(1));
// };
//
// let result = null;
//
// process.stdin.on('end', () => {
//     if (result !== null) {
//         console.log(result);
//     }
//     process.exit(0);
// });
//
// rl.on('line', function (data) {
//     const line = data.trim();
//     if (line.length > 0) {
//         result = minValue(line);
//     }
// });


//////////
// Решение: читает stdin, выводит результат для каждого набора.
// Формат ввода:
// t
// n
// a1 a2 ... an
// ...
// Вывод: для каждого набора — "First" или "Second" в новой строке.

// const fs = require('fs');
// const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
//
// let idx = 0;
// const t = data[idx++];
//
// let out = [];
// for (let tc = 0; tc < t; tc++) {
//   const n = data[idx++];
//
//   const a = data.slice(idx, idx + n);
//   idx += n;
//
//   const cnt = new Array(n + 1).fill(0);
//   for (let i = 0; i < n; i++) cnt[a[i]]++;
//
//
//   const b = new Array(n);
//   let pos = 0;
//   for (let v = 1; v <= n; v++) {
//     let c = cnt[v];
//     while (c-- > 0) b[pos++] = v;
//   }
//
//   let valid = true;
//   for (let i = 0; i < n; i++) {
//     if (b[i] > i + 1) {
//       valid = false;
//       break;
//     }
//   }
//   if (!valid) {
//     out.push('Second');
//     continue;
//   }
//
//   let S = 0;
//   for (let i = 0; i < n; i++) {
//     S += (i + 1) - b[i];
//   }
//
//   out.push((S % 2 === 1) ? 'First' : 'Second');
// }
//
// process.stdout.write(out.join('\n'));


/////////////////////

// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// const MOD = 1000000007n;
// let n = null;
// let arr = [];
// let lineCount = 0;
// let answer = null;
//
// process.stdin.on('end', () => {
//     if (answer !== null) {
//         console.log(answer.toString());
//     }
//     process.exit(0);
// });
//
// rl.on('line', function (data) {
//     lineCount++;
//     if (lineCount === 1) {
//         n = parseInt(data.trim());
//     } else if (lineCount === 2) {
//         arr = data.trim().split(/\s+/).map(Number);
//
//         // Подсчёт частот
//         const freq = new Map();
//         for (let x of arr) {
//             freq.set(x, (freq.get(x) || 0) + 1);
//         }
//
//         // Перемножаем (1 + f(v)) по всем уникальным значениям
//         let prod = 1n;
//         for (let f of freq.values()) {
//             prod = (prod * BigInt(1 + f)) % MOD;
//         }
//
//         // Вычитаем пустую подпоследовательность
//         answer = (prod - 1n + MOD) % MOD;
//     }
// });
//
// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// let n = 0;
// let idx = 0;
// let L = [], R = [], A = [];
//
// let answer = 0;
//
// process.stdin.on('end', () => {
//     // Префиксные суммы для A
//     const pref = new Array(n + 1).fill(0);
//     for (let i = 0; i < n; i++) pref[i + 1] = pref[i] + A[i];
//     const totalA = pref[n];
//
//     let best = 0;
//     for (let i = 0; i < n; i++) {
//         const leftSum = pref[i];               // сумма слева [0..i-1]
//         const rightSum = totalA - pref[i + 1]; // сумма справа [i+1..n-1]
//         const leftTake = Math.min(L[i], leftSum);
//         const rightTake = Math.min(R[i], rightSum);
//         const total = A[i] + leftTake + rightTake;
//         if (total > best) best = total;
//     }
//
//     console.log(best);
//     process.exit(0);
// });
//
// rl.on('line', function (data) {
//     const parts = data.trim().split(/\s+/);
//     if (parts.length === 0 || parts[0] === '') return;
//
//     if (idx === 0) {
//         n = parseInt(parts[0]);
//         L = new Array(n);
//         R = new Array(n);
//         A = new Array(n);
//         idx = 1;
//     } else {
//         // ожидаем строки с l_i, r_i, a_i
//         const li = Number(parts[0]);
//         const ri = Number(parts[1]);
//         const ai = Number(parts[2]);
//         const pos = idx - 1;
//         L[pos] = li;
//         R[pos] = ri;
//         A[pos] = ai;
//         idx++;
//     }
// });



//////////////////////////


