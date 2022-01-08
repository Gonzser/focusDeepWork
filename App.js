import React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import AsyStorage from '@react-native-async-storage/async-storage';

import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import {FocusHistory} from './src/features/focus/FocusHistory';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

// console.log(window.height);
// console.log('window.height');
const maxWindowActual = window.height;

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
  CANDIDATE: 3
}

export default function App() {
  const [focusSubject, setFocusSubject] = useState('Finish this App today');
  const [focusHistory, setFocusHistory] = useState([]);

  const saveFocusAsyHistory = async (focusHistory)=> {
    try{
      await AsyStorage.setItem("@focusHistory", JSON.stringify(focusHistory));
    }catch(e){
      console.log(e);
    }
  };

  const loadFocusHistory = async () =>{
    try {
      const history = await AsyStorage.getItem('@focusHistory');

      if(history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    loadFocusHistory();
  },[])

  useEffect(()=>{
    saveFocusAsyHistory();
  },[focusHistory])

  const addFocusHistorySubjectWithStatus = (subject, status) => {
    setFocusHistory([...focusHistory, { key: String(focusHistory.length +1),  subject, status }]);
    console.log(focusHistory);
    console.log('one call');
    setFocusSubject(null);
  };

  const onTimerEnd = () => {
    addFocusHistorySubjectWithStatus(focusSubject, STATUSES.COMPLETE);
    setTimeout(() => {

      setFocusSubject(null);
    }, 2000);
  };

  const onClear = () => {
    setFocusHistory([]);

  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <View style={dStyles(maxWindowActual).pushScroll}>
        <View style={styles.header} />
        <View style={styles.body}>
          {focusSubject ? (
            <Timer
              focusSubject={focusSubject}
              onTimerEnd={onTimerEnd}
              clearSubject={() => {
                addFocusHistorySubjectWithStatus(focusSubject, STATUSES.CANCELLED);
              }}
              doneSubject={onTimerEnd}
            />
          ) : (
            <>
              <Focus addSubject={setFocusSubject} />
              <FocusHistory focusHistory={focusHistory} onClear={onClear} />
            </>
          )}
        </View>
        <View style={styles.footer} />
      </View>
      {/* </ScrollView> */}
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
