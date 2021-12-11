// solution 1
// let dz = []
// function solution(str) {
//     console.log(str.length)
//     render(str, 0)
//     str = dz
// }

// function render(str, i) {
//     // console.log(i)
//     if (!str || i > str.length -1) return
//     render(str, i+1)
//     dz.push(str[i])
// }

// let d = ["h","e","l","l","o"]
// solution(d)
// console.log(d)
// console.log(dz)
// let rs = []
// var reverseString = function(s) {
//     renderF(s, 0)
//     console.log(s)
// };

// const renderF = (s, idx) => {
//     if (idx > s.length -1) return
//     renderF(s, idx +1)
//     s[s.length -1 - idx] = s[idx]
//     // console.log(s[idx])
// }

// solution 2

let a =["h","e","l","o"]
// function solution2(str) {
//     let pt1 = 0
//     let pt2 = str.length -1
//     console.log(pt1, pt2)
//     while(pt2 > pt1) {
//         const a = str[pt1]
//         const b = str[pt2]
//         str[pt1] = b
//         str[pt2] = a
//         pt2--
//         pt1++
//     }
// }
// solution2(a)
// console.log(a)

//solution 3
var reverseString = function(s) {
    let stack = [...s];
    for (let i = 0; i < s.length; i++) {
        s[i] = stack.pop();
    }
};

reverseString(a)
console.log(a)