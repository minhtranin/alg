
const solution = (arr) => {
    // Type your solution here 
    if (!arr || !arr.length) return ''
    const leftSum = getSum(arr, 1)
    const rightSum = getSum(arr, 2) 
    console.log(leftSum, 'lefsum')
    console.log(rightSum, 'rightSum')
    if (leftSum > rightSum) return 'Left'
    if (rightSum > leftSum) return 'Right'
    return ''
};

const getSum = (arr, idx) => {
    if (idx > arr.length -1 || arr[idx] === -1) return 0
    let leftPt = 2*idx + 1
    let rightPt = 2*idx + 2 
    let sum = 0
    sum = arr[idx] + getSum(arr, leftPt) + getSum(arr, rightPt)
    return sum
}


const rs = solution([3, 6, 2, 9, -1, 10])
console.log(rs)
