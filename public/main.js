$(document).ready(() => {
  $.getJSON("./data.json", (data) => {
    data.reverse().forEach((topSpot) => {
      //Destructure each topSpot
      let {
        name,
        description,
        location: [long, lat],
      } = topSpot;

      $("#topSpotsTable").after(`<tr><td class="spotName">${name}</td>
                                           <td class="spotDesc">${description}</td>
                                           <td class="spotLoc"><a href="https://www.google.com/maps?q=${long},${lat}">Map it</a></td></tr>`);
    });
  }).fail(() => {
    console.log("An error has occurred.");
  });
});
