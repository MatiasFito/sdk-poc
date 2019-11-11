import React from "react";
import ReactDOM from 'react-dom';
import webpackNumbers from '../../../library/webpack-numbers';

const DummyComponent = () => {
  const test = `Using library on the frontend to get text for number 3: ${webpackNumbers.numToWord(3)}`;

  return (
    <div>
      {test}
    </div>
  );
}

const wrapper = document.getElementById("react-app");
wrapper ? ReactDOM.render(<DummyComponent />, wrapper) : false;

export default DummyComponent;
