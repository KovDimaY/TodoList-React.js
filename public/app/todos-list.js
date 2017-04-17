import _ from 'lodash'
import React from 'react'
import ToDosListHeager from './todos-list-header'
import ToDosListItem from './todos-list-item'

export default class ToDosList extends React.Component {
	renderItems() {
		const props = _.omit(this.props, 'todos');

		return _.map(this.props.todos, (todo, index) => 
			<ToDosListItem key={index} {...todo} {...props}/>);
	}


	render(){
		return(
			<div className="row marketing">
		        <table className="table-striped">
					<ToDosListHeager />
					<tbody>
						{this.renderItems()}
					</tbody>
				</table>
		    </div>			
		);
	}
}