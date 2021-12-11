package main

import "fmt"

var context = make(map[int32]int32)

func fibonacciModified(t1 int32, t2 int32, n int32) int32 {
	// Write your code here
	if n == 0 {
		fmt.Println("qwe")
	}
	if n == 1 {
		return t1
	}
	if n == 2 {
		return t2
	}
	var tn1 int32
	_, c1 := context[n-1]
	if c1 {
		tn1 = context[n-1]
	} else {
		tn1 = fibonacciModified(t1, t2, n-1)
	}
	var tn2 int32
	_, c2 := context[n-2]
	if c2 {
		tn2 = context[n-2]
	} else {
		tn2 = fibonacciModified(t1, t2, n-2)
	}
	if !c1 {
		context[n-1] = tn1
	}
	if !c2 {
		context[n-2] = tn2
	}
	return tn2 + tn1*tn1

}

func main() {
	fmt.Println(fibonacciModified(2, 1, 7))
}
