import React from 'react';
import Navigation from './navigation';
import { StatusBar } from 'react-native';
import { COLORS } from './constants';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.white} />
      <Navigation />
    </>
  );
};

export default App;
