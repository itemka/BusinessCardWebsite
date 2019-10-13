import React from 'react';
import css from './InformationAboutMy.module.css';

class InformationAboutMy extends React.Component {
    componentDidMount() {
        setInterval(() => this.changeFunction(), 3000);
    }

    state = {
        isChange: false,
    };

    changeFunction() {
        if (this.state.isChange === true) this.setState({isChange: false});
        else this.setState({isChange: true});
    }

    render() {
        return (
            <h1 className={css.infoAboutMyself}>
                <div>Hello!</div>
                {this.state.isChange === true
                    ? <div><span>I'm</span><span>Pavlenko Artyom</span></div>
                    : <div><span>I'm</span><span> Junior</span></div>
                }
                <div><span>I'm </span><span>Frontend Developer</span></div>
                <div><span>JS</span><span>React</span><span>Redux</span></div>
            </h1>
        );
    }
}

export default InformationAboutMy;
