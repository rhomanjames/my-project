import React, {useState} from 'react';
import { Text, View, Image, ScrollView, Button } from 'react-native';
import Music from './components/Music';
import Home from './components/Home';
import Audio from './components/Audio';
import Video from './components/video';
import Kid from './components/kids';
import Scripture from './components/scripture';
import Reader from './components/read';
import Header from './components/Header';
import * as Clipboard from 'expo-clipboard';
import ReactPlayer from 'react-player';
import RowOfRectImages from './components/RowOfImages';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Listen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#202020', headerShown: false }}>
      <Header />
      <Music />
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
  const [myVid, setmyVid] = useState('https://vimeo.com/556753538')

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
    <Kid />
      </View>
      
    );
}

function HomeTab() {
  return (
    <View style={{ flex: 1, backgroundColor: '#202020' }}>
      <Header />
      <Scripture 
        verse="For this is the love of Elohim, that we keep his commandments, and his commandments are not grievous." 
        location="1 John 5:3"
        action="How can you ensure that you are keeping Yah's commandments, and they are not grievous unto you?"/>
      <Home />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Listen"
      screenOptions={{
       tabBarActiveTintColor: 'gold', headerShown: false, tabBarInactiveBackgroundColor:'#202020', tabBarActiveBackgroundColor:'#202020',  elevation: 0,   // for Android
      }}
    >
      <Tab.Screen
        name="Read"
        component={Read}
        options={{
          tabBarLabel: 'Articles',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Listen"
        component={Listen}
        options={{
          tabBarLabel: 'Music',
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
          tabBarLabel: 'Videos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Play"
        component={Play}
        options={{
          tabBarLabel: 'Kids',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="human-child" color={color} size={size} />
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