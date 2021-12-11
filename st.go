package main

import "fmt"

type Student struct {
	Name string  `json:"Name,omitempty"`
	Old  float32 `json:"omitempty"`
}

func main() {
	a := Student{
		Name: "",
		Old:  18,
	}
	fmt.Println(a)
}
