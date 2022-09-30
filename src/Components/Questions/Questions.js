import React from 'react';
import './Question.css'
const Questions = () => {
    return (
        <div className='question-container'>
            <div className='question-li'>
            <li><strong>How does React work?</strong></li>
            <p><strong>Ans :</strong> The user interface is split up into separate, reusable code pieces called components by ReactJS. Since React components accept arbitrary inputs called properties or props, they operate similarly to JavaScript functions. As many components as need can exist without making our code clusttered in one place.</p>
            </div>
            <div className='question-li'>
            <li >
                <strong>Difference between props and State</strong> 
            </li>
            <p><strong>Ans :</strong> Data is transferred between components using props.A local data storage, the state is limited to the component and cannot be shared with other components.The state values in the component are updated using the this.setState property.</p>
            </div>
            <div className='question-li'>
                <li >
              <strong> Explain the Use of UseEffect?</strong>
            </li>
            <p><strong>Ans :</strong> Can use useEffect Hook to implement side effects in our components.

Fetching data, directly altering the DOM, and timers are a few characteristics of side effects.

Two arguments can be sent to useEffect. The second argument is not essential.</p>
</div>
        </div>
    );
};

export default Questions;