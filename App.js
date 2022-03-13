
import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, SafeAreaView } from 'react-native';
import Index from './src/screen/index';
import Mode from './src/screen/mode';
import Fuck from './src/screen/fuck';
import Nice from './src/screen/nice';
import Shit from './src/screen/shit';
import React from 'react';
import { StoreContext } from 'redux-react-hook';
import Store from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  {/* <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Profiles" component={Profile} />
          <Stack.Screen name="Fick" component={Fuck} />
          <Stack.Screen name="Shit" component={Shit} />
          <Stack.Screen name="Nice" component={Nice} />
        </Stack.Navigator>
       </NavigationContainer> */}

  return (
    <StoreContext.Provider value={Store}>

      <View style={{ flex: 1 }}>

        <StatusBar
          // translucent
          // backgroundColor={'#000'}
          barStyle='light-content'
          hidden={false}
        />

        < NavigationContainer >
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                let piclink;
                if (route.name === '首頁') {
                  focused ? piclink = require('./assets/img/main_icon3_2.png') : piclink = require('./assets/img/main_icon3.png')
                } else if (route.name === '情境模式') {
                  focused ? piclink = require('./assets/img/main_icon6_2.png') : piclink = require('./assets/img/main_icon6.png')
                } else if (route.name === '探索') {
                  focused ? piclink = require('./assets/img/main_icon5_2.png') : piclink = require('./assets/img/main_icon5.png')
                } else if (route.name === '關於') {
                  focused ? piclink = require('./assets/img/main_icon4_2.png') : piclink = require('./assets/img/main_icon4.png')
                }
                return <Image style={{ width: 25, height: 25 }} source={piclink}></Image>
              },
              tabBarActiveTintColor: '#fdd103',
              tabBarInactiveTintColor: 'white',
              tabBarStyle: { backgroundColor: '#181818', borderTopWidth: 0 },
              headerStyle: {
                backgroundColor: '#181818',
                shadowColor: 'transparent',
                borderBottomWidth: 0
              },
              headerTintColor: '#69696b',
              headerTitle: 'Jabra Elite 65t',
              headerTitleStyle: {
              },
            })}
          >
            <Tab.Screen name="首頁" component={Index} />
            <Tab.Screen name="情境模式" component={Mode} />
            <Tab.Screen name="探索" component={Fuck} />
            <Tab.Screen name="關於" component={Shit} />
          </Tab.Navigator>
        </NavigationContainer >

      </View >

    </StoreContext.Provider>
  );
}


export default App;