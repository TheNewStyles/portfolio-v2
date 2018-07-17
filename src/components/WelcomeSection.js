import React, { Component } from 'react';
import Typist from 'react-typist';

import '../styles/WelcomeSection.css';

class WelcomeSection extends Component {
    constructor(props) {
        super(props);
        this.createStatic();
    }

    componentDidMount() {
        this.createStatic();
    }

    createStatic() {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext('2d');

		canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.id = "canvas";

		let imageData = ctx.createImageData(canvas.width, canvas.height);
        document.body.appendChild(canvas);

		(function loop() {

		    for (var i = 0, a = imageData.data.length; i < a; i++) {
		        imageData.data[i] = (Math.random() * 255)|0;
		    }

		    ctx.putImageData(imageData, 0, 0);
		    requestAnimationFrame(loop);

		})();
    }


    render() {
        return (
            <section id="welcome-section">
                <div className="welcome-container">
                    <h1>TYLER PETERSON</h1>
                    <Typist>
                        <h3>DEVELOPER</h3>
                        <h3>DESIGNER</h3>
                        <h3>TESTER</h3>
                    </Typist>
                </div>
                <div id="canvas-layer">
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WelcomeSection;
