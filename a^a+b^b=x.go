package main

import (
	"fmt"
	"math"
)

func judgeSquareSum(c int) bool {
	first := 0
	last := int(math.Floor(math.Sqrt(float64(c))))
	for first <= last {
		presume := first*first + last*last
		if presume == c {
			return true
		} else if presume > c {
			last--
		} else {
			first++
		}
	}
	return false
}

func main() {
	result := judgeSquareSum(20)
	fmt.Println(result)
}
