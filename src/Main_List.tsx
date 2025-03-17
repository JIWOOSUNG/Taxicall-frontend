import {SafeAreaView, StyleSheet, Text} from 'react-native';
import { JSX } from 'react';


function Main_List(): JSX.Element {
  console.log('-- Register()()');

  return (
    <SafeAreaView>
      <Text style={styles.textBlack}>Hello React Native</Text>
      <Text style={styles.textBlue}>Main_List App</Text>
    </SafeAreaView>
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

export default Main_List;
