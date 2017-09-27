import React, { Component } from 'react'
import { StyleSheet, View,Image,Text,TextInput,Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { WhiteSpace,WingBlank,Button,Toast } from 'antd-mobile';
import { createAction, NavigationActions } from '../utils'
import Icon from 'react-native-vector-icons/Ionicons';

//const 常量
//let  变量

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH=Dimensions.get('window').width;

@connect(({ app }) => ({fetching:app.fetching}))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  }
  constructor(props) {
    super(props);

    this.state = {};
  }
  onLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }

  render() {
    return (
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}  >
          <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
            <Image source={require('../images/bg_logo.png')} style={{width:80,height:30}}/>
            <Text style={{marginLeft:10,fontSize:25,color:'gray'}}>{'XXXX系统'}</Text>
          </View>
          <View  style={{marginTop:30,borderBottomWidth: 0.5,borderBottomColor: 'gray',
            flexDirection:'row',width:SCREEN_WIDTH-150}}>
            <Icon name={'ios-person'} size={25}  color="gray"/>
            <TextInput  keyboardType={'default'} clearTextOnFocus
                 placeholderTextColor="gray"
                        placeholder="请输入用户名"
                        autoCapitalize={'none'} autoCorrect={false}
                        underlineColorAndroid={'transparent'} style={{marginLeft:5,width: SCREEN_WIDTH - 120,
                          marginLeft: 10,paddingTop: 1,
                                   paddingBottom: 1,color: 'gray',height: 20,fontSize:14,height:30}}/>
          </View>
          <View style={{marginTop:15,borderBottomWidth: 0.5,borderBottomColor: 'gray',flexDirection:'row',width:SCREEN_WIDTH-150}}>
            <Icon name={'ios-lock'} size={25}  color="gray"/>
            <TextInput clearTextOnFocus keyboardType={'default'} style={{marginLeft:5,fontSize:14,width: SCREEN_WIDTH - 120,marginLeft: 10,paddingTop: 1,
                          paddingBottom: 1,color: 'gray',height: 20,height:30}}
                        placeholderTextColor="gray" placeholder="请输入密码"
                        autoCapitalize={'none'} autoCorrect={false} underlineColorAndroid={'transparent'}
                        secureTextEntry />
          </View>
          <Button type="primary" style={{marginTop:30,width:SCREEN_WIDTH-160,
            backgroundColor:'#eb2f2d',borderColor:'#eb2f2d'}}
            loading={this.props.fetching} onClick={this.onLogin}>登录</Button>
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

export default Login
