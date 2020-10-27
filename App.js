import  React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransationSreen from './sreens/TransationSreen';
import SearchScreen    from './sreens/SearchScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'

export default class App extends Component {
  render(){
    return (
      <View >

        <AppContainer/>
        
        
      </View>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
BookTransation : {screen : TransationSreen} ,
SearchScreen : {screen : SearchScreen} 
})
const AppContainer = createAppContainer (TabNavigator)


