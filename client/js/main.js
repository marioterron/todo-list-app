// Event on click completed task
$('#task-done').on('click', function(e) {
	e.preventDefault();

	const url = $(this).attr("href")
	const method = 'PUT'
	const data = 'completed=' + true

	$.ajax({ url, method, data })
		.done(response => {
			location.reload();
		})
})

// Event on click remove task
$('#task-remove').on('click', function(e) {
	e.preventDefault();

	const url = $(this).attr("href")
	const method = 'DELETE'

	$.ajax({ url, method })
		.done(response => {
			$(this).parent().parent().remove()
		})
})

// Event on click edit btn
$('#task-edit').on('click', function(e) {
  e.preventDefault();

  $(this).closest('li').find("form input").removeClass("hidden")
  $(this).closest('li').find("p").addClass("hidden")
})

// Event on submit new title task
$(".edit-form").on("submit", function(e) {
	e.preventDefault();

	const url = $(this).attr("action")
	const editedValue =  $(this).find('input').val()
	const keyToEdit = $(this).find('input').attr('name')
	const data = keyToEdit + '=' + editedValue
	const method = 'PUT'

	$.ajax({ url, method, data }) .done(response => {
			$(this).closest('li').find("p").text(editedValue)
			$(this).closest('li').find("p").removeClass("hidden")
			$(this).closest('li').find("form input").addClass("hidden")
		})
})
