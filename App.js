import React from 'react';
import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

import {Focus} from './src/features/focus/Focus';
import {Timer} from './src/features/timer/Timer';


export default function App() {
  const [focusSubject, setFocusSubject] = useState('Finish this App today');

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.header}>

      </View>
      <View style={styles.body}>
        {focusSubject ? (
          <Timer focusSubject={focusSubject}/>
        ) : (
          <Focus addSubject={setFocusSubject} />
        )}
       
      </View>
      <View style={styles.footer}>

      </View>
    </View>
    
      
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#A4b63E',
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
