import React from 'react';
import img from '../../images/person.png';
import './Person.css'
const Person = () => {
    return (
        <div>
            <div className="person-container">
                <img src={img} alt="" />
                <div>
                    <h4>Tanjil Ahmed</h4>
                    <p>Mirpur, Dhaka</p>
                </div>
            </div>
            <div className='person-info'>
                <div>
                    <h3>75<small>kg</small></h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>5.8</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>22<small>yrs</small></h3>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <h4 className='brake-title'>Add a Brake</h4>
                <div className="brake-time">
                    <h5>10s</h5>
                    <h5>20s</h5>
                    <h5>30s</h5>
                    <h5>40s</h5>
                    <h5>50s</h5>
                </div>
            </div>
            <div>
                <h4 className="brake-title">Exercise Details</h4>
                <div className="exercise-info">
                    <h5>Exercise Time:</h5>
                    <h5>2hrs</h5>
                </div>
                <div className="exercise-info">
                    <h5>Duration:</h5>
                    <h5>2hrs</h5>
                </div>
            </div>
            <button className='btn-activity'>Activity Completed</button>
        </div>
    );
};

export default Person;