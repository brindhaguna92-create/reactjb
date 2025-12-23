import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var sobj={
rno:1001,
sname:"JayaBrindha",
mark:[85,77,66,98,78,99],
rank:7,
grade:"O",
location:"GandhiGramam",
aadharno:278233561846,
phone:9952750512,
height:"152cm",
ismarried:true,
hobbies:{
  hobby1:"surfing",
  hobby2:"playingshuttle",
  hoby3:"readingarticles"}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={sobj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
