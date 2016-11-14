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

    lowestBooks(){
      return this.ratedBooks().sort(function (a, b) {
        if (a.averageRating > b.averageRating) { return 1 }
        if (a.averageRating < b.averageRating) { return -1 }
        return 0;
      }).slice(0,3)
    }

    ratedBooks(){
      return store().books.filter((book) => {return ((book.author.id === this.id) && (book.averageRating >= 1))})
    }
  }
})()
