import React from 'react';
import css from './ProjectItem.module.css';

const ProjectItem = () => {
    return (
        <div className={css.ProjectItem}>
            <div className={css.ProjectItemTop}>
                <div className={css.textOnShadows}>1 dit</div>
            </div>
            <div className={css.ProjectItemBottom}>
                <div className={css.textBelowShadows}>2 dit</div>
            </div>
        </div>
    );
};

export default ProjectItem;
