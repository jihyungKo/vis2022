import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Main from './Components/Main.js';
import Game from './Components/Game.js';
import Res from './Components/Res.js'

import {Button, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: ''}}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options= {({navigation}) => ({title: '',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Main')}>
                  <Icon style={{ marginRight: 10 }}
                    name='home'
                    size={20}
                    color='#38525E'
                  />
                </TouchableOpacity>
              ),
            }
          )}
        />
        <Stack.Screen
          name="Res"
          component={Res}
          options= {({navigation}) => ({title: '',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Main')}>
                  <Icon style={{ marginRight: 10 }}
                    name='home'
                    size={20}
                    color='#38525E'
                  />
                </TouchableOpacity>
              ),
            }
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center' }
  }
);

export default App;