import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  const data = [
    {
      title: 'Forest',
      url: require('../../img/forest.jpg'),
      score: 9,
    },
    {
      title: 'Beach',
      url: require('../../img/beach.jpg'),
      score: 7,
    },
    {
      title: 'Mountain',
      url: require('../../img/mountain.jpg'),
      score: 10,
    },
  ];
  return (
    <FlatList
      keyExtractor = {(item) => item.title}
      data={data}
      renderItem ={({ item }) => {
        return <ImageDetail
          title={item.title}
          imageSource={item.url}
          score={item.score}
        />
      }}
    />
  );
};

const styles = StyleSheet.create ({});

export default ImageScreen;