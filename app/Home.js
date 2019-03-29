import React from 'react';
import { StyleSheet, Text, View,ScrollView,Button } from 'react-native';
import Menu from './SimpleMenu';

export default class Home extends React.Component {
   _navigation = null;
   constructor(props) {
    console.log(">> Home");
    super(props);
    _navigation = this.props.navigation;
  }

  static navigationOptions = {
    headerTitle: 'Home',
    headerLeft: (<Text></Text>),
    headerRight: (
      <View>
      <Button
        onPress={
          () => _navigation.navigate('Login')
        }
        title="Logout"
        color="#000"
      />
      </View>
    ),
  };

  render() {
      const { navigation } = this.props;
      const name = navigation.getParam('name', 'NO-Name');
    return (
      <ScrollView>
      <Menu navigation={this.props.navigation}/>
      <Text> Hi this is Home Screen.</Text>
      <Text> Hello {name}</Text>
      </ScrollView>
    );
  }
}

