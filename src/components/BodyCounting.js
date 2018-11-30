import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

export default class BodyCounting extends React.Component {

        
    state = {
        count: 0,
        backgroundColor:'#fff'
      }
    
    componentDidMount(){
        setInterval(this.handleChangeBackgroundColor,2000)
    }

    handleChangeBackgroundColor = () => {
        this.setState({
            backgroundColor: this.getRandomColor()
        })
    }

    getRandomColor(){
        var letters = '123456789ABCDEF';
        var color = '#';
        for (var i = 0;i < 6;i++){
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    }

    onPressButton = () => {
        this.setState({
            count: this.state.count+1
          })
     }

     onPressButtonMin = () => {
        this.setState({
            count: this.state.count-1
          })
     }

     onPressButtonClear = () => {
        this.setState({
            count: this.state.count=0
          })
     }


    render(){
        return(
            <View style = {[styles.container, {backgroundColor: this.state.backgroundColor}]}>  
                <Text style={styles.fontstyle}> INCREMENT & DECREMENT</Text>
                <Text style={styles.number}>{this.state.count}</Text>
                <Button
                    onPress={this.onPressButton}
                    title='P L U S'
                    color='red'
                />
                <Button
                    onPress={this.onPressButtonMin}
                    title="M I N U S"
                    color="blue"
                />
                <Button
                    onPress={this.onPressButtonClear}
                    title="C L E A R"
                    color="red"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:8,
        alignItems:'center',
        justifyContent: 'center'
    },
    number: {
        fontSize:200,
        margin:20,
        color:'yellow'
    },
    fontstyle: {
        fontSize:20,
        color:'white'
    }
})