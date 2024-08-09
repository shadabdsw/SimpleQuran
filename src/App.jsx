import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SurahViewer from './SurahViewer';
import Slider from '@react-native-community/slider';

const App = () => {
  const [fontSize, setFontSize] = useState(24);

  return (
    <View>
      <Slider
        style={styles.slider}
        onValueChange={e => {
          const adj = 10 * (e * 2 - 1);
          setFontSize(24 + adj);
        }}
      />
      <SurahViewer fontSize={fontSize} />
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
});

export default App;
