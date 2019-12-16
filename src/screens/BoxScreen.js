import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewChild1}>
        <Text style={styles.textStyle}>Child #1</Text>
      </View>
      <View style={styles.viewChild2}>
        <Text style={styles.textStyle}>Child #2</Text>
      </View>
      <View style={styles.viewChild3}>
        <Text style={styles.textStyle}>Child #3</Text>
      </View>
      <View style={styles.viewChild4}>
        <Text style={styles.textStyle}>Child #4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  viewChild1:{
    //flex: 2,
    height: 75,
    width: 75,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'green',
    padding: 2,
  },
  viewChild2:{
    //flex: 1,
    height: 75,
    width: 75,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'blue',
    padding: 2,
    marginHorizontal: 2,
    //marginVertical: 2,
    marginTop: 75
  },
  viewChild3:{
    //flex: 1,
    height: 75,
    width: 75,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'red',
    padding: 2,
    marginHorizontal: 2,
    //marginVertical: 2,
    alignSelf: 'flex-end'
  },
  viewChild4:{
    //flex: 1,
    height: 75,
    width: 75,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    padding: 2,
    //...StyleSheet.absoluteFillObject,

  },
  textStyle:{
    textAlign: 'center',
    fontSize: 20,
  }
});

export default BoxScreen;