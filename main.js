$(document).ready(function() {

    $.getJSON('./data.json', function(data){
      
        data.reverse().forEach(object => {

            $('#topSpotsTable').after(`<tr><td class="spotName"> ${object.name} </td>
                                           <td class="spotDesc"> ${object.description} </td>
                                           <td class="spotLoc"><a href="https://www.google.com/maps?q=${object.location[0]},${object.location[1]}">Map it</a></td></tr>`);
        });
    }).fail(function(){
        console.log("An error has occurred.");
    });
});


