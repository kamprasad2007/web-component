import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './web-components/custom-element';

ReactDOM.render(
  <>
    <div>Web components</div>
    <custom-element  label="Testing"/>
  </>,
  document.getElementById('root')
);