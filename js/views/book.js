var app = app || {};

app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	template: _.template( $('#bookTemplate').html() ),

	render: function() {
// template is a function that takes a JSON obj and returns html
// and this.el is what we defined in tagName *above*
// we use $el to get access to jquery html()
		this.$el.html( this.template( this.model.toJSON() ));

		return this;
	}
});