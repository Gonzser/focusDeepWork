import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { lightGreen100 } from 'react-native-paper/lib/typescript/styles/colors';
import {ProgressBar} from 'react-native-paper';

import { Countdown } from '../../components/Countdown';
import {RoundedButton} from '../../components/RoundedButton'
import {colors} from '../../utils/colors';
import {fontSizes, spacing} from '../../utils/sizes';
import { Timing } from './Timing';

export const Timer = ({focusSubject}) => {
  const [minutes, setMinutes] = useState(0.1);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);


  //functions
  const onProgress = (p)=>{
    setProgress(p/100);
  };

  // const onPause = ()=>{
  //   setPauseCounter(pauseCounter +1);
  // };

  const changeTime=(min)=>{()=>{
    setProgress(1);
    setIsStarted(false);
    setMinutes(min);
  }}


  return (
 
      <View style={styles.container}>
        <View style={styles.countdown}>
          <Countdown 
            isPaused={!isStarted} 
            onProgress={onProgress}
          />
        </View>
        <View style={{paddingTop:spacing.xxl}}>
        
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
        
        </View>
        <ProgressBar 
          progress={progress} 
          color={colors.white} 
          style={styles.progressBar}
        />
        <View>
          <Timing changeTime={changeTime} />
        </View>
        <View style={styles.buttonWrapper}>
          {isStarted? (
            <RoundedButton title='pause' onPress={()=>setIsStarted(false)}/>
          ):(
            <RoundedButton title='start' onPress={()=>setIsStarted(true)}/>
          )}
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown:{
    flex:0.4,
    alignItems:'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.md,
    
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  buttonWrapper:{
    flex:0.6,
    padding:spacing.md,
    justifyContent:'center',
    alignItems:'center',
    },
  progressBar:{
    
    margin:fontSizes.md, //This solution is better than padding View
    height:fontSizes.sm,
  },

});
