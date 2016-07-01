$(document).ready(function(){ 

$('.bxslider').bxSlider();

$.ajax({
		url: "https://tiyagencyweek.herokuapp.com/blogs",
		type:"GET",
		headers: {X_CSRF_TOKEN:"N5JGY3RWWTW51XZTYVSN"},
		success: function(blogs)
		{
			console.log(blogs);
			var position = blogs.blogs.length - 1;
			var lastBlog = blogs.blogs[position];
			var updated = moment(lastBlog.posted).fromNow();

			$(".blogcontent").append("<div class='col-lg-9 col-md-9 col-sm-12 content'><b class='notch'></b><div class='row top'><div class='col-lg-12 col-md-12 header'><h3>"+lastBlog.title+"</h3><h4>"+updated+"</h4><a href='https://twitter.com/gimmeaboat_lake'><img src='images/twitter.png' class='twitterIcon'></a><a href='https://www.facebook.com/BrookvilleLakeMarina/?skip_nax_wizard=true'><img src='images/facebook.jpg' class='facebookIcon'/></a></div></div><div class='row bottom'><div class='col-lg-12 col-md-12 blog'><p>"+lastBlog.description+"</p></div></div></div>");
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