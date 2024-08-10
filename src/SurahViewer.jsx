import React from 'react';
import surah1 from './assets/surah/surah_1.json'
import surah2 from './assets/surah/surah_2.json'
import surah3 from './assets/surah/surah_3.json'
import surah4 from './assets/surah/surah_4.json'
import surah5 from './assets/surah/surah_5.json'
import surah6 from './assets/surah/surah_6.json'
import surah7 from './assets/surah/surah_7.json'
import surah8 from './assets/surah/surah_8.json'
import surah9 from './assets/surah/surah_9.json'
import surah10 from './assets/surah/surah_10.json'
import { ScrollView, StyleSheet, Text } from 'react-native';

const SurahViewer = ({ fontSize, route }) => {
  const surahData = route.params;
  const path = `./assets/surah/surah_${surahData.data}`;
  console.log(`surah_${surahData.data}`)

  // const { verse } = require(`./assets/surah/surah_${surahData.data}.json`);
  let s;
  switch (surahData.data) {
    case 1:
      s = surah1;
      break;
    case 2:
      s = surah2;
      break;
    case 3:
      s = surah3;
      break;
    case 4:
      s = surah4;
      break;
    case 5:
      s = surah5;
      break;
    case 6:
      s = surah6;
      break;
    case 7:
      s = surah7;
      break;
    case 8:
      s = surah8;
      break;
    case 9:
      s = surah9;
      break;
    case 10:
      s = surah10;
      break;
    default:
      s = surah1;
  }

  const { verse } = s;

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
    },
    line: {
      fontSize: fontSize,
      color: 'black',
      borderBottomWidth: 0.5,
      padding: 8,
      backgroundColor: '#FFFFFF'
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
