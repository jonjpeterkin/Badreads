const Author = (function createAuthor(){
  var id = 0;

  return class Author{
    constructor(name){
      this.id = ++id;
      this.name = name;

      store.authors = [...store.authors, this]
    }

    findBooks(){
      var books = [];
      store.books.forEach(function(song){
        if (book.author.id == this.id){
          books.push(song)
        }
      }, this)

      return books;
    }
  }
})()
