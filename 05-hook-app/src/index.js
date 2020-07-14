import React from 'react';
import ReactDOM from 'react-dom';
//import { HooksApp } from './HooksApp';
//import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';


ReactDOM.render(
    <CounterWithCustomHook />,
  document.getElementById('root')
);

