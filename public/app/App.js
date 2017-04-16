import React, { Component } from 'react'
import ReactDom from 'react-dom'

class App extends Component {
	
	render(){
		return(
			<div>Hello from React Component!</div>
		)
	}
}

ReactDom.render(<App />, document.getElementById('app'))