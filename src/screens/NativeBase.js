import React from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Fab, Button, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';//lib untuk get data
import { processColor } from '../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native';

export default class NativeBase extends React.Component {
// Deklarasi Data Kosong 
state = {
  data : [],
  spin : true
}

componentDidMount(){
  axios({
    url:'https://jsonplaceholder.typicode.com/todos',
    method: 'GET' // enum, POST (Create), GET (Read), PUT (Update), DELETE
  }).then((succResult) => {
    console.log(succResult)
    this.setState({
      data: succResult.data,
      spin:false
    })
    //alert(JSON.stringify(succResult.data))
  }).catch((errResult) => {
    alert(errResult)
  })
}

handleForm = () => {
   this.props.navigation.navigate('Form');
}

renderList = (item, index) => {
  return (
    <ListItem key={item.id}>
      <Text>Id: {item.id} -> Title: {item.title}</Text>
    </ListItem>
  )
}

  render() {
    return (
        <Container>
          {/* inline condition */}
          {this.state.spin === true ? <Spinner /> : null } 
        <Content>
          <List>
           {this.state.data.map(this.renderList)}
          </List>
        </Content>
        <Fab
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={this.handleForm}>
        <MaterialIcons name='add' />
        </Fab>
      </Container>
    );
  }
}

// Deklarasi Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:0
  }
});
