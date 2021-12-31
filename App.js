import React from 'react';
import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Focus} from './src/features/focus/Focus';
import {Timer} from './src/features/timer/Timer';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer />
      ) : (
        // <Text> Here I want to build an input for a subject!</Text>
        <Focus addSubject={setFocusSubject} />
      )}
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#A4b63E',
  },
});
