import React, { useState } from 'react';
import  { View, Text, StyleSheet, Button, TextInput} from 'react-native';

const ChangeName = (props) => {
  const {params} = props.navigation.state;
  const [text, setChange] = useState('');
  const [error, setError] = useState(false);


  saveName = () => {
    if (text.trim() === '') {
      setError(true);
    } else {
      params.onChangeName(text.trim());
      props.navigation.pop();
      setError(false);
    }
  };

  return (
    <View>
      <Text style={styles.text}>Current name: {params.name}</Text>
      <TextInput
        placeholder={'input new name'}
        style={{
          height: 40, borderColor: 'blue',
          fontSize: 20,
          borderWidth: 1, textAlign: 'center',
        }}
        onChangeText={(value) => {
          setChange(value);
          setError(false);
        }}
      />
      {
        error ?
        <Text style={{color: 'red', fontSize: 20, marginTop: 10}}>Write
          name!</Text> : null
      }
        <View style={styles.button}>
        <Button
          title='Save Name'
          onPress={saveName}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  }
});

export default ChangeName;