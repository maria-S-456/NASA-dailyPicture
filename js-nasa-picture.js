var searchApiUrl = 'https://api.nasa.gov/planetary/apod';
var apiKey = 'EhG1k6n5owkDLwymr8VLuyohnQbd4xYK3bUigawl';


function searchResults(data) {
  var results = $('.content-div');
  results.empty();
  var imageLink = data.url;
  var heading = data.title;
  var descp =data.explanation;
  var date= data.date;
  var elem = '<h2> '+ heading +' </h2><div id="picture-div"><img class="img-responsive" src="'+ imageLink +'" /></a></div><div id="text-div"><p> '+ descp +' </p></div>';
  results.append(elem);
}

function searchNasa(searchText, handleResultsFn) {
  var data = {
  api_key: apiKey,
  date: searchText,
  }

  $.getJSON(searchApiUrl, data, handleResultsFn);
}

function handleSearchSubmit() {
  $('#input-form').submit(function(event){
  event.preventDefault();
  var searchText = $(event.currentTarget).find('.input-box').val().trim();
  searchNasa(searchText, searchResults);
  });
}

$(document).ready(function() {
  handleSearchSubmit();
});