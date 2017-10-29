var app = app || {};

$(function()
{
	var books = [
		{
			title: 'Godel Escher Bach', 
			author: 'Douglas Hoffsteader',
			releaseDate: '1979',
			keywords: 'artificial intelligence'
		},
		{
			title: 'The Little Book on CoffeeScript',
			author: 'Alex  MacCaw',
			releaseDate: '2012',
			keywords: 'coffeescript programming'
		}
	];
	new app.LibraryView( books );
});