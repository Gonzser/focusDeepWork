import React, { useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes } from '../../utils/sizes';

export const Timing = ({changeTime})=>{
    return(
        <View style={styles.timingButton} >
            <RoundedButton 
                title='10' 
                size={75}
                onPress={changeTime(10)}
            />
            <RoundedButton 
                title='15' 
                size={75}
                onPress={changeTime(15)}
            />
            <RoundedButton 
                title='20' 
                size={75}
                onPress={changeTime(20)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    timingButton:{
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingVertical: fontSizes.xl,
    }
});