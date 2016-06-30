$(document).ready(function(){ 

$(".login").on("submit", function(event){
	event.preventDefault();

	var uname = $(".Username").val();
	var pword = $(".Password").val();

	var userSub = {
		username: uname,
		password: pword,
	};

	$.ajax({
	url: "https://tiyagencyweek.herokuapp.com/auth/login",
	type: "POST",
	data: userSub,
	success: function(login)
	{
		if (login.token !== null) {
			localStorage.setItem('token', login.token);
			window.location.replace("/adminblog.html");
		}
		else if (login.token === null){
			alert("Username and Password do not Match or were incorrect!");
		}
	}
	});
});




$.ajax({
		url: "https://tiyagencyweek.herokuapp.com/blogs",
		type:"GET",
		headers: {X_CSRF_TOKEN:"N5JGY3RWWTW51XZTYVSN"},
		success: function(blogs)
		{
			var results = blogs.blogs;

			results.forEach(function(blog,index)
			{

			var itr = index + 1;
			var updated = moment(blog.posted).fromNow();

			$(".blogcontent").append("<div class='col-lg-9 col-md-9 col-sm-12 content'><b class='notch'></b><div class='row top'><div class='col-lg-12 col-md-12 header'><h3>"+blog.title+"</h3><h4>"+updated+"</h4></div></div><div class='row bottom'><div class='col-lg-12 col-md-12 blog'><p>"+blog.description+"</p></div></div></div>");
			});
		}
	});
});