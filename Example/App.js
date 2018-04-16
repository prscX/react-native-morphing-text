/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RNMorphingText from 'react-native-morphing-text'

type Props = {};
export default class App extends Component<Props> {
  constructor (props) {
    super(props)

    this.state = {
      value: 1
    }
  }
  
  componentDidMount () {
    setInterval(() => {
     this.setState({ value: this.state.value + 1 });
    }, 1000)
  }

  render() {
    return <View style={styles.container}>
        <Text>Text 1</Text>
        <RNMorphingText effect={"scale"} width={100} height={100} size={20} color={"#2772ae"}>
          {this.state.value.toString()}
        </RNMorphingText>
        <Text>Text 2</Text>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
