import React from 'react';
import  { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen =() => {
  const arr = [
    {name: 'Friend 1', age: '20'},
    {name: 'Friend 2', age: '45'},
    {name: 'Friend 3', age: '32'},
    {name: 'Friend 4', age: '27'},
    {name: 'Friend 5', age: '53'},
    {name: 'Friend 6', age: '30'},
    {name: 'Friend 7', age: '42'},
    {name: 'Friend 8', age: '18'},
    {name: 'Friend 9', age: '22'},
    {name: 'Friend 10', age: '24'},
    {name: 'Friend 11', age: '80'},
    {name: 'Friend 12', age: '12'},
    {name: 'Friend 13', age: '56'},
    {name: 'Friend 14', age: '32'},
    {name: 'Friend 15', age: '40'},
    {name: 'Friend 16', age: '64'},
    {name: 'Friend 17', age: '25'},
    {name: 'Friend 18', age: '19'},
    {name: 'Friend 19', age: '42'},
  ];
  return (
    <FlatList
      keyExtractor = {(arr) => arr.name}
      data={arr}
      renderItem ={({ item }) => {
        return <Text style = {styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      }}
     />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    marginLeft: 50,
    fontSize: 20,
  },
});

export default ListScreen;