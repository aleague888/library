// setting collection to the book model's default values

var app = app || {};

app.Library = Backbone.Collection.extend({
	model: app.Book
});