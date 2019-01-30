import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({

   button: {
     alignItems: 'center',
     backgroundColor: '#d4d5d9',
     paddingTop: 47,
     width: 96,
     height: 96,
   },

});

type Props = {};
export default class Filler extends Component<Props> {


  doNothing = () => {

  };

  render() {
    return (
      <View>
        <TouchableOpacity
            style={styles.button}
            onPress={this.doNothing}>
        </TouchableOpacity>
      </View>
    );
  }
}
