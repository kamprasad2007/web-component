import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './web-components/custom-element';

const App = () => {

  useEffect(()=>{
    document.addEventListener('mouseClicked', e => console.log(e.detail))
  },[]);

  return(
    <>
      <div>Web components</div>
      <custom-element label="Testing" />
    </>
  )
}

ReactDOM.render(
  <App />
,
  document.getElementById('root')
);