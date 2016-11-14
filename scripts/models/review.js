const Review = (function createReview(){
  var id = 0;

  return class {
    constructor(isbn, goodreads_id, book_title){
      this.isbn = isbn;
      this.goodreads_id = goodreads_id;
      this.book_title = book_title;
      this.save()
    }

    save(){
      this.id = ++id
      stores.push(Object.assign({},
        {authors: store().authors, books: store().books, reviews: [...store().reviews, this]}))
    }

    getWidget(){
      return `<div id="goodreads-widget">
        <div id="gr_header"><h1><a href="https://www.goodreads.com/book/show/${this.goodreads_id}">Goodreads reviews for ${this.book_title}</a></h1></div>
        <iframe id="the_iframe" src="https://www.goodreads.com/api/reviews_widget_iframe?format=html&isbn=${this.isbn}&links=660&num_reviews=&review_back=ffffff&stars=000000&stylesheet=&text=444" width="575" height="400" frameborder="0"></iframe>
        <div id="gr_footer">
          <a class="gr_branding" target="_blank" href="https://www.goodreads.com/book/show/${this.goodreads_id}">Reviews from Goodreads.com</a>
        </div>
      </div>`
    }
  }
}())
