$(document).ready(function() {

    $.getJSON('./data.json', function(data){
      
        data.forEach(object => {

            $('#topSpotsTable').after('<tr><td class="spotName">' + object.name + '</td>'+ 
                                          '<td class="spotDesc">' + object.description + '</td>'+ 
                                          '<td class="spotLoc">' + '<a href="https://www.google.com/maps?q=' + object.location[0] + ',' + object.location[1] + '"' + '>' + 'Find it' + '</a></td></tr>');  

        });
    }).fail(function(){
        console.log("An error has occurred.");
    });
});

// Initialize and add the map
function initMap() {
// The location of Uluru
const uluru = { lat: -25.344, lng: 131.036 };
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
});
// The marker, positioned at Uluru
const marker = new google.maps.Marker({
    position: uluru,
    map: map,
});
}


