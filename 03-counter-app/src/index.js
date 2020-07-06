import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css'

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value={12} />,divRoot);