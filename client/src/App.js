import React from 'react';
import './App.css';
import booksShowPage from './components/booksShowPage/booksShowPage';
import { Switch , Route } from 'react-router-dom';
import  RegisterPage  from './components/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path="/" component = {booksShowPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
      
    </div>
  );
}

export default App;
