function goodreadsAdapter(query){

}

function getAuthor(name){
	$.ajax({
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
	$.ajax({
		method: "GET",
		url: `https://www.goodreads.com/author/list/${author.goodreads_id}?format=xml`,
		data: {key: "CRW3QW5h0xq6eR0juk2g"}
	}).done((data) => {
		debugger
		books = $(data)
	 })
}