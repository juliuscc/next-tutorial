import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	border: 2px solid #aaa;
	border-radius: 5px;
	padding: 20px 50px;
	text-align: center;
	width: 300px;
	margin: 100px auto;
`

const Title = styled.h1`
	font-family: Helvetica, sans-serif;
`

class Home extends Component {
	render() {
		return (
			<Wrapper>
				<Title>Hello World!</Title>
			</Wrapper>
		)
	}
}

export default Home
