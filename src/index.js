import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const particlesBackground = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 3000,
            }
        }
    },
    // "interactivity": {
    //     "events": {
    //         "onhover": {
    //             "enable": true,
    //             "mode": "repulse"
    //         }
    //     }
    // }
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
