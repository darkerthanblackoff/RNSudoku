import React from 'react';

import { StatusBar } from 'react-native';
import { Router } from './router';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import { PersistGate } from 'redux-persist/es/integration/react';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#6A4D6B" />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Router />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
