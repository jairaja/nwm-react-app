import React from 'react';
import Body from './body/body';
import Header from './header/header';
import {
  RecoilRoot,
} from 'recoil';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <Body />
      </div>
    </RecoilRoot>
  );
}

export default App;
