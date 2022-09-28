import React,{useEffect, useState} from 'react';
import ActivitiesList from '../activitiesList/ActivitiesList';
import Person from '../Person/Person';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(()=>{
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, []);

    return (
        <div className='container'>
            <div className="skill-container">
                {
                    activities.map(activity=> <ActivitiesList
                    activity={activity}
                    key={activity.id}></ActivitiesList>)
                }
            </div>
            <div className="skill-aside">
                <Person></Person> 
            </div>
        </div>
    );
};

export default Activities;