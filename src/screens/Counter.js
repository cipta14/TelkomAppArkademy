import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from '../components/Header';
import BodyCounting from '../components/BodyCounting';

export default class Counter extends React.Component {
  /*
  // Menampilkan pesan pada saat aplikasi di load 
  constructor(){
      super();
      alert('constructor test')
  }
  */
  /* Komponen ini akan dieksekusi sebelum render
     Berfunsi untuk memasukkan perintah yang digunakan pada saat applikasi
     pertama kali dijalankan dan tidak bersifat wajib 
  */
  /*
  componentWillMount() {
    console.log('Ini Will Mount')
  }
  */
  /* Komponen ini akan dieksekusi setelah render
     dan digunakan untuk patching data 
  */
  /*
  componentDidMount() {
    console.log('Ini Did Mount')
  }
  */
  render() {
    // console.log ('Ini Render')
    return (
      <View style={styles.container}>
      {/* Pemanggilan Class Header */}
      {/* <Header /> */}
      {/* Pemanggilan Class Body  */}
      {/* <Body /> */}
      <BodyCounting />
      </View>
    );
  }
}

// Deklarasi Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    paddingTop:0
    /*
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
    flexDirection: 'row'
    */
  }
});
