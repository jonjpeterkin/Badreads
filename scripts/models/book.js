const Book = (function(){
  var id = 0

  return class Book{
    constructor(title, author, isbn, goodreads_id){
      this.author = author
      this.title = title
      this.isbn = isbn
      this.goodreads_id = goodreads_id
      this.save()
    }

    save(){
      this.id = ++id
      stores.push(Object.assign({},
        {authors: store().authors, books: [...store().books, this], reviews: store().reviews}))
    }
  }
})()
