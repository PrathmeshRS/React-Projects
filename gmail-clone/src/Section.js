import React from 'react';
import './Section.css';

function Section({ title, Icon, selected, color }) {
    return (
        <div className={`section ${selected && "section--selected"}`}
            style={{
                borderBottom: `0.15rem solid ${color}`,
                color: `${selected && color}`,
            }}>
            <Icon fontSize="small" />
            <h3>{title}</h3>
        </div >
    )
}

export default Section
