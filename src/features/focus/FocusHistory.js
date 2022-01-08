import React from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { fontSizes, spacing } from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";

export const FocusHistory = ({ focusHistory, onClear }) => {

    const HistoryItem = ({ item, index }) => {
        return (
            <>
                <Text style={styles.historyItem(item.status)}>
                    {item.subject}
                </Text>
            </>
        )
    }

    const clearHistory = () => {
        onClear()
    }

    return (
        <>
            <SafeAreaView style={styles.focusContainer}>

                {!!focusHistory.length && (
                    <>
                        <Text style={styles.title}>
                            We've focused on:
                        </Text>

                        <FlatList
                            style={{ flex: 1 }}
                            contentContainerStyle={{ flex: 1, alignItems: 'center' }}
                            data={focusHistory}
                            renderItem={HistoryItem}

                        />
                        <View style={styles.clearContainer}>
                            <RoundedButton size={75} title="Clear" onPress={() => clearHistory()} />
                        </View>
                    </>
                )}

                {!focusHistory.length && (
                    <>
                    <Text style={styles.title}>
                        Nothing to Focus on, yet ...
                    </Text>
                    </>
                )}

            </SafeAreaView>

        </>
    )
}

const styles = StyleSheet.create({
    historyItem: (status) => ({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.md
    }),
    title: {
        color: 'white',
        fontSize: fontSizes.lg,
    },
    clearContainer: {
        alignItems: 'center',
        padding: spacing.md,
        
    },
    focusContainer:{
        
        flex: 1,
        alignItems: 'center'
    }
})
