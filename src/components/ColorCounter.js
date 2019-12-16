import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {

  return (
    <View>
      <Text style={styles.text}>{color}</Text>
      <Button  onPress={onIncrease} title={'Increase '+ color} />
      <Button  onPress={onDecrease} title={'Decrease '+ color} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default ColorCounter;