import React from 'react';
import css from './ProjectItem.module.css';

const ProjectItem = props => {
    return (
        <div className={css.ProjectItem}>
            <div className={css.ProjectItemTop}>
                <div className={css.textOnShadows}>See it</div>
            </div>
            <div className={css.ProjectItemBottom}>
                <div className={css.textBelowShadows}>{props.projectTitle}</div>
            </div>
        </div>
    );
};

export default ProjectItem;
