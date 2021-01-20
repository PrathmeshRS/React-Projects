import React from "react";
import "./SidebarOption.css"

function SidebarOption({ title, Icon, number, selected }) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            <Icon fontSize="small" className="sidebarOption__icon" />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
}

export default SidebarOption;