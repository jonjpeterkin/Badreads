function bindReviewButtons() {
  $('.review_button').on ('click',function() {
    var rev = new Review(isbn,gr_id,book_title);
    showReviews($('#review_frame'));
  })
}

function showReviews(frame) {
  frame.hide();
  frame.empty();
  frame.append(rev.getWidget());
  frame.show();
}
