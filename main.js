$(document).ready(function() {

    $.getJSON('./data.json', function(data){
        var table = document.getElementById('topSpotsTable');
      
        data.forEach(object => {
            var name = object.name;
            var desc = object.description;
            var loc = object.location;
            $('#topSpotsTable').after('<tr><td>' + name + '</td>'+ '<td>' + desc + '</td>'+ + '<td>' + loc + '</td></tr>');

        });
    }).fail(function(){
        console.log("An error has occurred.");
    });


});


