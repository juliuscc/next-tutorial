import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	border: 2px solid #aaa;
	border-radius: 5px;
	padding: 20px 50px;
`

const Title = styled.h1`
	font-family: Helvetica, sans-serif;
`

class index extends Component {
	render() {
		return (
			<Wrapper>
				<Title>Hello world!</Title>
			</Wrapper>
		)
	}
}

export default index
