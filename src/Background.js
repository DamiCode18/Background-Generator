import React, {Component} from 'react';
import './Background.css';

let body = document.querySelector('body');

class Background extends Component {
	state = {
		value1 : '#ff0000',
		value2 : '#ffff00'
	};

	onValueOneChange = (e) => {
		this.setState({
			value1 : e.target.value
		});
	};
	onValueTwoChange = (e) => {
		this.setState({
			value2 : e.target.value
		});
	};
	componentDidMount() {}
	setGradient = () => {
		let css = document.querySelector('#p-tag');
		let cssBody = (body.style.background = `linear-gradient(to right,  ${this.state.value1}, ${this.state
			.value2})`);
		let text = `The current background color is: ${cssBody}`;
		if (css) {
			css.textContent = text;
		}
	};

	render() {
		return (
			<div>
				<h1> background generator </h1>
				<input
					className='color1'
					type='color'
					name='color1'
					value={this.state.value1}
					onChange={this.onValueOneChange}
					onInput={this.setGradient}
				/>
				<input
					className='color2'
					type='color'
					name='color2'
					value={this.state.value2}
					onChange={this.onValueTwoChange}
					onInput={this.setGradient}
				/>
				<h2> current css background</h2>
				<p id='p-tag'>
					The current background color is: linear-gradient(to right, {this.state.value1}, {this.state.value2})
				</p>
			</div>
		);
	}
}

export default Background;
