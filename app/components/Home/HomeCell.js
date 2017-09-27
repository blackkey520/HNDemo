'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
import { Badge } from 'antd-mobile';
import Icon from 'react-native-vector-icons/Ionicons';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH=Dimensions.get('window').width;
import BadgeStyle from 'antd-mobile/lib/badge/style/index.native';

class HomeCell extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={{flexDirection:'row',width:SCREEN_WIDTH,height:48,alignItems: 'center',
        justifyContent: 'space-between',borderBottomColor:'#e4e4e4',borderBottomWidth:1,backgroundColor:'#fff'}}>
        <View style={{marginLeft:10,flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
          <Icon name={this.props.icon} size={28}  color={this.props.color} />
          <Text style={{marginLeft:12,fontSize:15,color:this.props.color}}>{this.props.title}</Text>
        </View>
        <Badge style={[{backgroundColor:'green',marginRight:20}]} text={this.props.count} overflowCount={55} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

});


export default HomeCell;
