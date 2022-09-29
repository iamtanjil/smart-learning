import React,{useEffect, useState} from 'react';
import ActivitiesList from '../activitiesList/ActivitiesList';
import Person from '../Person/Person';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [time, setTime]= useState(0);

    useEffect(()=>{
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, []);

    const getDuration = times =>{
        setTime((times + time));
    };
    return (
        <div className='container'>
            <div className="skill-container">
                {
                    activities.map(activity=> <ActivitiesList
                    activity={activity}
                    key={activity.id}
                    time={getDuration}></ActivitiesList>)
                }
            </div>
            <div className="skill-aside">
                <Person time={time}></Person> 
            </div>
        </div>
    );
};

export default Activities;