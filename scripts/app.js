$(function(){
	$('form').submit(function(){
		event.preventDefault()
		goodreadsAdapter($('#author_name').val())
	})
})