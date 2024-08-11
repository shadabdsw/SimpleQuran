import React from 'react';
import SurahViewer from './SurahViewer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurahList from './SurahList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SurahList">
        <Stack.Screen name="Surah" component={SurahList} />
        <Stack.Screen name="SurahViewer" component={SurahViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
