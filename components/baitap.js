import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BaiTap = () => {
  return (
    <View style={styles.square}>
      <Text style={styles.text}>Hello, world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#c0c0c0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color:'#000000' ,
    fontSize: 16,
  },
});

export default BaiTap;