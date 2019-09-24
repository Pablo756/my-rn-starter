import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

const randomRgb =() => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return 'rgb('+red+','+green+','+blue+')';
};

const SquareScreen = () => {
  const [colors, setColors] = useState([]);

    return (
      <View style={styles.container}>
        <Button title='Add a Color' onPress={() =>{
          setColors([...colors, randomRgb()])
        }}/>

        <FlatList
          keyExtractor={item => item}
          data={colors}
          renderItem={({ item }) => {
            return  <View style={{
              marginTop: 10, height: 100,
              width: 100, backgroundColor: item,
              marginLeft: 50,
            }} />
          }}
        />
      </View>
    );
};

const styles = StyleSheet.create({
container:{
  marginTop: 20,

},
});

export default SquareScreen;