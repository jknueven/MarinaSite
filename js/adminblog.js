$(document).ready(function(){ 

var title = $(".blogTitle").val();
 /*or*/ var title = document.getElementById('blogTitle');
var content = $(".blogContent").val();
 /*or*/ var content = document.getElementById('blogContent');

var blogPost = {
	title:title,
	content:content,
}


function postBlog(){
	title = title.submit();
	content = content.submit();
	blogPost = {title,content};
}

$.ajax({
		url: "https://tiyagencyweek.herokuapp.com/blogs/create",
		type:"POST",
		headers: {X_CSRF_TOKEN:"N5JGY3RWWTW51XZTYVSN"},
		success: function(blogs)
		{
			console.log(blogs);
		}
	});


	});