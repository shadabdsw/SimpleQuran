import React from 'react';
import surahList from './assets/surah.json'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const SurahList = ({ navigation }) => {
    const listOfSurah = surahList;

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
        },
        text: {
            fontSize: 18,
            color: 'black',
            padding: 8,
            borderBottomWidth: 0.5,
        },
    });

    const renderList = () => {
        const v = [];
        listOfSurah.forEach(surah => {
            v.push(
                <TouchableOpacity onPress={() => navigation.navigate('SurahViewer', { data: Number(surah.index) })}>
                    <Text style={styles.text}>{Number(surah.index)} | {surah.title}</Text>
                </TouchableOpacity>,
                <View style={styles.horizontalLine}></View>
            );
        });
        return v;
    };

    return (
        <View style={{ flex: 1, padding: 8 }}>
            <ScrollView style={styles.container}>{renderList()}</ScrollView>
        </View>
    );
};

export default SurahList;