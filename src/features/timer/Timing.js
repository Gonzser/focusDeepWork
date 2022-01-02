import React from 'react';
import {View, StyleSheet} from 'react-native';

import {RoundedButton} from '../../components/RoundedButton';

export const Timing = ({onChangeTime}) => {
  return (
    <View style={styles.timingButtons}>
      <RoundedButton title="10" size={65} onPress={() => onChangeTime(10)} />
      <RoundedButton title="15" size={65} onPress={() => onChangeTime(15)} />
      <RoundedButton title="20" size={65} onPress={() => onChangeTime(20)} />
    </View>
  );
};

const styles = StyleSheet.create({
  timingButtons: {
    // flex:1, by default
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // paddingVertical: fontSizes.xl,
  },
});
