// setting up default values
var app = app || {};

app.book = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/placeholder.png',
		title: 'No Title',
		author: 'Unknown',
		releaseDate: 'Unknown',
		keywords: 'None'
	}
});