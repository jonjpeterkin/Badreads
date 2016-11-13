const Review = (function createReview(){
  var id = 0;

  return class {
    constructor(isbn, gr_id, book_title){
      this.id = ++id;
      this.isbn = isbn;
      this.book_id = gr_id;
      this.book_title = book_title;
    }

    getWidget(){
      return `<div id="goodreads-widget">
        <div id="gr_header"><h1><a href="https://www.goodreads.com/book/show/${gr_id}">Goodreads reviews for ${book_title}</a></h1></div>
        <iframe id="the_iframe" src="https://www.goodreads.com/api/reviews_widget_iframe?did=20973&format=html&isbn=${isbn}&links=660&min_rating=5&num_reviews=&review_back=ffffff&stars=000000&stylesheet=&text=444" width="575" height="400" frameborder="0"></iframe>
        <div id="gr_footer">
          <a class="gr_branding" target="_blank" href="https://www.goodreads.com/book/show/2956.The_Adventures_of_Huckleberry_Finn?utm_medium=api&utm_source=reviews_widget">Reviews from Goodreads.com</a>
        </div>
      </div>`
    }
  }
}())
