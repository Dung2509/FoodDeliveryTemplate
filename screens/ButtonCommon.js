/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function ButtonCommon({text, styleBtn, styleTextbtn,clicked, disabled}) {
  return (
    <TouchableOpacity disabled={disabled} onPress={clicked} style={[styles.container,styleBtn,disabled && { opacity: 0.5 }]}>
      <Text style={[styles.text,styleTextbtn]}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    // backgroundColor: '#D35400',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});
    