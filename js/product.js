$(document).ready(function(){ 


$.ajax({
		url: "https://tiyagencyweek.herokuapp.com/boats",
		type:"GET",
		success: function(boats)
		{
			var results = boats.boats;
			results.forEach(function(boat,index){

			var itr = index + 1;

				$(".Products").append("<div class='col-lg-6 boat"+itr+"'><div class='wrapper"+itr+"'><img src='"+boat.picture+"'><ul><li>Name: "+boat.name+"</li><li>Description: "+boat.description+"</li><li>Price: $ "+boat.price+"</li></ul></div></div>")

			})
		}

	});

/*$.ajax({
		url: "https://tiyagencyweek.herokuapp.com/boats",
		type:"GET",
		success: function(boats)
		{
			//var results = boats.boats['st2010','bmbf2009','b1998','rmb2017'];
			var st2010 = boats.boats[0];
			var bmbf2009 = boats.boats[1];
			var b1998 = boats.boats[2];
			var rmb2017 = boats.boats[3];
			
			var pricepoint1 = b1998.price;
			var pricepoint2 = st2010.price;
			var pricepoint3 = bmbf2009.price;
			var pricepoint4 = rmb2017.price;

			$(".boat1").append("<div class='wrapper1'><img src='"+b1998.picture+"'><ul><li>Name: "+b1998.name+"</li><li>Description: "+b1998.description+"</li><li>Price: $ "+pricepoint1+"</li></ul></div");
			$(".boat2").append("<div class='wrapper1'><img src='"+st2010.picture+"'><ul><li>Name: "+st2010.name+"</li><li>Description: "+st2010.description+"</li><li>Price: $ "+pricepoint2+"</li></ul></div");
			$(".boat3").append("<div class='wrapper1'><img src='"+bmbf2009.picture+"'><ul><li>Name: "+bmbf2009.name+"</li><li>Description: "+bmbf2009.description+"</li><li>Price: $ "+pricepoint3+"</li></ul></div");
			$(".boat4").append("<div class='wrapper1'><img src='"+rmb2017.picture+"'><ul><li>Name: "+rmb2017.name+"</li><li>Description: "+rmb2017.description+"</li><li>Price: $ "+pricepoint4+"</li></ul></div");
		
		}
	});*/

});