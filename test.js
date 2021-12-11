// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

let b = 0
function ft(total, sl, totalAfterFilter) {
    sl = sl.sort((a, b) => a -b)
    if (totalAfterFilter <= total/2) {
        return true
    } else {
      
        const max1 = sl[sl.length -1]
        const max2 = sl[sl.length -2]
        // console.log(max1, max2)
        if (max1 > max2) {
            b = b+1
            sl[sl.length-1] = max1 /2
            console.log('++++++', b)
        } else {
            b = b+1
            sl[sl.length-2] = max2 /2
            console.log('-------', b)
        }
        ft(total, sl, sl.reduce((init, vl) => init += vl ,0))
    }
}

function solution(A) {
    const po = [5, 19, 8, 1]
    // write your code in JavaScript (Node.js 8.9.4)
    // po.sort((a, b) => a -b)
    const total = po.reduce((init, vl) => init += vl ,0)
    return ft(total, po, total)
}
solution()
console.log(b)
