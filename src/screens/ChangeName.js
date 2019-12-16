import React, { useState } from 'react';
import  { View, Text, StyleSheet, Button, TextInput} from 'react-native';

const ChangeName = (props) => {
  const {params} = props.navigation.state;
  const [name, setName] = useState('');
  const [error, setError] = useState(false);


const saveName = () => {
    if (name.trim() === '') {
      setError(true);
    } else {
      params.onChangeName(name.trim());
      props.navigation.pop();
      setError(false);
    }
  };

  return (
    <View>
      <Text style={styles.text}>Current name: {params.name}</Text>
      <TextInput
        placeholder={'input new name'}
        autoCapitalize='none'
        autoCorrect={false}
        style={{
          height: 40, borderColor: 'blue',
          fontSize: 20,
          borderWidth: 1, textAlign: 'center',
        }}
        onChangeText={(value) => {
          setName(value);
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