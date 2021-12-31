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
        {focusSubject ? (
          <Timer focusSubject={focusSubject}/>
        ) : (
          <Focus addSubject={setFocusSubject} />
        )}
        <Text>{focusSubject}</Text>
      </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#A4b63E',
  },
});
