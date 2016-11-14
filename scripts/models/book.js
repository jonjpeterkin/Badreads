const Book = (function(){
  var id = 0

  return class Book{
    constructor(title, author, averageRating){
      this.author = author
      this.title = title
      this.averageRating = averageRating;
      this.save()
    }

    save(){
      this.id = ++id
      stores.push(Object.assign({},
        {authors: store().authors, books: [...store().books, this], reviews: store().reviews}
      ))
    }
  }
})()
