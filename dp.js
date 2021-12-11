// t(n+2) = tn + t(n+1)2
// 3<= n <=20
// n10 8.426661309628124e+22 
const context = {}
function fibonacciModified(t1, t2, n) {
    if (n === 1) return t1
    if (n === 2) return t2
    const tn1 = BigInt(context[n-1] ? context[n-1] : fibonacciModified(t1,t2,n-1))
    const tn2 = BigInt(context[n-2] ? context[n-2] : fibonacciModified(t1,t2,n-2))
    if (!context[n-1]) {
        context[n-1] = tn1
    }
    if (!context[n-2]) {
        context[n-2] = tn2
    }
    return BigInt(tn2 + tn1*tn1)
}
console.time('fibo')
const a = fibonacciModified(0, 1, 10)
console.log(a)
console.timeEnd('fibo')