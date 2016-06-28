$(document).ready(function(){ 

$.ajax({
		url: "https://tiyagencyweek.herokuapp.com/blogs",
		type:"GET",
		headers: {X_CSRF_TOKEN:"N5JGY3RWWTW51XZTYVSN"},
		success: function(blogs)
		{
			console.log(blogs);
		}
	});

$.ajax({
		url: "https://tiyagencyweek.herokuapp.com/boats",
		type:"GET",
		success: function(boats)
		{
			console.log(boats);
		}
	});

});