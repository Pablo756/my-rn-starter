import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {
  return (
    <View style={{marginTop: 20, alignItems: 'center'}}>
      <Image source={imageSource} />
      <Text style={styles.text}>{title}</Text>
      <Text style={{textAlign: 'center', fontSize: 20}}>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default ImageDetail;