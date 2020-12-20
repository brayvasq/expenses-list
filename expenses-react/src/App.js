import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';

const App = () => {
  return (
    <div className="">
      <div className="Container Container-one">
        <div className="Component Component-one">
          <FormComponent />
        </div>
      </div>
      <div className="Container Container-two">
        <div className="Component">
          <ListComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
