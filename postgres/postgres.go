package main

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
)

func main() {
	db, err := sql.Open("postgres", "sslmode=require host=aws-us-east-1-portal.17.dblayer.com port=11610 dbname=bookstore user=admin password=DBEIQOCFEBUBQYFI")
	checkErr(err)
	defer db.Close()

	rows, err := db.Query("SELECT book_id, title, description, author_id, releases, price FROM books")
	checkErr(err)

	fmt.Println("Book ID | Title                     | Description  ")
	for rows.Next() {
		var book_id int
		var author_id int
		var title string
		var description string
		var price float32
		var releases string
		err = rows.Scan(&book_id, &title, &description, &author_id, &releases, &price)
		checkErr(err)
		fmt.Printf(" %6v | %25v | %20v \n", book_id, title, description)
	}
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
