import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BlueBookMarkIcon from '../../Utils/svg/BlueBookMarkIcon'
import Header from '../../components/Header/Header'

const BookMark = () => {
  const data = [
    {
      id: 1,
      icon: <BlueBookMarkIcon height='13px' width='13px' />,
      text: 'Lorem Ipsum is simply dummy text of the printing'
    },
    {
      id: 2,
      icon: <BlueBookMarkIcon height='13px' width='13px' />,
      text: 'Lorem Ipsum is simply dummy text of the printing'
    },
    {
      id: 3,
      icon: <BlueBookMarkIcon height='13px' width='13px' />,
      text: 'Lorem Ipsum is simply dummy text of the printing'
    },
    {
      id: 4,
      icon: <BlueBookMarkIcon height='13px' width='13px' />,
      text: 'Lorem Ipsum is simply dummy text of the printing'
    },
    {
      id: 5,
      icon: <BlueBookMarkIcon height='13px' width='13px' />,
      text: 'Lorem Ipsum is simply dummy text of the printing'
    },
    {
      id: 6,
      icon: <BlueBookMarkIcon height='13px' width='13px' />,
      text: 'Lorem Ipsum is simply dummy text of the printing'
    },
    {
      id: 7,
      icon: <BlueBookMarkIcon height='13px' width='13px' />,
      text: 'Lorem Ipsum is simply dummy text of the printing'
    },
    {
      id: 8,
      icon: <BlueBookMarkIcon height='13px' width='13px' />,
      text: 'Lorem Ipsum is simply dummy text of the printing'
    },
    {
      id: 9,
      icon: <BlueBookMarkIcon height='13px' width='13px' />,
      text: 'Lorem Ipsum is simply dummy text of the printing'
    },
  ]
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        {
          data.map((item) => (
            <View style={styles.mainContainer} key={item.id}>
              <View>{item.icon}</View>
              <Text style={{ marginLeft: 4 }}>{item.text}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

export default BookMark

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 15,
    marginVertical: 15,
    backgroundColor: '#fff', // Required for shadow to be visible
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4, // For Android

  }
})