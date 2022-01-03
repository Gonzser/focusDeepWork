import React, {useState} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../../components/RoundedButton';
import {fontSizes, spacing} from '../../utils/sizes';

export const Focus = ({addSubject}) => {
  const [tempItem, setTempItem] = useState(null);

  const itemInputHandler = enteredText =>{
    console.log(enteredText);
    setTempItem(enteredText);
  };

  const addItemHandler = ()=>{
    console.log('Action at addItemHandler');
    console.log(tempItem);
    // setFocusSubject(tempItem);
    addSubject(tempItem);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{flex: 1, marginRight: spacing.lg}}
            placeholder="Deep Work on ..."
            onChangeText={itemInputHandler}
            value={tempItem}
            onSubmitEditing={addItemHandler}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={addItemHandler}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
