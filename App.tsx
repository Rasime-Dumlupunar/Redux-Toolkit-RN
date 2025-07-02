import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/router/root Navigator';
import { Provider } from 'react-redux';
import store from './src/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
