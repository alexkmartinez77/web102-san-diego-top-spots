$(document).ready(function() {

    $.getJSON('./data.json', function(data){

        var array = data;
        array.forEach(object => {
            console.log(object.name);
        });
    });


});


