import React from 'react';
import Sample from './Sample';
import { StyleSheet, View } from 'react-native';

const App = () => {
  const renderList = () => {
    const a = [];
    for (var i = 0; i < 10; i++) {
      a.push(<Sample user={'Adil' + i} />);
    }
    return a;
  };

  return <View style={styles.container}>{renderList()}</View>;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
});

export default App;
