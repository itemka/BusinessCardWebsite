import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ReactBurgerMenu from "./components/ReactBurgerMenu/ReactBurgerMenu";
import Particles from 'react-particles-js';

const particlesBackground = {
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 2000,
                blur: 5
            }
        }
    }
};

function App() {
    return (
        <div className="App">
            <ReactBurgerMenu/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;