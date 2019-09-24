import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = (props) => {
  const {params} = props.navigation.state;
  const [counter, setCounter] = useState(params.counter);

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Button title='Increase'
            onPress={() => {
              setCounter(counter + 1);
              params.onChangeCounter(counter + 1);
            }}
          />
        </View>
        <View style={styles.container}>
          <Button title='Decrease'
            onPress={() => {
              setCounter(counter - 1);
              params.onChangeCounter(counter - 1);
            }}
          />
        </View>
        <Text style={styles.text}>
          Current Count: {counter}
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
  },
});

export default CounterScreen;