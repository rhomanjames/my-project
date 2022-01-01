import React, {useState} from 'react';
import { Text, View, Image, ScrollView, Button } from 'react-native';
import Music from './components/Music';
import Home from './components/Home';
import Audio from './components/Audio';
import Video from './components/video';
import Kid from './components/kids';
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
    <View style={{flex:1, backgroundColor: '#202020', headerShown: false }}>
      <Header />
      <Audio />
      {/*<Music />*/}
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
      <View showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#202020' }}>
        <Header />
    <Kid />
      </View>
      
    );
}

function HomeTab() {

  const [showMenu, setshowMenu] = useState('none')
  return (
    <View style={{ flex: 1, backgroundColor: '#202020' }}>
      <View style={{backgroundColor: '#020202', width: 'fit-content', height: 'fit-content', position: 'absolute', zIndex: 2, padding: 10}}>
        <View style={{justifyContent: 'flex-end', right: 0, top: 0, display:showMenu}}>
        <MaterialCommunityIcons name="close" color="gold" size={24} />
        </View>

        <ScrollView style={{paddingTop: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'white', paddingVertical: 10}}><MaterialCommunityIcons name="calendar" color="gold" size={24} /><Text style={{color: 'white', marginHorizontal: 10}}>Calendar</Text></View>
        <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'white', paddingVertical: 10}}><MaterialCommunityIcons name="pencil" color="gold" size={24} /><Text style={{color: 'white', marginHorizontal: 10}}>Journal</Text></View>
        <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'white', paddingVertical: 10}}><MaterialCommunityIcons name="lock" color="gold" size={24} /><Text style={{color: 'white', marginHorizontal: 10}}>Privacy</Text></View>
        <View style={{flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0, borderBottomColor: 'white', paddingVertical: 10}}><MaterialCommunityIcons name="message" color="gold" size={24} /><Text style={{color: 'white', marginHorizontal: 10}}>Contact us</Text></View>
        </ScrollView>
      </View>
      <Header onPress={()=> setshowMenu('block')}/>
      <Home />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Listen"
      style={{maxWidth: '500px'}}
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
    <NavigationContainer >
      <MyTabs/>
    </NavigationContainer>
  );
}