import React, { Component } from 'react';
import '../styles/WelcomeSection.css';

class WelcomeSection extends Component {
    generateNoise(opacity) {
        if ( !!!document.createElement('canvas').getContext ) {
           return false;
        }

        var canvas = document.createElement("canvas"),
        ctx = canvas.getContext('2d'),
        x, y,
        number,
        opacity = opacity || .2;

        canvas.width = 45;
        canvas.height = 45;

        for ( x = 0; x < canvas.width; x++ ) {
           for ( y = 0; y < canvas.height; y++ ) {
              number = Math.floor( Math.random() * 60 );

              ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
              ctx.fillRect(x, y, 1, 1);
           }
        }

        document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
     }

    render() {
        return (
            <section id="welcome-section">
            {this.generateNoise(1)}
                <div className="welcome-container">
                    <h1>TYLER PETERSON</h1>
                    <h3>DEVELOPER</h3>
                    <h3>DESIGNER</h3>
                    <h3>TESTER</h3>
                </div>
                <div className="scroll-downs">
                    <div className="mousey">
                        <div className="scroller"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WelcomeSection;
