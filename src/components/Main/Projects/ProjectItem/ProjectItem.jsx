import React from 'react';
import css from './ProjectItem.module.css';
import Fade from 'react-reveal/Fade';

class ProjectItem extends React.Component {
    render() {
        return (
            <Fade right>
                <div className={`${css.ProjectItem} ${this.props.identifier}`}>
                    <div className={css.increase}>
                        <img src={this.props.image} alt=""/>
                        <div className={css.AfterImage}>
                            <div className={css.projectTitle}>{this.props.projectTitle}</div>
                            <a target="_blank" href={this.props.link} className={css.SeeIt}>See it</a>
                            <span data-descr={this.props.projectText} className={css.readMore}>
                                <a target="_blank" href={this.props.viewCode}>View code</a>
                            </span>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default ProjectItem;