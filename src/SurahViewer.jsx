import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const SurahViewer = ({ fontSize, route, navigation }) => {
  const { name, verse } = route.params;

  navigation.setOptions({ title: name });

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
    },
    line: {
      fontSize: fontSize,
      color: 'black',
      borderBottomWidth: 0.5,
      padding: 8,
      backgroundColor: '#FFFFFF',
    },
  });

  const renderVerses = () => {
    if (!verse) return [];

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
