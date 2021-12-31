import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { colors }  from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const minutesToMillis = (min) => min *60*1000;
const formatTime = (time) => (time<10?`0${time}`:time);
const isHours = (time)=>(time>1?`${time}:`:null);

export const Countdown = ({
    minutes=40,
    isPaused,
    onProgress = ()=>{},
})=>{
    const [millis, setMillis] =useState(minutesToMillis(minutes))
    const interval = React.useRef(null);

    const countDown = ()=>
        setMillis((time)=>{
            if(time===0){
                // do some stuff time run out

                return time;
            }
            const timeLeft = time - 1000;
            //report the progress
            onProgress((timeLeft/minutesToMillis(minutes))*100);
            return timeLeft;
        })
    
    // useEffect(()=>{
    //     setMillis(minutesToMillis(minutes))
    // },[minutes])

    useEffect(()=>{
        interval.current = setInterval(countDown, 1000);
        return ()=> clearInterval(interval.current);
    }, [isPaused]);

    // useEffect(()=>{
    //     if(isPaused){
    //         return;
    //     }

    //     return()=>clearInterval(interval.current);
    // }, [isPaused])

    

    const hours = Math.floor(millis/1000/60/60);
    const minute = Math.floor(millis/1000/60) %60; //%60 only useful in the case to use hours
    const seconds = Math.floor(millis/1000) %60;

    return(
            <Text style={styles.text}>
                {isHours(hours)}{formatTime(minute)}:{formatTime(seconds)}
            </Text>
    );
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        // padding: spacing.lg,
    },
    text:{
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.md,
        backgroundColor: 'rgba(94,132,226,0.3)'
    }
});