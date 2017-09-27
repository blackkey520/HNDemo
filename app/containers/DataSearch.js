import React, { Component } from 'react'
import { StyleSheet, View, Image, Button,Text,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from '../utils'

@connect()
class DataSearch extends Component {
  static navigationOptions = {
    title: '数据检索',
    headerBackTitle:null,
    tabBarIcon: ({ focused, tintColor }) =><Icon name={'ios-search'} size={28}  color={focused ? tintColor : 'gray'}/>,
    headerRight: (
      <TouchableOpacity style={{width:30}} onPress ={()=>{
        alert('点击了');
      }}>
          <Icon name={'ios-pie'} size={28}  color={'gray'}/>
      </TouchableOpacity>
    ),
    headerLeft: (
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
        <Text>{'数据检索'}</Text>
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

export default DataSearch
