jQuery(document).ready(function($) {$(document).ready(function () {
		// Active navbar status
		$('nav ul li a').click(function (e) {
	        e.preventDefault();
	        $('nav ul li a').removeClass('active');
	        $('nav ul li a').css('text-decoration','none');
	        $(this).addClass('active');
	        $(this).css('text-decoration','underline');              
		});            
		 	// Scrollspy fluide
		$(function() {
			$('header a').on('click', function(e) {
				e.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(this.hash).offset().top
				}, 1000, function() {
					window.location.hash = hash;
				});
			});
		});       			            
	});
});

        function menuTable(file) {
        	$.getJSON("js/data/" +file+".json", function( data ) {
          var items = [];
          $.each( data, function( key, val ) {
            if (val.vegetarian==="true") {
              items.push( '<tr><td>' + val.name + ' <img src="img/vLogo.png" alt="Vegetarian logo"></td><td>' + val.price + '</td></tr>' + '<tr><td>' + val.description +'</td></tr>' );
            }
            else {
              items.push( "<tr><td>" + val.name + "</td><td>" + val.price + "</td></tr>" + "<tr><td>" + val.description +"</td></tr>" );  
            }
          });
         
          $( "<table/>", {
            "class": "my-new-table",
            html: items.join( "" )
          }).appendTo( "#" +file+" table" );
        });}

		function shortMenuTable(file) {
			$.getJSON("js/data/" +file+".json", function( data ) {
          var items = [];
		  $.each( data, function( key, val ) {
		      items.push( "<tr><td>" + val.name + "</td><td>" + val.price + "</td></tr>" );  
		 });
		 
		  $( "<table/>", {
		    "class": "my-new-table",
		    html: items.join( "" )
		  }).appendTo( "#" +file+" table" );
		});}

    function kidsMenuTable(file) {
        $.getJSON("js/data/" +file+".json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          if (val.else==="true") {
            items.push( "<tr><td>" + val.name + "</td></tr><td> ou </td></tr>" );
          }
          else {
            items.push( "<tr><td>" + val.name + "</td></tr>" );  
          }
        });
       
        $( "<table/>", {
          "class": "my-new-table",
          html: items.join( "" )
        }).appendTo( "#" +file+" table" );
      });}
