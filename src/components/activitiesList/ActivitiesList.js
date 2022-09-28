import React from 'react';
import './ActivitiesList.css'

const ActivitiesList = (props) => {
    const {name, details, duration, img} = props.activity;
    return (
        <div className='skills-container'>
            <img src={img} alt="" />
            <div className="skill-details">
                <h4>{name}</h4>
                <p>{details.slice(0, 100)}</p>
                <h5>Duration: {duration}Hrs.</h5>
            </div>
            <button className='btn-done'>Done This Job</button>
        </div>
    );
};

export default ActivitiesList;