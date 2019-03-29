import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Menu from './SimpleMenu';
import DataService from '../services/DataService';


export default class Customers extends React.Component {
    state={customers:[]};
  static navigationOptions = {
    headerTitle: 'Customers',
    headerLeft: (<Text></Text>),
	};
  constructor(props) {
    console.log(">> Customers");
    super(props);
  }
  componentDidMount(){
      this.setState({customers:DataService.getCustomers()});
  }
render() {

    return (
      <ScrollView>
      <Menu navigation={this.props.navigation}/>
      <View style={{flex: 1, flexDirection: 'row', height: 20}}>
        <View style={{flex: 1, height: 20, backgroundColor: 'powderblue'}}>
          <Text >
            Id
          </Text>
        </View>
        
        <View style={{flex: 1, height: 20, backgroundColor: 'powderblue'}}>
          <Text >
            Name
          </Text>
        </View>
        
        <View style={{flex: 1, height: 20, backgroundColor: 'powderblue'}}>
          <Text >
           Email
          </Text>
        </View>
        
        <View style={{flex: 1, height: 20, backgroundColor: 'powderblue'}}>
          <Text >
            Phone
          </Text>
        </View>
        </View>

        {this.state.customers.map(item => (
      <View style={{flex: 1, flexDirection: 'row', height: 20}} key = {item.id}>
        <View style={{flex: 2, height: 20, backgroundColor: 'pink'}}>
          <Text>
            {item.id} 
          </Text>
        </View>

        <View style={{flex: 2, height: 20, backgroundColor: 'pink'}}>
          <Text>
            {item.name}
          </Text>
        </View>

        
        <View style={{flex: 2, height: 20, backgroundColor: 'pink'}}>
          <Text>
            {item.email}
          </Text>
        </View>

        
        <View style={{flex: 2, height: 20, backgroundColor: 'pink'}}>
          <Text>
            {item.phone}
          </Text>
        </View>
     </View>
        
      ))}
        </ScrollView>
    );
  }
}
