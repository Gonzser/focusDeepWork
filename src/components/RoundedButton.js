import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import { fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';


export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = size =>
  StyleSheet.create({
    radius: {
      //flex:0.4, //nice flating button
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: "center", //this take content to the vCenter
      borderColor: colors.white,
      borderWidth: 2,
    },
    text: {color: colors.white, fontSize: fontSizes.xl,
      
    },
  });
