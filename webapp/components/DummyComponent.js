import React from "react";
import ReactDOM from 'react-dom';
import webpackNumbers from '../libs/webpack-numbers';

const DummyComponent = () => {
  const test = webpackNumbers.numToWord(3);

  return (
    <div>
      {test}
    </div>
  );
}

const wrapper = document.getElementById("react-app");
wrapper ? ReactDOM.render(<DummyComponent />, wrapper) : false;

export default DummyComponent;
