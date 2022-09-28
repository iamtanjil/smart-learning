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
        </div>
    );
};

export default Person;