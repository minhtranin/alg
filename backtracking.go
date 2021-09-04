package main

import "fmt"

func main() {
	board := [][]int{}
	for i := 0; i < 7; i++ {
		child := []int{}
		for j := 0; j < 7; j++ {
			child = append(child, 0)
		}
		board = append(board, child)
		child = []int{}
	}
	board[5][3] = 1
	backtracking(&board, 2, 5, 3)
	for i := 0; i < len(board); i++ {
		fmt.Println(board[i])
	}
}

func backtracking(board *[][]int, count int, row int, col int) bool {
	xtour := []int{2, 1, -1, -2, -2, -1, 1, 2}
	ytour := []int{1, 2, 2, 1, -1, -2, -2, -1}
	for i := 0; i < 7; i++ {
		nextRow := row + xtour[i]
		nextCol := col + ytour[i]
		if count >= 50 {
			return true
		}
		if validateforth(board, nextRow, nextCol) {
			(*board)[nextRow][nextCol] = count
			if backtracking(board, count+1, nextRow, nextCol) {
				return true
			} else {
				(*board)[nextRow][nextCol] = 0
			}
		}
	}
	return false
}

func validateforth(board *[][]int, row int, col int) bool {
	if row >= 0 && row < 7 && col >= 0 && col < 7 {
		return (*board)[row][col] == 0
	}
	return false

}
