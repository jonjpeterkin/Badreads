function populateBooks() {
  $('#book_row').empty();
  store().authors[store().authors.length-1].lowestBooks().forEach((book)=>{
    $('#book_row').append(`
      <div class="col-sm-4">
        <h3>One Of The Worst Books</h3>
        <img src="${book.coverImg}">
        <h4>${book.title}</h4>
        <h4>${book.averageRating}</h4>
        <button class="show_review" id="${book.id}">See Reviews</button>
      </div>
    `);
  })

  // Get worst books
  // Iterate to make columns
  // Add to each column
}
