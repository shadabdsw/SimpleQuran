import React from 'react';
import surah10 from './assets/surah_10.json';
import { ScrollView, StyleSheet, Text } from 'react-native';

const SurahViewer = ({ fontSize }) => {
  const { verse } = surah10;

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
    },
    line: {
      fontSize: fontSize,
      color: 'black',
      borderBottomWidth: 0.5,
      padding: 8,
    },
  });

  const renderVerses = () => {
    const keys = Object.keys(verse);
    const v = [];
    keys.forEach(key => {
      v.push(
        <Text key={key} style={styles.line}>
          {verse[key]}
        </Text>,
      );
    });
    return v;
  };

  return <ScrollView style={styles.container}>{renderVerses()}</ScrollView>;
};

export default SurahViewer;
