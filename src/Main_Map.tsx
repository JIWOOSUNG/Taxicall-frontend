import {SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

function Main_Map(): JSX.Element {
  console.log('-- Register()()');

  const [initialRegion, setInitialRegion] = useState({
    latitude : 37.5666612,
    longitude : 126.9783785,
    latitudeDelta : 0.0922,
    longitudeDelta : 0.0421
  })

  const [showBtn,setShowBtn] = useState(false)
  const handleLongPress = async(event:any) => {
    setShowBtn(true)
  }

  const handleAddMarker = (title:string) => {
    setShowBtn(false)
  }

  return (
    <SafeAreaView style={styles.container}>
        {/** 지도자리 원래는 api써야하지만 현잰 그림 */}
        <MapView style={styles.container} provider={PROVIDER_GOOGLE}
          region={initialRegion}>
        </MapView>


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
{/* 내 위치 */}
        <TouchableOpacity style={[{position:'absolute', bottom:20, right:20}]}>
          <Icon name='crosshairs' size={40} color={'#3498db'} />
        </TouchableOpacity>

        {showBtn && <View style={{position:'absolute', top : hp(50)-45, left: wp(50)-75, height : 90, width:150}}>
          <TouchableOpacity style={[styles.button, {flex:1, marginVertical:1}]}
          onPress={() => handleAddMarker('출발지')}
          >
            <Text style={styles.buttonText} >출발지로 등록</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {flex:1}]}
          onPress={() => handleAddMarker('도착지')}
          >
            <Text style={styles.buttonText} >도착지로 등록</Text>
          </TouchableOpacity>
        </View>
        }


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
      backgroundColor: '#3498db',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonDisable: {
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
      height: 40,
      borderWidth: 2,
      borderColor: 'grey',
      marginVertical: 1,
      padding: 10,
    },
  });

export default Main_Map;
