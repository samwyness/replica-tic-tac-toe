import React from 'react';
import { useBoardState } from './hooks/useBoardState';
import Header from './components/Header';
import Footer from './components/Footer';
import Grid from './components/Grid';

import './App.css';

const App: React.FC = () => {
  const boardState = useBoardState();

  console.log('BOARD STATE', boardState);

  return (
    <div className="app">
      <Header boardState={boardState} />
      <Grid boardState={boardState} />
      <Footer boardState={boardState} />
    </div>
  );
};

export default App;
