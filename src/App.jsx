import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import SurahViewer from './SurahViewer';
import Slider from '@react-native-community/slider';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SurahList from './SurahList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SurahList">
        <Stack.Screen
          name="SurahList"
          component={SurahList}
        />
        <Stack.Screen 
          name="SurahViewer" 
          component={SurahViewer} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // const [fontSize, setFontSize] = useState(24);

  // return (
  //   <View>
  //     <Slider
  //       style={styles.slider}
  //       onValueChange={e => {
  //         const adj = 10 * (e * 2 - 1);
  //         setFontSize(24 + adj);
  //       }}
  //     />
  //     <SurahViewer fontSize={fontSize} />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    paddingVertical: 16,
    borderBottomWidth: 1,
    backgroundColor: '#FFFFFF'
  },
});

export default App;
