package main

import "fmt"

func sortedSquares(nums []int) []int {
	newNums := nums[:]
	result := []int{}
	i := -1           // first entry point
	j := len(newNums) //second entry point
	lastIndex := len(newNums)
	// fmt.Println(i, lastIndex)
	for i+1 < lastIndex && newNums[i+1] < 0 {
		i++
	}
	for j-1 >= 0 && newNums[j-1] >= 0 {
		j--
	}

	for i >= 0 || j < lastIndex { // avoid geting out of array
		fmt.Println(i, j)
		if i >= 0 && j < lastIndex {
			absI := newNums[i] * newNums[i]
			absJ := newNums[j] * newNums[j]
			if absI <= absJ {
				result = append(result, absI)
				i--
			} else {
				result = append(result, absJ)
				j++
			}
		} else if i >= 0 {
			result = append(result, newNums[i]*newNums[i])
			i--
		} else {
			result = append(result, newNums[j]*newNums[j])
			j++
		}
	}
	return result
}

func main() {
	nums := []int{1}
	rs := sortedSquares(nums)
	fmt.Println(rs)
}
