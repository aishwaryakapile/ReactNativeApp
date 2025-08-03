import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Clouds from '../../Utils/svg/cloud'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BLACK_SHADE, DARK_GRAY_SHADE, WHITE } from '../../components/Color'
import FirstAidIcon from '../../Utils/svg/FirstAidIcon'
import LiveupdateHomeIcon from '../../Utils/svg/LiveupdateHomeIcon'
import ReportsIncidentIcon from '../../Utils/svg/ReportsIncidentIcon'
import EmergencyService from '../../Utils/svg/EmergencyService'
import Header from '../../components/Header/Header'

const Home = () => {
  const data = [
    {
      id: 1,
      heading: 'Weather updates',
      icon: <Clouds width='72px' height='72px' />,
      boxtext: 'Stay prepared with forecasts.',
      // navigateTo:
    },
    {
      id: 2,
      heading: 'First Aid',
      icon: <FirstAidIcon width='72px' height='72px' />,
      boxtext: 'Quick steps to save lives.'
    },
    {
      id: 3,
      heading: 'Live Updates',
      icon: <LiveupdateHomeIcon width='72px' height='72px' />,
      boxtext: 'Real-time updates at fingertips.'
    },
    {
      id: 4,
      heading: 'Report Incidents',
      icon: <ReportsIncidentIcon width='72px' height='72px' />,
      boxtext: 'Report incidents for action.'
    },
    {
      id: 5,
      heading: 'Easy Access Maps',
      icon: <ReportsIncidentIcon width='72px' height='72px' />,
      boxtext: 'Navigate safely, find resources.'
    },
    {
      id: 6,
      heading: 'Emergency Services',
      icon: <EmergencyService width='72px' height='72px' />,
      boxtext: 'Stay notified of dangers.'
    },
  ]
  return (
    <View>
      <Header />
      <SafeAreaView style={{ padding: 10, flex: 1 }} >
        <View style={styles.mainContainer}>
          {
            data.map((item) => (
              <View style={styles.subContainer} key={item.id}>
                <View>{item.icon}</View>
                <Text style={styles.mainheading}>{item.heading}</Text>
                <Text style={styles.text}>{item.boxtext}</Text>
              </View>

            ))
          }


        </View>
      </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10


  },
  subContainer: {
    width: 165,
    height: 180,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 15,
    borderColor: DARK_GRAY_SHADE,
    borderWidth: 0.5,
    shadowColor: '#00000040',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 4,

  },
  mainheading: {
    color: BLACK_SHADE,

  },
  text: {
    color: DARK_GRAY_SHADE,
    textAlign: 'center'
  }
})