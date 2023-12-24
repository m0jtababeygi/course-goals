import './CourseInput.css';
import { useState } from 'react';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');


    const goalInputChangeHandler = event => {
        setEnteredValue(event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        props.onAddGoal(enteredValue);
        setEnteredValue('');
    }

    return (
        <form onSubmit={formSubmitHandler} >
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
            </div>
            <button type='submit' > Add Goal </button>
        </form>
    )
}

export default CourseInput;