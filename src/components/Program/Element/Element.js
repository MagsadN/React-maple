import React from 'react'
import './Element.css'

const Element = (props) => {
        let element = props.location.elementProps;
    if (element !== undefined){
            console.log(element.name);
            return (
            <div className="Element">
                <h3>{element.name}</h3>
            </div>
            );
    } else {
        return (
            <div className="Element">
            <h3>Element</h3>
            </div>
        );
    }
}

export default Element