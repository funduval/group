
// grab the input of the search into a variable
var searchTerm = $("#searchTerm").val().trim();

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
  'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
  'q': searchTerm
});

$("#searchTerm").on('click', function() {

	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(r) {
		 
	  console.log(r);
	  var results = r.response.docs;
	  console.log(results)




	});
})

