import React from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import {store} from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {KeyboardAvoidingView, Platform} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import tw from 'tailwind-react-native-classnames';
import MapScreen from './screens/MapScreen';

function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={tw`flex-1`}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
