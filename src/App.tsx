import React from 'react';

import { StatusBar } from 'react-native';
import { Router } from './router';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#6A4D6B" />
      <Router />
    </>
  );
};

export default App;
