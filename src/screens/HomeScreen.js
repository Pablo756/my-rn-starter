import React, { useState, useReducer } from 'react';
import { Text, StyleSheet, View, ScrollView, Button } from 'react-native';

const reducer = (colors, value) => {
  return value
};

const HomeScreen = (props) => {
  const [name, setName] = useState('Pablo');
  const [counter, setCounter] = useState(756);
  const [colors, setColor] = useReducer(reducer, { red: 60, green: 165, blue: 255 });
  const {navigate} =  props.navigation;

    return (
      <View style={styles.container}>
        <View><Text style={styles.text}>Hi {name}! Last counter: {counter}</Text></View>
        <View style={styles.containerImage}>
          <View><Text style={{fontSize: 26}}>Last color: </Text></View>
          <View style={[styles.image,{backgroundColor: `rgb(${colors.red}, ${colors.green}, ${colors.blue})`,}]} />
        </View>
        <ScrollView>
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
              onPress={() => navigate('Square', {color: colors, onChangeColor: setColor})}
            />
          </View>
          <View style={styles.button}>
            <Button
              style={styles.button}
              title='Go to MY Square Demo'
              onPress={() => navigate('MySquare')}
            />
          </View>
          <View style={styles.button}>
            <Button
              style={styles.button}
              title='Go to Box Demo'
              onPress={() => navigate('Box')}
            />
          </View>
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    textAlign: 'center'
  },
  button: {
     marginTop: 10,
  },
  container: {

  },
  containerImage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    marginTop: 5,
    width: 25,
    height: 25,
  },
});

export default HomeScreen;
