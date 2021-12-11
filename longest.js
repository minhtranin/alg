// // Input: s = "babad"
// // Output: "bab"
// // Note: "aba" is also a valid answer.


// /**
//  * @param {string} s
//  * @return {string}
//  */

// const makeup = (str) => {

// }

//  var longestPalindrome = function(s) {
//     const sSet = new Set(s)
//     const rs = []
//     let disc = ''
//     for (let index = 0; index < s.length; index++) {
//         const lastFind = s.lastIndexOf(s[index])
//         if (lastFind !== -1) {
//             const getStr = s.substring(index, lastFind + 1)
//             if (getStr.length > disc.length) {
//                 disc = getStr
//             }

//         }
        
//     }
    
//     return makeup(disc)
// };

// const rs =longestPalindrome("a")
// console.log(rs)


var longestPalindrome = function(s) {
    let max = [0, 1]
    for (let i = 0; i < s.length; i++) {
        let even = expandFormMiddle(i -1, i, s)
        let odd = expandFormMiddle(i-1, i+1, s)
        let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even
        max = max[1] - max[0] > curMax[1] -curMax[0] ? max : curMax
        
    }
    return s.slice(max[0], max[1]) 
};

const expandFormMiddle = (left, right, s) => {
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) break
        left--
        right++
    }
    return [left + 1, right]
}
const ip = "sbbc"
// const l = expandFormMiddle(ip, 0, 0)
const rs = longestPalindrome(ip)
console.log(rs)