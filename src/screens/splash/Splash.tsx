import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Tab_SCREEN } from '../../components/Routes/Routes'

const Splash = () => {
    const navigate: any = useNavigation()

    const navigateToHome = () => {
        navigate.navigate('TabScreen')
    }
    return (
       
       <SafeAreaView>
             <TouchableOpacity onPress={navigateToHome}>
             <Image source={require('../../components/Assets/splash.png')}/>
            </TouchableOpacity>
       </SafeAreaView>
      
    )
}

export default Splash

const styles = StyleSheet.create({})