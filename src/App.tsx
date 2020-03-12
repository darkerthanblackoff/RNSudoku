import React from 'react';

import { StatusBar } from 'react-native';
import { Router } from './router';

import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#6A4D6B" />
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
