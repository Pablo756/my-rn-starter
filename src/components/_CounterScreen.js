import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'



const CounterScreen = (props) => {
  const {params} = props.navigation.state;
  const [counter, setCounter] = useState(params.counter);
  const [countI, changeCount] = useState(1);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Current Counter: {counter}
        </Text>
        <View style={styles.container}>
          <Button title='Increase'
                  onPress={() => {
                    setCounter(counter + countI);
                    params.onChangeCounter(counter + countI);
                  }}
          />
        </View>
        <View style={styles.container}>
          <Button title='Decrease'
                  onPress={() => {
                    setCounter(counter - countI);
                    params.onChangeCounter(counter - countI);
                  }}
          />
        </View>

        <View style={styles.container1}>
          <Button title='+'
                  onPress={() => {
                    changeCount(countI + 1);
                  }}
          />
        </View>
        <View style={styles.container}>
          <Button title='-'
                  onPress={() => {
                    changeCount(countI - 1);
                  }}
          />
        </View>
        <Text style={styles.text1}>
          step value: {countI}
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  container1: {
    marginTop: 40,
  },
  text: {
    fontSize: 24,
    marginTop: 0,
    textAlign: 'center',
  },
  text1: {
    fontSize: 24,
    marginTop: 10,
    textAlign: 'center',
    color: 'rgb(255,150,150)',
  },
});

export default CounterScreen;