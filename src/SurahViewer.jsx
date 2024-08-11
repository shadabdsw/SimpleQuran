import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const SurahViewer = ({ route, navigation }) => {
  const { verse, name } = route.params;

  navigation.setOptions({
    title: name,
    headerTitleStyle: {
      fontSize: 28,
    },
  });

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
    },
    verseLine: {
      fontSize: 32,
      color: 'black',
      borderBottomWidth: 1,
      padding: 8,
      backgroundColor: 'white',
      fontFamily: 'AlQuran-IndoPak-by-QuranWBW.v.4.2.2-WL',
    },
  });

  const renderVerses = () => {
    if (!verse) return [];

    const keys = Object.keys(verse);
    const v = [];
    keys.forEach(key => {
      v.push(
        <View key={key}>
          <Text style={styles.verseLine}>
            <Text>{key.replace('verse_', '')}</Text> {verse[key]}
          </Text>
        </View>,
      );
    });
    return v;
  };

  return <ScrollView style={styles.container}>{renderVerses()}</ScrollView>;
};

export default SurahViewer;
