var reorderLogFiles = function(logs) {
    const logsClone = logs
    const digitLog = []
    const letterLog = []
    for (let i = 0 ; i< logsClone.length; i++) {
        if (isLetter(logsClone[i])) {
            letterLog.push(logsClone[i])
        } else {
            digitLog.push(logsClone[i])
        }
    }
    return [...letterLog.sort((a, b) => {
        if (a.substring(a.indexOf(" ") + 1) > b.substring(b.indexOf(" ") + 1)) {
            return 1
        }
        if (b.substring(b.indexOf(" ") + 1) === a.substring(a.indexOf(" ") + 1)) {
            return a.substring(0, a.indexOf(" ")).localeCompare(b.substring(0, b.indexOf(" ")))
        }
        return -1
        // return a.substring(a.indexOf(" ") + 1).localeCompare(b.substring(b.indexOf(" ") + 1))
    }), ...digitLog]
};

const isLetter = (s) => {
    const sItems = s.split(' ')
    return sItems.splice(1).every((it) => isNaN(Number(it)))
}


// const rs = reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])
const rs = reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"]
)

console.log(rs)