import React, { Component } from 'react'
import Link from 'next/link'

class Home extends Component {
	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<Link href="/about">
					<a>About</a>
				</Link>
			</div>
		)
	}
}

export default Home
