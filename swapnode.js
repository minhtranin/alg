/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    swap(head, 0, 1)
    
    
};

const swap = function(n, i, j) {
    if (i > n.length - 1 && j > n.length -1) return
    let first = i
    let second = j
    if(second <= n.length - 1 ) {
        const f = n[first]
        n[first] = n[second]
        n[second] = f
        swap(n, first + 2, second + 2)
    }
    
}


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let i = [1 , 2, 3, 4]
swapPairs(i)
// console.log(i)


const first = new ListNode(i[0])

// for (let index = 0; index < i.length; index++) {
//     handleNode(i[index])
    
// }
const handleNode = (node, ix) => {
    ix++
    if (!node || ix > i.length -1) return
    console.log(ix)
    node.next = new ListNode(i[ix])
    handleNode(node.next, ix)
}
handleNode(first, 0)
// console.log(first)


const handleswitch = (head) => {
    const m = new ListNode()
    m.next = head
    let newTF = m
    while (newTF.next && newTF.next.next) {
        console.log(newTF, '--')
        let node1 = newTF.next
        let node2 = newTF.next.next
        newTF.next = node2
        node1.next = node2.next
        node2.next = node1
        newTF = node1
    }
    return newTF
}
const l = handleswitch(first)
console.log(first)
console.log(l)

node 1 = a.next
node 2 = b.next.next

vip.next = node2
node2.next = node 1


