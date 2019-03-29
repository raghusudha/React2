import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class Child extends React.Component {
  render() {
    return (
      <View>
        <Text>name:{this.props.name}</Text>
        <Button
        onPress={() => this.props.changeName("new name XXX")}
        title="change Sibling Name"
      />
      </View>
    );
  }
}

