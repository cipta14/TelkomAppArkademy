import React from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Fab, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class Form extends React.Component {
 
  render() {
    return (
        <Container>
        <Content>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
          </List>
        </Content>
        <Fab
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => {}}>
        <MaterialIcons name='back' />
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