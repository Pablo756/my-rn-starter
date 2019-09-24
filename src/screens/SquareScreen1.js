import React, { useState } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native'

const ColorI = 15;

const SquareScreen1 = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Red</Text>
        <Button title='+' onPress={() =>{
          red < 246 ? setRed(red + ColorI) : null
        }}/>
        <Button title='-' onPress={() =>{
          red > 9 ? setRed(red - ColorI) : null
        }}/>

        <Text style={styles.text}>Green</Text>
        <Button title='+' onPress={() =>{
          green < 246 ? setGreen(green+ColorI) : null
        }}/>
        <Button title='-' onPress={() =>{
          green > 9 ? setGreen(green-ColorI) : null
        }}/>

        <Text style={styles.text}>Blue</Text>
        <Button title='+' onPress={() =>{
          blue < 246 ? setBlue(blue+ColorI) : null
        }}/>
        <Button title='-' onPress={() =>{
          blue > 9 ? setBlue(blue-ColorI) : null
        }}/>
        <Text style={styles.text}>rgb({red}, {green}, {blue})</Text>
        <View style={{alignItems: 'center',}}>
          <View style={{height: 100, marginTop: 10,
                width: 100, backgroundColor: `rgb(${red},${green},${blue})`,}}/>
        </View>
      </View>

    );
};

const styles = StyleSheet.create({
  container:{
    marginTop: 20,
  },
  text:{
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});

export default SquareScreen1;