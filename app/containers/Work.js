import React, { Component } from 'react'
import { StyleSheet, View, Image, Button,Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from '../utils'

@connect()
class Work extends Component {
  static navigationOptions = {
    title: '日常工作',
    headerBackTitle:null,
    tabBarIcon: ({ focused, tintColor }) =>
        <Icon name={'ios-code-working'} size={28}  color={focused ? tintColor : 'gray'}/>
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{'日常工作'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Work
