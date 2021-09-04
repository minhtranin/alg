package main

import "fmt"

func main() {
	input := "babccahhd"
	// for index := range input {
	// 	fmt.Println(string(input[index]))
	// }

	start := 0
	end := 0
	// len(input) - 1 - j := len(input) - 1 - j
	for i <= len(input)-1-j {
		fmt.Println(string(input[i]), string(input[len(input)-1-j]))

		if string(input[i]) == string(input[len(input)-1-j]) {
			fmt.Println(i, j)
			break
		} else {
			if i <= j {
				i++
			} else {
				j++
			}
		}
	}
}
