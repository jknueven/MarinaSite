$(document).ready(function(){ 

$(".blogForm").on("submit", function(e){
		e.preventDefault();
		var title = $("#blogTitle").val();
		 /* var title = document.getElementById('blogTitle');*/
		var content = $("#blogContent").val();
		 /*or var content = document.getElementById('blogContent');*/
		var blogPost = {
			title:title,
			description:content,
		};
		console.log(blogPost);
		/*then ajax post within the function*/
		$.ajax({
		url: "https://tiyagencyweek.herokuapp.com/blogs/create",
		type:"POST",
		data: blogPost,
		headers: {X_CSRF_TOKEN:"N5JGY3RWWTW51XZTYVSN"},
		success: function(blogs)
		{
			console.log(blogs);
		}
	});
		/*then clear the text fields.*/
		$(".blogTitle").val(" ");
		$(".blogContent").val(" "); 
	
});
});
