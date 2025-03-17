import { useState,useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Alert, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NickNameScreen = () => {
    const [nickname, setNickname] = useState('')
    const [inputNickname, setInputNickname] = useState('')

    useEffect(() => {
        const loadNickName = async () => {
            try{
                const storedNickname = await AsyncStorage.getItem('nickname')
                if (storedNickname !== null){
                    setNickname(storedNickname)
                }
            }
            catch (error) {
                console.error('Failed to load nickname', error)
            }
        }
    })
}