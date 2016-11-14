const Author = (function(){
  var id = 0

  return class Author{
    constructor(name, goodreads_id){
      this.name = name
      this.goodreads_id = goodreads_id
      this.save()
    }

    save(){
      this.id = ++id
      stores.push(Object.assign({},
        {authors: [...store().authors, this], books: store().books, reviews: store().reviews}))
    }

    books(){
      return store().books.find((book) => {book.author.id === this.id})
    }
  }
})()
