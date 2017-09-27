import React, { Component } from 'react'
import { StyleSheet, View, Image, Button,Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from '../utils'

@connect()
class Account extends Component {
  static navigationOptions = {
    title: '我的信息',
    headerBackTitle:null,
    tabBarIcon: ({ focused, tintColor }) =>
      <Icon name={'ios-person'} size={28}  color={focused ? tintColor : 'gray'}/>
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{'我的信息'}</Text>
        <Button title="Goto Login" onPress={this.gotoLogin} />
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

export default Account
