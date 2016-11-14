function populateBooks() {
  $('#book_row').empty();
  store().authors[store().authors.length-1].lowestBooks().forEach((book)=>{
    $('#book_row').append(`
      <div class="col-sm-4">
        <div class="w3-card-8">
          <img class="center" src="${book.coverImg}">
          <h4 class="w3-center">${book.title}</h4>
          <hr>
          <h4 class="w3-center">Average Rating:  ${book.averageRating}</h4>
          <button id=${book.id} class="w3-btn-block w3-dark-grey show_review">Show Reviews</button>
        </div>
      </div>
    `);
  })

  // Get worst books
  // Iterate to make columns
  // Add to each column
}
