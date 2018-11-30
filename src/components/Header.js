import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Deklarasi Component Header
export default class Header extends React.Component {
    render() {
      return (
        <View style={styles.header}>
          <NavButton text = 'Cancel' style = {{paddingLeft:20}}/>
          <Text style={styles.textHeader}>List</Text>
          <NavButton text = 'Menu' style = {{paddingRight:20}} />
        </View>
      )
    }
  }

  // Deklarasi Component Left
  class NavButton extends React.Component {
    render (){
      return (
        <Text style={{color:'#ffff', fontSize:20}}>{this.props.text}</Text>
      )
    }
  }

  const styles = StyleSheet.create({
  // Deklarasi Style Header
  header: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'white',
    flexDirection:'row'
  },



  textHeader: {
    color: 'white',
    fontSize: 20
  }
  });