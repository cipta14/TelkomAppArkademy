import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// Deklarasi Class Body
export default class Body extends React.Component {
  state = {
    showContent:'hidden'
  }

  componentDidMount(){
    setTimeout(this.task,3000) 
  }

  task = () => {
    this.setState({
      showContent:'show'
    })
  }

  renderContent = () => {
    if (this.state.showContent == 'hidden'){
      return null
    } else {
      return (
      <View>
        <Image source={require('../../image/ts.png')}
        style={{width:200,height:200, marginBottom:20, resizeMode:'contain'}}>
        </Image>
        <AppChild />
        <Text>H O M E! Telkom Schools</Text>
        <Button
          onPress={this.onPressButton1}
          title="Learn More 1"
          color="red"
          accessibilityLabel="Learn More About This Purp"
        />
        <Button
          onPress={this.onPressButton2}
          title="Learn More 2"
          color="blue"
          accessibilityLabel="Learn More About This Purp"
        />
        {/* Pemanggilan Class AppChild */}
        <AppChild />
      </View>
      )
    }
  }
    // Method onPress / Row Function
    onPressButton1 = () => {
      alert('Pressed! Button 1')
   }
  
   onPressButton2 = () => {
      alert('Pressed! Button 2')
   }
  
  render() {
      return (
        <View style={styles.body}>
        {this.renderContent()}
        </View>
      )
    }
  }
  

  // Pedefinisian Class Child
class AppChild extends React.Component {
    render() {
      return (
        <View>
           <Text>Child App Component</Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    body: {
        flex: 8,
        backgroundColor: 'silver',
        alignItems: 'center',
        justifyContent: 'center'
      }
  });