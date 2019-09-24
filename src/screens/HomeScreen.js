import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = (props) => {
  const [name, setName] = useState('User');
  const [counter, setCounter] = useState(0);
  const {navigate} =  props.navigation;

    return (
      <View>
        <Text style={styles.text}>Hi {name}! Last counter: {counter}</Text>
        <View style={styles.button}>
          <Button
            title='Change Name'
            onPress={() => navigate('Change', {name: name, onChangeName: setName})}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Go to Components Demo'
            onPress={() => navigate('Components')}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title='Go to List Demo'
            onPress={() => navigate('List')}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title='Go to Image Demo'
            onPress={() => navigate('Image')}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title='Go to Counter Demo'
            onPress={() => navigate('Counter', {counter: counter, onChangeCounter: setCounter})}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title='Go to Color Demo'
            onPress={() => navigate('Color')}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title='Go to Square Demo'
            onPress={() => navigate('Square')}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title='Go to MY Square Demo'
            onPress={() => navigate('MySquare')}
          />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    textAlign: 'center',

  },
  button: {
     marginTop: 10,
  }
});

export default HomeScreen;
