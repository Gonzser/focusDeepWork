import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

import {Focus} from './src/features/focus/Focus';
import {Timer} from './src/features/timer/Timer';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

// console.log(window.height);
// console.log('window.height');
const maxWindowActual = window.height;

export default function App() {
  const [focusSubject, setFocusSubject] = useState('Finish this App today');

  const onTimerEnd = () => {
    // setInterval(() => {
    //   setFocusSubject(null);
    // }, 5000);
    setFocusSubject(null);
    // console.log(focusSubject);
  };

  // const addSubject = (newSubject)=>() => {
  //   console.log(newSubject);
  //   setFocusSubject(newSubject);
  //   console.log(focusSubject);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={dStyles(maxWindowActual).pushScroll}>
          <View style={styles.header} />
          <View style={styles.body}>
            {focusSubject ? (
              <Timer focusSubject={focusSubject} 
              onTimerEnd={onTimerEnd} />
            ) : (
              <Focus addSubject={setFocusSubject} />
            )}
          </View>
          <View style={styles.footer} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const dStyles = maxHi =>
  StyleSheet.create({
    pushScroll: {
      height: maxHi * 0.98,
    },
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: '#A4b63E',
  },
  pushScroll: {
    height: 700,
    // reemplazado por dStyles
  },
  header: {
    flex: 35,

    backgroundColor: '#A4b60E',
  },
  body: {
    flex: 910,

    backgroundColor: '#A4b03E',
  },
  footer: {
    flex: 55,

    backgroundColor: '#A0b63E',
  },
});
