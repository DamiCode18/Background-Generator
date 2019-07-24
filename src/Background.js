import React, {Component} from 'react'
import './Background.css'


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

const setGradient = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = "The current background color is: " + body.style.background + ";";
}



// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);


class Background extends Component {
    render() {
        return (
            <div>
                <h1> background generator </h1>
                <input className="color1" type="color" name="color1" value="#414141" />
                <input className="color2" type="color" name="color2" value="#ff0000" />
                <h2> current css background</h2>
                <h3></h3>
            </div>
        );
    }

}

export default Background;