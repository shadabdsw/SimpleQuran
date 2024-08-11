import React from 'react';
import surahList from './assets/surah.json';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import loadSurah from './SurahLoader';

const SurahList = ({ navigation }) => {
  navigation.setOptions({
    headerTitleStyle: {
      fontSize: 28,
    },
  });

  const listOfSurahs = surahList;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
    },
    scrollContainer: {
      display: 'flex',
    },
    text: {
      flexGrow: 1,
      fontSize: 28,
      color: 'black',
      padding: 8,
      borderBottomWidth: 0.5,
    },
    numberText: {
      borderRadius: 10,
      borderWidth: 1,
      padding: 2,
      paddingHorizontal: 8,
      color: 'black',
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      flex: 1,
      flexDirection: 'row',
    },
  });

  const renderList = () => {
    const v = [];
    listOfSurahs.forEach(surah => {
      const { verse } = loadSurah(Number(surah.index));
      v.push(
        <TouchableOpacity
          key={surah.index}
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('SurahViewer', { verse, name: surah.title })}
        >
          <Text style={styles.numberText}>{Number(surah.index)}</Text>
          <Text style={styles.text}>{surah.title}</Text>
        </TouchableOpacity>,
      );
    });
    return v;
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>{renderList()}</ScrollView>
    </View>
  );
};

export default SurahList;
