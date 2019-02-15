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

const BigButton = styled.button`
	background-color: #f1f1f1;
	color: black;
	font-size: 26px;
	padding: 16px 30px;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	text-align: center;
	margin-right: 20px;

	&:hover {
		background-color: black;
		color: white;
	}
`

class index extends Component {
	render() {
		return (
			<Wrapper>
				<Title>Counter example!</Title>
				<BigButton>+</BigButton>
				<BigButton>-</BigButton>
			</Wrapper>
		)
	}
}

export default index
