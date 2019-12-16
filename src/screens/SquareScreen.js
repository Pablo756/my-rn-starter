import React, { useReducer } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const ColorI = 15;
const SquareH = 150;
const SquareW = 150;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {...state, red: state.red + action.amount};
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : {...state, green: state.green + action.amount};
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {...state, blue: state.blue + action.amount};
    default:
      return state;
  }
};

const SquareScreen = (props) => {
  const { params } = props.navigation.state;
  const [state, dispatch] = useReducer(reducer, params.color);
  const SaveColor = () => {
    params.onChangeColor(state)
  };
  SaveColor();

  return (
  <View>
      <ColorCounter color='Red'
                    onIncrease={() => dispatch({ colorToChange: 'red', amount: ColorI})}
                    onDecrease={() => dispatch({ colorToChange: 'red', amount: -ColorI})}
      />
      <ColorCounter  color='Green'
                     onIncrease={() => dispatch({ colorToChange: 'green', amount: ColorI})}
                     onDecrease={() => dispatch({ colorToChange: 'green', amount: -ColorI})}

      />
      <ColorCounter  color='Blue'
                     onIncrease={() => dispatch({ colorToChange: 'blue', amount: ColorI})}
                     onDecrease={() => dispatch({ colorToChange: 'blue', amount: -ColorI})}
      />
      <View style={styles.containerImage}>
        <View style={{marginRight: 20,}}>
          <Text style={[styles.text, {color:'rgb(120,160,230)'}]}>Curr.: rgb({params.color.red},{params.color.green},{params.color.blue})</Text>
          <View style={{ //Square
            height: SquareH,
            width: SquareW,
            backgroundColor: `rgb(${params.color.red},${params.color.green},${params.color.blue})`,
          }} />
        </View>
        <View>
          <Text style={styles.text}>New: rgb({state.red},{state.green},{state.blue})</Text>
          <View style={{ //Square
            height: SquareH,
            width: SquareW,
            backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
          }} />
        </View>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginLeft: 5,
    marginTop: 20,
    marginBottom: 5,
  },
  containerImage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SquareScreen;