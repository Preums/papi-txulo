
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