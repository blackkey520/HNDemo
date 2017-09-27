import React, { Component } from 'react'
import { StyleSheet, View, Button,Text } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

@connect()
class CheckDetail extends Component {
  static navigationOptions = {
    title: '工作办理',
    headerBackTitle:null,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{'可以开始办理工作啦'}</Text>
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
})

export default CheckDetail
