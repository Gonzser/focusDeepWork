import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { colors }  from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const minutesToMillis = (min) => min *60*1000;
const formatTime = (time) => (time<10?`0${time}`:time);
const isHours = (time)=>(time>1?`${time}:`:null);

export const Countdown = ({
    minutes=40,
    isPaused,
})=>{
    const [millis, setMillis] =useState(minutesToMillis(minutes))

    const hours = Math.floor(millis/1000/60/60);
    const minute = Math.floor(millis/1000/60) %60; //%60 only useful in the case to use hours
    const seconds = Math.floor(millis/1000) %60;

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {isHours(hours)}{formatTime(minute)}:{formatTime(seconds)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        // padding: spacing.lg,
        backgroundColor: 'rgba(94,132,226,0.3)'
    },
    text:{
        fontSize: fontSizes.xl,
        fontWeight: 'bold',
        color: colors.white,
        // padding: spacing.lg,
    }
});