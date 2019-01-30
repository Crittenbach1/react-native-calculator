import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({

   button: {
     alignItems: 'center',
     backgroundColor: '#f88d12',
     paddingTop: 36,
     width: 96,
     height: 96,
   }
});

type Props = {};
export default class ActionButton extends Component<Props> {


  setAction = () => {
    this.props.setAction(this.props.action);
  };


  render() {
    return (
      <View>
        <TouchableOpacity
            style={styles.button}
            onPress={this.setAction}>
            <Text style={{fontSize: 20}}> {this.props.action} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
