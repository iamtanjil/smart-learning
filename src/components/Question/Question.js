import React from 'react';

const Question = () => {
    return (
        <div>
            <h2>How Does React Work?</h2>
            <p> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            <h2>Defference between props and state.</h2>
            <p><b>Props:</b>Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable. <br /> <b>State: </b>The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
            <h2>What does useEffect do?</h2>
                <ol type='1'>
                    <li>useEffect() is for side-effects</li>
                    <li>Dependencies argument</li>
                    <li>Side-effect cleanup</li>
                    <li>Fetching data</li>
                </ol>
        </div>
    );
};

export default Question;