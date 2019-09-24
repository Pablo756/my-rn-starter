import React from  'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>
        Getting started
        with React Native!
      </Text>
      <Text style={styles.subStyle}>Made Pasha</Text>
    </View>
  )
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
  },
  subStyle: {
    fontSize: 20,
  },
})

export default ComponentScreen;