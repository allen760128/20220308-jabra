
import { StyleSheet, Text, View, ImageBackground, StatusBar, Image, SafeAreaView } from 'react-native';
import Index from './src/screen/index';
import Mode from './src/screen/mode';
import Fuck from './src/screen/fuck';
import Nice from './src/screen/nice';
import Shit from './src/screen/shit';
import ModeSSetting from './src/screen/modesetting';
import Aroundsound from './src/screen/aroundsound';
import Soundtry from './src/screen/soundtry';
import Musiceq from './src/screen/musiceq';
import Calltry from './src/screen/calltry';
import Earpodasis from './src/screen/earpodasis';
import Noisecover from './src/screen/noisecover';
import React from 'react';
import { StoreContext } from 'redux-react-hook';
import Store from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const Modepage = () => {

    return (
      <Stack.Navigator
        initialRouteName='mode'
        screenOptions={() => ({

          headerStyle: {
            backgroundColor: '#181818',
            shadowColor: 'transparent',
            borderBottomWidth: 0
          },
          headerTintColor: '#69696b',
          headerTitle: 'Jabra Elite 65t',
        })}

      >
        <Stack.Screen name="mode" component={Mode} />
        <Stack.Screen name="編輯偏好" component={ModeSSetting}
          options={{
            headerTitle: '編輯偏好',
            headerTintColor: '#fff',
            headerBackTitle: '返回'
          }} />
        <Stack.Screen name="周遭聲音" component={Aroundsound}
          options={{
            headerTitle: '周遭聲音',
            headerTintColor: '#fff',
            headerBackTitle: '返回'
          }} />
        <Stack.Screen name='音樂等化器' component={Musiceq}
          options={{
            headerTitle: '音樂等化器',
            headerTintColor: '#fff',
            headerBackTitle: '返回'
          }} />
        <Stack.Screen name='聲音體驗' component={Soundtry}
          options={{
            headerTitle: '聲音體驗',
            headerTintColor: '#fff',
            headerBackTitle: '返回'
          }} />
        <Stack.Screen name='通話體驗' component={Calltry}
          options={{
            headerTitle: '通話體驗',
            headerTintColor: '#fff',
            headerBackTitle: '返回'
          }} />
        <Stack.Screen name='耳機協助' component={Earpodasis}
          options={{
            headerTitle: '耳機協助',
            headerTintColor: '#fff',
            headerBackTitle: '返回'
          }}
        />
        <Stack.Screen name='音景' component={Noisecover}
          options={{
            headerTitle: '音景',
            headerTintColor: '#fff',
            headerBackTitle: '返回'
          }}
        />
      </Stack.Navigator>
    )

  }


  return (
    <StoreContext.Provider value={Store}>

      <View style={{ flex: 1 }}>

        <StatusBar
          barStyle='light-content'
          hidden={false}
        />

        < NavigationContainer >
          <Tab.Navigator
            initialRouteName='首頁'
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
            <Tab.Screen name="情境模式" component={Modepage}
              options={{
                headerShown: false
              }} />
            <Tab.Screen name="探索" component={Fuck} />
            <Tab.Screen name="關於" component={Shit} />
          </Tab.Navigator>
        </NavigationContainer >

      </View >

    </StoreContext.Provider>
  );
}


export default App;