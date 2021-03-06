import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { connect } from 'react-redux'

import { NavigationActions } from '../utils'

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '详情',
    headerBackTitle:null,
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Goto Detail" onPress={this.gotoDetail} />
        <Button title="Go Back" onPress={this.goBack} />
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

export default Detail
