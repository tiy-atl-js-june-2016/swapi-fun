import $ from 'jquery';

var movieList = $(".movies");
var baseURL = "http://swapi.co/api/";
var count = 1;

function logIt (data, status, xhr) {
  console.log(data);
  console.log(status);
  console.log(xhr);
};

function getPlanet (id) {
  var results = $.ajax({
    url: baseURL + "planets/" + id + "/",
    dataType: 'json',
    success: addPlanetToPage,
    error: logIt
  });
  // setTimeout(function () {
  //   console.log("synchronous log: " + results);
  //   console.log("synchronous json log: " + results.responseJSON);
  // }, 2000);
  console.log("the request is running");
};

function addPlanetToPage (data) {
  console.log(data);
  $(".planets").append(planetTemplate(data));
};

function planetTemplate (planet) {
  return `<li class="planet">${planet.name} is pretty ${planet.climate}</li>`;
};

var button = $(".get-planet").on('click', function (event) {
  event.preventDefault();
  getPlanet(count);
  count++;
});
