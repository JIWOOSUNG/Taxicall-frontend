import {SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { JSX } from 'react';

function Main_Map(): JSX.Element {
  console.log('-- Register()()');

  return (
    <SafeAreaView style={styles.container}>
        {/** 지도자리 원래는 api써야하지만 현잰 그림 */}
        <View style={[styles.container, {transform: [{scaleX:1}, {scaleY:2}]}]}>
            <Icon name="building" size={300} color={'#34db98'} />
        </View>

        <View style={{position:'absolute', width:'100%', height:'100%', padding:10}} >
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextInput style={styles.input} placeholder={'출발지'}/>
                    <TextInput style={styles.input} placeholder={'도착지'}/>
                </View>
                <TouchableOpacity style={[styles.button, {marginLeft:10, justifyContent:'center'}]}>
                    <Text style={styles.buttonText}>호출</Text>
                </TouchableOpacity>
            </View>
        </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    button: {
      width: '70%',
      backgroundColor: '#3498db',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonDisable: {
      width: '70%',
      backgroundColor: 'gray',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
    input: {
      width: '70%',
      height: 40,
      borderWidth: 1,
      borderColor: 'grey',
      marginVertical: 10,
      padding: 10,
    },
  });

export default Main_Map;
