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
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercisesList} />
          <Route path="/create" component={CreateExercisesList} />
          <Route path="/user" component={CreateUser} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
