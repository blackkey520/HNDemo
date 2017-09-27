import React, { Component } from 'react'
import { StyleSheet, View, Image, Button,Text,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from '../utils'

@connect()
class Contact extends Component {
  static navigationOptions = {
    title: '通讯录',
    headerBackTitle:null,
    tabBarIcon: ({ focused, tintColor }) =>
        <Icon name={'ios-people'} size={28}  color={focused ? tintColor : 'gray'}/>,
    headerRight: (
      <TouchableOpacity style={{width:30,marginLeft:10}} onPress ={()=>{
        alert('点击了');
      }}>
          <Icon name={'ios-search'} size={28}  color={'gray'}/>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{'通讯录'}</Text>
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

export default Contact
