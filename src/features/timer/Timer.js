import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {colors} from '../../utils/colors/colors';

export const Timer = ({focusSubject}) => {
  // const [] useState(null);

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    testAlign: 'center',
  },
  task: {
    color: colors.white,
    testAlign: 'center',
    fontWeight: 'bold',
  },
});
