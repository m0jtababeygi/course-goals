// import './CourseInput.css';
import styles from './CourseInput.module.css';
import { useState } from 'react';
import Button from '../../UI/Button/Button';
// import {styled} from 'styled-components';


// const FormControl = styled.div`
//     margin: 0.5rem 0;
  
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => props.invalid ? 'red' : 'black'};
//   }
  
//   & input {
//     display: block;
//     width: 100%;
//     // border: 1px solid #ccc;
//     border: 1px solid ${props => props.invalid ? 'red' : '#ccc' };
//     background: ${props => props.invalid ? '@ffd7d7' : 'transparent' };
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & button{
//     margin-top: 0.6rem;
//   }
  
//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     background: rgb(243, 221, 221);
//     border-color: red;
//   }

//   &.invalid label {
//     color: red;
//   }

//   &.invalid button {
//     opacity: 0.4;
//     pointer-events: none;
//   }

// `;

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        if(event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    }

    const formSubmitHandler = event => {
        event.preventDefault();
        if(enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
        setEnteredValue('');
    }

    return (
        <form onSubmit={formSubmitHandler} >
            {/* <FormControl className={!isValid && 'invalid'} > */}
            <div className={` ${styles['form-control']} ${!isValid && styles.invalid} `} >
                <label >Course Goal</label>
                <input 
                // style={{
                //     borderColor: !isValid ? 'red' : '#ccc',
                //     background: !isValid ? 'salmon' : 'transparent'
                // }}
                    type="text" value={enteredValue} onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default CourseInput;