$(document).ready(function() {

    $.getJSON('./data.json', function(data){
      
        data.forEach(object => {

            $('#topSpotsTable').after('<tr><td>' + object.name + '</td>'+ 
                                          '<td>' + object.description + '</td>'+ 
                                          '<td>' + 'https://www.google.com/maps?q=' + object.location[0] + ',' + object.location[1] + '</td></tr>');  

        });
    }).fail(function(){
        console.log("An error has occurred.");
    });
});


