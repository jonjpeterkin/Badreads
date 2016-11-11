const Book = (function createBook(){
  var id = 0;

  return class Book{

    constructor(name, author, averageRating){
      this.id = ++id;
      this.author = author;
      this.name = name;

      this.averageRating = averageRating;
      store.books = [...store.books, this]
    }
  }
})()
