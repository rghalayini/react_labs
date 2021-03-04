import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// function Hi(){
//   return <div>Hello World!</div>
// }

//ReactDOM.render(<Hi/>, document.querySelector('#root'));



//switch states in function
function Room(){
  const [isLit, setLit]= React.useState(false);
  const brightness = isLit ? 'lit': 'dark';
  return (
    <div className={`room ${brightness}`}>the room is {isLit ? 'lit': 'dark'}
      <br/>
      <button onClick={() => setLit(!isLit)}>
        flip
      </button>
    </div>
  )
}
ReactDOM.render(<Room/>, document.querySelector("#root"));