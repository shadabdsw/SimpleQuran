import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Sample = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text>Hello, {user}</Text>
      <Button title='Submit'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
});

export default Sample;
