function goodreadsAdapter(query){
	return getAuthor(query).done(() => {getAuthorBooks(store().authors[store().authors.length-1])})
}

function getAuthor(name){
	return $.ajax({
		method: "GET",
		url: `https://www.goodreads.com/api/author_url/${name}`,
		data: {key: "CRW3QW5h0xq6eR0juk2g"}
	}).done((data) => {
		let goodreads_id = $(data).find("author")[0].id
		let name = $(data).find("name")[0].innerHTML.match(/\[([^\[\]]*)\]/)[1]
		new Author(name, goodreads_id)
	})
}

function getAuthorBooks(author){
	return $.ajax({
		method: "GET",
		url: `https://www.goodreads.com/author/list/${author.goodreads_id}?format=xml`,
		data: {key: "7Rxl9lT3zDCAiDXkCY6Q"}
	}).done((data) => {
		$(data).find("book").each((i, book) => {
			let title = $(book).find("title").text()
			let bookAuthor = author
			let isbn = $(book).find("isbn").text()
			let goodreads_id = $(book).find("id").text()
			let newBook = new Book (title, bookAuthor, isbn, goodreads_id)
			newBook.averageRating = Number.parseFloat($(book).find("average_rating")[0].innerHTML)
		})
	 })
}
