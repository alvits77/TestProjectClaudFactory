import React from 'react';
import {store, StoreContext} from './src/store';
import App from './src/App';

const AppContainer: React.FC = () => {
  return (
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  );
};

export default AppContainer;
