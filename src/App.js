import { useState } from 'react';
import './App.css';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

function App() {
  const [courseGoal, setCourseGoal] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoal(prevGoals => {
      const updateGoals = [...prevGoals];
      updateGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updateGoals;
    });
  }

  const deleteItemHandler = goalId => {
    setCourseGoal(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  }

  let content = (
    <p style={{ textAlign: 'center' }} >No Goals found. maybe add one?</p>
  );

  if (courseGoal.length > 0) {
    content = (
      <CourseGoalList items={courseGoal} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals" > {content} </section>
    </div>
  );

}

export default App;
