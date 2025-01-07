import React from 'react';
import { View, StyleSheet } from 'react-native';
import BaiTap from './components/baitap'; 

const App = () => {
  return (
    <View style={styles.container}>
      <BaiTap />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#800000',
  },
});

export default App;