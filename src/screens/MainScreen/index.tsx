import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import styles from './MainScreen.styles';

const MainScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>О приложении</Text>
    </SafeAreaView>
  );
};

export default MainScreen;
