import $ from 'jquery';

var movieList = $(".movies");
var baseURL = "http://swapi.co/api/";
var count = 1;

function getPlanet (id) {
  var results = $.ajax({
    url: baseURL + "planets/" + id + "/"
  });
  console.log(results);
  console.log(results.responseJSON);
  return results.responseJSON;
}

function planetTemplate (planet) {
  return `<li class="planet">${planet.name} is pretty ${planet.climate}</li>`;
};

var button = $(".get-planet").on('click', function (event) {
  var planet = getPlanet(count);
  count++;
  console.log(count);
  $(".planets").append(planetTemplate(planet));
});
