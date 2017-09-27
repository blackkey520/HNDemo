import React, { Component } from 'react'
import { StyleSheet, View, Image, Button,Text,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from '../utils'
import HomeCell from '../components/Home/HomeCell'
@connect()
class Home extends Component {
  static navigationOptions = {
    title: '消息提醒',
    headerBackTitle:null,
    tabBarIcon: ({ focused, tintColor }) =><Icon name={'ios-alarm'} size={28}  color={focused ? tintColor : 'gray'}/>,
    headerRight: (
      <TouchableOpacity style={{width:30}} onPress ={()=>{
        alert('点击了');
      }}>
          <Icon name={'ios-qr-scanner'} size={28}  color={'gray'}/>
      </TouchableOpacity>
    )
  }
  constructor(props) {
    super(props);
    this.state = {
      MessageType:[
        {icon:'ios-brush',title:'待办任务',color:'#fe0d00',count:10,router:'CheckList'},
        {icon:'ios-notifications',title:'任务提醒',color:'#ffcc00',count:150,router:'Detail'},
        {icon:'ios-megaphone',title:'通知公告',color:'#1198ff',count:5,router:'Detail'},
        {icon:'ios-mail',title:'系统消息',color:'#098000',count:5,router:'Detail'},
        {icon:'ios-mail',title:'系统消息',color:'#098000',count:5,router:'Detail'},
      ]
    };
  }
  _renderItem(item,key){
    return <HomeCell key={key} icon={item.icon}
      title={item.title} color={item.color} count={item.count} onPress={()=>{
        this.props.dispatch(NavigationActions.navigate({ routeName: item.router }))
      }}/>
  }
  render() {
    return (

      <View style={{flexDirection:'column',justifyContent: 'center',}}>
        {this.state.MessageType.map((item,key)=>this._renderItem(item,key))}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Home
