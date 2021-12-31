import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { Countdown } from '../../components/Countdown';
import {colors} from '../../utils/colors';
import {fontSizes} from '../../utils/sizes';

export const Timer = ({focusSubject}) => {
  const [minutes, setMinutes] = useState(0.1);

  return (
 
      <View style={styles.container}>
        <View style={styles.countdown}>
          <Countdown />
        </View>
        <View>
        
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
        
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.xl,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  countdown:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  }
});
