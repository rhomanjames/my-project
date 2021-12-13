import * as React from 'react';
import { Text, View } from 'react-native';
import Music from './components/Music';
import Home from './components/Home';
import Audio from './components/Audio';
import Video from './components/video';
import Reader from './components/read';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Listen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#202020', headerShown: false }}>
      <Header />
      {/*<Music />*/}
      <Audio />
    </View>
  );
}

function Read() {
  return (
    <View style={{ flex: 1, backgroundColor: '#202020' }}>
      <Header />
      <Reader />
    </View>
  );
}

function Watch() {
  return (
    <View style={{ flex: 1, backgroundColor: '#202020' }}>
      <Header />
      <Video />
    </View>
  );
}

function Play() {
  return (
    <View style={{ flex: 1, backgroundColor: '#202020' }}>
      <Header />
      <Text>Play</Text>
    </View>
  );
}

function HomeTab() {
  return (
    <View style={{ flex: 1, backgroundColor: '#202020' }}>
      <Header />
      <Home />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'gold', headerShown: false, tabBarInactiveBackgroundColor:'#202020', tabBarActiveBackgroundColor:'#202020',  elevation: 0,   // for Android
      }}
    >
      <Tab.Screen
        name="Read"
        component={Read}
        options={{
          tabBarLabel: 'Read',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Listen"
        component={Listen}
        options={{
          tabBarLabel: 'Listen',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="music" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Watch"
        component={Watch}
        options={{
          tabBarLabel: 'Watch',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Play"
        component={Play}
        options={{
          tabBarLabel: 'Play',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="google-controller" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}