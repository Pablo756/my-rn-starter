import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const ColorI = 15;
const SquareH = 150;
const SquareW = 150;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) =>{
    color === 'red' && red + change < 256 && red + change > -1 ? setRed(red + change) : null;
    color === 'green' && green + change < 256 && green + change > -1 ? setGreen(green + change) : null;
    color === 'blue' && blue + change < 256 && blue + change > -1 ? setBlue(blue + change) : null;
  };

  return (
  <View>
      <ColorCounter onIncrease={() => setColor('red', ColorI)}
                    onDecrease={() => setColor('red', -ColorI)}
                    color='Red'
      />
      <ColorCounter  onIncrease={() => setColor('green', ColorI)}
                     onDecrease={() => setColor('green', -ColorI)}
                     color='Green'
      />
      <ColorCounter  onIncrease={() => setColor('blue', ColorI)}
                     onDecrease={() => setColor('blue', -ColorI)}
                     color='Blue'
      />

      <Text>rgb({red}, {green}, {blue})</Text>

      <View style={{ //Square
        height: SquareH,
        width: SquareW,
        backgroundColor: `rgb(${red},${green},${blue})`,
      }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;