// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
//
//     12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):
//
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1


function nextBigger(n) {
    const arr = [...String(n)];
    let i = arr.length - 2;
    // Шаг 1: найти первый элемент справа, который меньше следующего
    while (i >= 0 && arr[i] >= arr[i + 1]) i--;
    if (i < 0) return -1; // уже максимальная перестановка
    // Шаг 2: найти минимальный элемент справа от i, который больше arr[i]
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) j--;
    // Шаг 3: поменять местами arr[i] и arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
    // Шаг 4: отсортировать хвост справа от i
    const left = arr.slice(0, i + 1);
    const right = arr.slice(i + 1).sort();
    const result = Number([...left, ...right].join(''));
    return result > n ? result : -1;
}


// console.log(nextBigger(12))
// console.log(nextBigger(513))
// console.log(nextBigger(2017))
// console.log(nextBigger(2077))
console.log(nextBigger(414))
// console.log(nextBigger(444))
console.log(nextBigger(93))
console.log(nextBigger(1680))
