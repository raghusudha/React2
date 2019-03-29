import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Menu from './SimpleMenu';

export default class Details extends React.Component {
  static navigationOptions = {
    headerTitle: 'Detail',
    headerLeft: (<Text></Text>),
	};
  constructor(props) {
    console.log(">> Details");
    super(props);
  }
render() {

    return (
      <ScrollView>
      <Menu navigation={this.props.navigation}/>
        <Text>This is Vodafone component!!!</Text>
      </ScrollView>
    );
  }
}

