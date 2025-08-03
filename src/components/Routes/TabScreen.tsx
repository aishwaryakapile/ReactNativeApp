/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

// import PrescriptionScreen from '../../Screens/prescriptions/PrescriptionScreen';
// import Reports from '../../Screens/Reports/Reports';
// import SettingsScreen from '../../Screens/Setting/Setting';
// import { ALLICE_BLUE, GRAY_SHADE, WHITE } from '../../shared/component/common-style/Colors';
// import Text from '../../shared/fontFamily/Text';
// import HomeIcon from '../../utils/svg/HomeIcon';
// import PrescriptionIcon from '../../utils/svg/PrescriptionIcon';
// import ReportsIcon from '../../utils/svg/ReportsIcon';
// import SettingIcon from '../../utils/svg/SettingIcon';
import { Platform, Text, View } from 'react-native';
import { GRAY_SHADE, MUTED_TEAL_BLUE, WHITE } from '../Color';
import HomeIcon from '../../Utils/svg/HomeIcon';
import BookMarkIcon from '../../Utils/svg/BookMarkIcon';
import LiveUpdates from '../../Utils/svg/LiveUpdates';
import UserIcon from '../../Utils/svg/UserIcon';
import Home from '../../screens/Home/Home';
import BookMark from '../../screens/BookMark/BookMark';
import Profile from '../../screens/Profile/Profile';


const Tab = createBottomTabNavigator()
const TabScreen = () => {

    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            tabBarActiveTintColor: '#1b1b1b',
            tabBarInactiveTintColor: GRAY_SHADE,
            tabBarLabelStyle: { fontSize: 14, fontFamily: 'bold' },
            tabBarStyle: { backgroundColor: MUTED_TEAL_BLUE, height: Platform.OS == "ios" ? "auto" : "8%" },
            headerShown: false,
            tabBarIconStyle: { marginVertical: 5 }
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: ({ focused }) => (focused ? <Text style={{ color: WHITE, bottom: 1 }}>Home</Text> : null),
                    tabBarIcon: ({ focused }) => (focused ? <View style={{padding:20, backgroundColor:'#ffffff',bottom:20,borderRadius:'100%'}}>
                        <HomeIcon width={28} height={28} color='#333A57' />
                    </View> : <HomeIcon width={24} height={24} color='#FFFFFF47' />
                    ),
                }}
            />
            <Tab.Screen name="Bookmark" component={BookMark}
                options={{
                    tabBarLabel: ({ focused }) => (focused ? <Text style={{ color: WHITE, bottom: 1 }}>Bookmark</Text> : null),
                    tabBarIcon: ({ focused }) => (focused ? <BookMarkIcon width={28} height={28} color={WHITE} /> : <BookMarkIcon width={24} height={24} color={"#619ABE"} />
                    ),
                }}
            />
            <Tab.Screen name="Live Updates" component={LiveUpdates}
                options={{
                    tabBarLabel: ({ focused }) => (focused ? <Text style={{ color: WHITE, bottom: 1 }}>Live Updates</Text> : null),
                    tabBarIcon: ({ focused }) => (focused ? <LiveUpdates width={28} height={28} color={WHITE} /> : <LiveUpdates width={24} height={24} color={"#619ABE"} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: ({ focused }) => (focused ? <Text style={{ color: WHITE, bottom: 1 }}>Profile</Text> : null),
                    tabBarIcon: ({ focused }) => (focused ? <UserIcon width={28} height={28} color={WHITE} /> : <UserIcon width={24} height={24} color={"#619ABE"} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabScreen