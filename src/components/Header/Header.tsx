import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DARK_BLUE } from '../Color'
import UserProfileIcon from '../../Utils/svg/UserProfileIcon'
import SOSIcon from '../../Utils/svg/SOSIcon'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <UserProfileIcon width='28px' height='28px' />
            <SOSIcon width='28px' height='28px' />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: DARK_BLUE,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15
    }
})