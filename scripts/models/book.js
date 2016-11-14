const Book = (function(){
  var id = 0

  return class Book{
    constructor(name, author, averageRating){
      this.author = author
      this.name = name
      this.averageRating = averageRating;
    }

    save(){
      this.id = ++id
      stores.push(Object.assign({},
        {authors: store().authors, books: [...store().books, this], reviews: store().reviews}
      ))
    }
  }
})()
