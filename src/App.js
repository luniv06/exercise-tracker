import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbarcomponent';
import ExercisesList from './components/exerciselistcomponent';
import CreateExercisesList from './components/createexercisecomponent';
import EditExercisesList from './components/editexercisecomponent';
import CreateUser from './components/createusercomponent';

function App() {
  return (
    <Router>
      <div className='container'>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ExercisesList />} />
          <Route exact path="/edit/:id" element={<EditExercisesList />} />
          <Route exact path="/create" element={<CreateExercisesList />} />
          <Route exact path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
