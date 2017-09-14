import React from 'react';
import PeoplePhoto from './peoplePhoto.js'
import PeopleTitle from './peopleTitle.js'

export default class PeopleFrame extends React.Component {
	constructor(){
		super()
	}
	render() {
		return (
			<div>
			<PeoplePhoto photo={this.props.people.picture.thumbnail}/>
			<PeopleTitle name={this.props.people.name}/>
			</div>
			);
	}
}

