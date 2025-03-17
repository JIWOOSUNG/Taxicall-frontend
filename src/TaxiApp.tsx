import {SafeAreaView, StyleSheet, Text} from 'react-native';

function TaxiApp(): JSX.Element {
  console.log('-- TaxiApp()');

  return (
    <SafeAreaView>
      <Text style={styles.textBlack}>Hello React Native</Text>
      <Text style={styles.textBlue}>Taxi App</Text>
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

export default TaxiApp;
