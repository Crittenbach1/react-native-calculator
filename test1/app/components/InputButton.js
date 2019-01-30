import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({

   button: {
     alignItems: 'center',
     backgroundColor: '#d4d5d9',
     paddingTop: 36,
     width: 96,
     height: 96,
   },

});

type Props = {};
export default class InputButton extends Component<Props> {


  set = (val) => {
    let checkForDec = val.toString();

    if (this.props.number == "AC") {
      return "0";
    } else if (this.props.number == ".") {
      if (checkForDec.includes(".") != true) {
        let newValue = val + this.props.number;
        return newValue;
      } else {
        return val;
      }
    } else {
      let newValue = val + this.props.number;
      return parseFloat(newValue);
    }
  }


  setInputValue = () => {
    if (this.props.currentAction != null) {
        let newActionValue;
          if (this.props.actionValue == null) {
             newActionValue = this.props.number;
          } else {
             newActionValue = this.set(this.props.actionValue);
          }
      this.props.setActionValue(newActionValue);
    } else {
       let newValue = this.set(this.props.value);
       this.props.setValue(newValue);
    }
  };

  render() {
    return (
      <View>
        <TouchableOpacity
            style={styles.button}
            onPress={this.setInputValue}>
            <Text style={{fontSize: 20}}> {this.props.number} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
