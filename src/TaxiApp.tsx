import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text} from "react-native"
import { JSX } from 'react';


// 임포트하고

import Intro from './Intro'
import Main from './Main';
import Register from './Register';
import Login from './Login';
import NickName from './Main_Setting_NickName';

function TaxiApp() : JSX.Element {
    console.log("-- TaxiApp()")

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Intro' component={Intro}
            options={{headerShown:false}} />
            <Stack.Screen name='Login' component={Login}
            options={{headerShown:false}} />
            <Stack.Screen name='Register' component={Register}
            options={{headerShown:true, title:'회원가입'}} />
            <Stack.Screen name='Main' component={Main}
            options={{headerShown:false}} />
            <Stack.Screen name='NickName' component={NickName}
            options={{headerShown:false}} />
          </Stack.Navigator>
        </NavigationContainer>
    )
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
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: 200,
      backgroundColor: '#3498db',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });

export default TaxiApp;
