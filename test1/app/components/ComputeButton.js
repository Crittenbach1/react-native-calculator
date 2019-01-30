import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({

   button: {
     alignItems: 'center',
     backgroundColor: '#f88d12',
     paddingTop: 36,
     width: 96,
     height: 96,
     marginBottom: 0,
   },

});

type Props = {};
export default class ComputeButton extends Component<Props> {

  calculate = () => {
     let action = this.props.currentAction;
     let setAction = this.props.setAction;

     let value = parseFloat(this.props.value);
     let setValue = this.props.setValue;


     let actionValue;
     if (this.props.actionValue == null) {
        actionValue = value;
     } else {
        actionValue = parseFloat(this.props.actionValue);
     }

     let setActionValue = this.props.setActionValue;


      switch(action) {
       case "+":
            newValue = value + actionValue;
         break;
       case "-":
             newValue = value - actionValue;
         break;
       case "x":
             newValue = value * actionValue;
         break;
       case "÷":
             newValue = value / actionValue;
         break;
       case null:
               newValue = value
         break;
       default:
         newValue = "error"
      }

     setValue(newValue);

     setAction(null);
     setActionValue(null);


  };

  render() {
    return (
      <View>
        <TouchableOpacity
            style={styles.button}
            onPress={this.calculate}>
            <Text style={{fontSize: 20}}> = </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
