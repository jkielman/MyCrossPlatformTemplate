import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tabs from 'react-native-tabs';


export default class MyCrossPlatformTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'first'
    };
  }

  render() {
    const { page } = this.state;
    return (
      <View style={styles.container}>
        <Tabs
          selected={page}
          style={styles.tabbar}
          selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}
        >
            <Text name="first">First</Text>
            <Text name="second">Second</Text>
            <Text name="third">Third</Text>
        </Tabs>

        <Text>My Cross Platform Template</Text>
        <Text>{page}</Text>
      </View>
    )
  }
}
var headerBaseFontSize = 24;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: headerBaseFontSize,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: headerBaseFontSize,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = MyCrossPlatformTemplate;
