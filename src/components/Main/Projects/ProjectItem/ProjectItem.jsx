import React from 'react';
import css from './ProjectItem.module.css';

class ProjectItem extends React.Component {
    render() {
        return (
            <div className={`${css.ProjectItem} ${this.props.identifier}`}>
                <div className={css.increase}>
                    <img src={this.props.image} alt=""/>
                    <div className={css.AfterImage}>
                        <div className={css.projectTitle}>{this.props.projectTitle}</div>
                        <div className={css.SeeIt}>See it</div>
                        <span data-descr={this.props.projectText} className={css.readMore}>Rade More</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectItem;