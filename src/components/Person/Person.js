import img from '../../images/person.png';
import './Person.css'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToastMessage = () => {
    toast.success('WoW You Complete All Task!', {
        position: toast.POSITION.TOP_RIGHT
    });
};
const Person = (props) => {
    const time = props.time;
    const [breakTime, setBreakTime] = useState(0);
    const handelBreakTime = (times) =>{
        setBreakTime(times);
        localStorage.setItem('time', times);
    }
    useEffect(()=>{
        const addedTime = localStorage.getItem('time');
        setBreakTime(addedTime);
    }, []);
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
                    <h5 onClick={() => handelBreakTime(10)}>10s</h5>
                    <h5 onClick={() => handelBreakTime(20)}>20s</h5>
                    <h5 onClick={() => handelBreakTime(30)}>30s</h5>
                    <h5 onClick={() => handelBreakTime(40)}>40s</h5>
                    <h5 onClick={() => handelBreakTime(50)}>50s</h5>
                </div>
            </div>
            <div>
                <h4 className="brake-title">Exercise Details</h4>
                <div className="exercise-info">
                    <h5>Exercise Time:</h5>
                    <h5>{time}hrs</h5>
                </div>
                <div className="exercise-info">
                    <h5>Break Time:</h5>
                    <h5>{breakTime}s</h5>
                </div>
            </div>
            <button onClick={showToastMessage} className='btn-activity'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Person;