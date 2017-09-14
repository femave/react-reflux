import Reflux from 'reflux'
import $ from 'jquery'
import PeopleActions from  '../actions/PeopleActions.js'

let PeopleStore = Reflux.createStore({
	listenables: [PeopleActions],
	fetchPeople: function (){
		$.ajax({
			url: 'https://randomuser.me/api',
			dataType: 'json'
		})
		.done(function(peoples){
			let people = peoples.results
			console.log(people)
			// this.trigger(people)
		})
	}
})

module.exports = PeopleStore