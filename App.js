import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ChangeName from './src/screens/ChangeName';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen1 from './src/screens/SquareScreen1';
import SquareScreen from './src/screens/SquareScreen';



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Change: ChangeName,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    MySquare: SquareScreen1,
    Square: SquareScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Demo App'
    }
  }
);

export default createAppContainer(navigator);
