import React, { Component } from 'react'
  import { StyleSheet, View, Button,TouchableOpacity,FlatList,Platform,Dimensions,Text } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions,createAction } from '../utils'
import LoadingComponent from '../components/Common/LoadingComponent'
import NoDataComponent from '../components/Common/NoDataComponent'
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH=Dimensions.get('window').width;
@connect(({ checklist }) => ({ pagesize:checklist.pagesize,total:checklist.total,current:checklist.current,fetching:checklist.fetching,listresult:checklist.listresult}))
class CheckList extends Component {
  static navigationOptions = {
    title: '待办任务',
    headerBackTitle:null,
    headerRight: (
      <TouchableOpacity style={{width:30,marginLeft:10}} onPress ={()=>{
        alert('点击了');
      }}>
          <Icon name={'ios-search'} size={28}  color={'gray'}/>
      </TouchableOpacity>
    )
  }
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentWillMount() {
    this.props.dispatch(createAction('checklist/getchecklist')({
      current:1
    }));
  }
  _renderItem=({item})=>{
    return (
      <View style={{flexDirection:'row',backgroundColor:'#fff'}}>
        <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#e4e4e4',
          borderRightWidth:1,borderRightColor:'#ddd',height:50,alignItems: 'center',justifyContent: 'center',width:SCREEN_WIDTH*2/3}}>
          {
            item.IsPressing?<View><Text style={{color:'red',fontSize:13}}>{'【紧急】'}</Text></View>:null
          }
          <View><Text style={{color:'#666666',fontSize:13}}>{item.TaskName}</Text></View>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'#ddd',borderRightWidth:1,borderRightColor:'#e4e4e4',height:50,width:SCREEN_WIDTH*1/3,
          alignItems: 'center',justifyContent: 'center',}}>
          <TouchableOpacity onPress={()=>{
            this.props.dispatch(NavigationActions.navigate({ routeName: 'CheckDetail' }))
          }} ><Text style={{color:'#1bbdbd',fontSize:13}}>{'办理>'}</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
  _footer=()=>{
    if(this.props.fetching)
    {
      return (<View style={{height:50,width:SCREEN_WIDTH,alignItems: 'center',justifyContent: 'center',}}>
        <LoadingComponent   Message={'正在加载数据'}/></View>);
    }else if(this.props.pagesize*this.props.current>this.props.total){
      return (<View style={{height:50,width:SCREEN_WIDTH,alignItems: 'center',justifyContent: 'center',}}>
        <Text>{'没有更多数据了'}</Text></View>);
    }else{
      return (<View></View>);
    }
  }
  _extraUniqueKey=(item ,index)=>{
    return "index"+index+item;
  }
  _header=()=>{
    return(
      <View style={{flexDirection:'row',backgroundColor:'#fff'}}>
        <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#e4e4e4',backgroundColor:'#f2f2f2',
          borderRightWidth:1,borderRightColor:'#ddd',height:35,alignItems: 'center',justifyContent: 'center',width:SCREEN_WIDTH*2/3}}>
          <Text style={{color:'#999999',fontSize:13}}>{'任务名称'}</Text>
        </View>
        <View style={{borderBottomWidth:1,borderBottomColor:'#e4e4e4',borderRightWidth:1,borderRightColor:'#ddd',height:35,width:SCREEN_WIDTH*1/3,
          alignItems: 'center',justifyContent: 'center',backgroundColor:'#f2f2f2',}}>
          <Text style={{color:'#999999',fontSize:13}}>{'办理'}</Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
              ListHeaderComponent={this._header}
              ListFooterComponent={this._footer}
              ListEmptyComponent={()=>this.props.fetching?null:<View style={{height:SCREEN_HEIGHT-200}}><NoDataComponent  Message={'没有查询到数据'}/></View>}
              keyExtractor = {this._extraUniqueKey}
             data={this.props.listresult}
             renderItem={this._renderItem}
             onEndReachedThreshold={Platform.OS === 'ios'?0:1}
             initialNumToRender={10}
             refreshing={false}
             onRefresh={()=>{
               this.props.dispatch(createAction('checklist/getchecklist')({
                 current:1
               }));
             }}
             onEndReached={(info)=>{
               if(this.props.total!=0&&!this.props.fetching&&this.props.total>this.props.current*this.props.pagesize)
               {
                 this.props.dispatch(createAction('checklist/getchecklist')({
                   current:this.props.current+1
                 }));
               }
             }}
         />
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

export default CheckList
