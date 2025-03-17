import {SafeAreaView, StyleSheet, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import { JSX } from 'react';


import Main_Map from './Main_Map';
import Main_List from './Main_List';
import Main_Setting from './Main_Setting';

function Main(): JSX.Element {
  console.log('-- Main()');

  const BottomTap = createBottomTabNavigator()

  return (
    <BottomTap.Navigator>
      <BottomTap.Screen
        name="Main_Map"
        component={Main_Map}
        options={{headerShown: false,
          tabBarIcon: ({color,size})=> (<Icon name="map" size={size} color={color}/>)
        }}
      />
      <BottomTap.Screen
        name="Main_List"
        component={Main_List}
        options={{headerShown: false,
          tabBarIcon: ({color,size})=> (<Icon name="phone" size={size} color={color}/>)
        }}
      />
      <BottomTap.Screen
        name="Main_Setting"
        component={Main_Setting}
        options={{headerShown: false, title: '환경설정',
          tabBarIcon: ({color,size})=> (<Icon name="cog" size={size} color={color}/>)
        }}
      />
    </BottomTap.Navigator>
  );
}

const styles = StyleSheet.create({
  textBlack: {
    fontSize: 18,
    color: 'black',
  },
  textBlue: {
    fontSize: 18,
    color: 'blue',
  },
});

export default Main;
