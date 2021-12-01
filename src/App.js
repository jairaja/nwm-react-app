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
        <div className="app-header">
          <Header />
        </div>
        <div className="app-body">
          <Body />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
