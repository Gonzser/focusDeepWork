import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import KeepAwake from 'react-native-keep-awake';

import { Countdown } from '../../components/Countdown';
import {RoundedButton} from '../../components/RoundedButton'
import {colors} from '../../utils/colors';
import {fontSizes, spacing} from '../../utils/sizes';
import { Timing } from './Timing';

export const Timer = ({focusSubject}) => {
  const [minutes, setMinutes] = useState(0.2);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);


  //functions
  const updateProgress = (p)=>{
    setProgress(p/100);
    // console.log(isStarted);
    // console.log(isPaused);
  };

  // const onPause = ()=>{
  //   setPauseCounter(pauseCounter +1);
  // };

  const changeTime=(min)=>{
    setProgress(1);
    setIsStarted(false);
    setMinutes(min);
    // console.log(minutes);
  }

  KeepAwake.activate();


  return (
 
      <View style={styles.container}>
        <View style={styles.countdown}>
          <Countdown 
            minutes={minutes}
            isPaused={!isStarted} 
            onProgress={updateProgress}
          />
        </View>
        <View style={styles.focusing}>
        
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        
        </View>
        <View style={styles.progressBar}>
          <ProgressBar 
            progress={progress} 
            color={colors.white} 
            // style={styles.progressBar}
          />
        </View>
        <View style={styles.timingButtons}>
          <Timing onChangeTime={changeTime} />
        </View>
        <View style={styles.buttonControls}>
          {isStarted? (
            <RoundedButton 
              title='pause' 
              onPress={()=>setIsStarted(false)}
            />
          ):(
            <RoundedButton 
              title='start' 
              onPress={()=>setIsStarted(true)}
            />
          )}
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
    // alignItems:'center',
    // justifyContent: 'center',
  },
  countdown:{
    // flex:0.4,
    textAlign:'auto',
  },
  focusing:{
    // flex:0.4,
    // paddingTop:spacing.xxl,
    borderColor:"rgba(123,245,167,0.3)",
    borderWidth:1,
    
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
  progressBar:{
    margin:fontSizes.md, //This solution is better than padding View
    height:fontSizes.sm,
  },
  timingButtons:{
    // sinUso
    // flex:0.6,
    padding:spacing.lg,
    // flexDirection:'row',
    // justifyContent:'space-evenly',
    // alignItems:'center',
    // backgroundColor:'#ffa',
  },
  buttonControls:{
    // padding:spacing.md,
    // justifyContent:'space-evenly',
    alignItems:'center', 
    // backgroundColor:'#ffa',
  },
  

});
