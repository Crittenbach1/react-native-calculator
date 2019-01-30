import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import ActionButton from './app/components/ActionButton.js';
import InputButton from './app/components/InputButton.js';
import ComputeButton from './app/components/ComputeButton.js';
import Filler from './app/components/Filler.js';

//  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',

const styles = StyleSheet.create({
   myView: {
     backgroundColor: '#202020',
     height: '100%',
     alignItems: 'center',
   },

   valueView: {
     fontSize: 40,
     color: "white",
     alignItems: 'flex-start'
   },

   row: {
     flexDirection: 'row'
   },

   app: {
     backgroundColor: '#202020',
     paddingTop: 120,
   }





})

type Props = {};
export default class App extends Component<Props> {

   constructor(props) {
     super(props);
     this.state = {
       value: 0,
       actionValue: null,
       currentAction: null
     };
     this.setAction = this.setAction.bind(this);
     this.setValue = this.setValue.bind(this);
   }

   setAction = (newAction) => {
      this.setState({
          currentAction: newAction
      })
    }

    setActionValue = (newActionValue) => {
       this.setState({
           actionValue: newActionValue
       })
     }

    setValue = (newValue) => {
       this.setState({
           value: newValue
       })
    }


  render() {
    let value = <Text style={{textAlign: 'right',
                              fontSize: 40,
                              color: "white",
                              marginRight: 20 }}>{this.state.value} </Text>
    if (this.state.actionValue != null) {
        value = <Text style={{textAlign: 'right',
                              fontSize: 40,
                              color: "white",
                              marginRight: 20 }}>{this.state.actionValue} </Text>
    }
    return (
      <View style={styles.app}>
       {value}


      <View style={styles.myView}>

          <View style={styles.row}>
            <InputButton number="AC" setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
            <Filler />
            <Filler />
            <ActionButton action="÷" setAction={this.setAction} />
          </View>

          <View style={styles.row}>
            <InputButton number="7" setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
            <InputButton number="8" setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
            <InputButton number="9" setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
            <ActionButton action="x" setAction={this.setAction} />
          </View>

          <View style={styles.row}>
            <InputButton number="4" setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
            <InputButton number="5" setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
            <InputButton number="6" setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
            <ActionButton action="-" setAction={this.setAction} />
          </View>

          <View style={styles.row}>
            <InputButton number="1" setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
            <InputButton number="2" setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
            <InputButton number="3" setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
            <ActionButton action="+" setAction={this.setAction} />
          </View>

          <View style={styles.row}>
            <InputButton number="0" setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
            <Filler />
            <InputButton number="." setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
            <ComputeButton setAction={this.setAction} setValue={this.setValue} setActionValue={this.setActionValue} actionValue={this.state.actionValue} value={this.state.value} currentAction={this.state.currentAction} />
          </View>

        </View>
    </View>
    );
  }
}
