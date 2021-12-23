import React, {useState} from 'react';
import { Text, View, Image, ScrollView, Button } from 'react-native';
import Music from './components/Music';
import Home from './components/Home';
import Audio from './components/Audio';
import Video from './components/video';
import Reader from './components/read';
import Header from './components/Header';
import ReactPlayer from 'react-player';
import RowOfRectImages from './components/RowOfImages';

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
  const [myVid, setmyVid] = useState('https://vimeo.com/556753538')

  return (
    <View style={{ flex: 1, backgroundColor: '#202020' }}>
      <Header />
      <Video />
    </View>
    
  );
}

function Play() {

  const [myVid, setmyVid] = useState('https://vimeo.com/556753538')


  return (
    <View style={{backgroundColor: '#202020', flex: 1}}>
      <Header/>
      <Button style={{position: 'relative'}} onPress={() => setmyVid("https://vimeo.com/489123665")}/>
        <View style={{ position: 'relative', paddingBottom: '56.25%' }}>
          <ReactPlayer style={{top: 0, left:0, position:'absolute', minWidth: '100%', marginBottom: 10}} width="70%" height="70%" controls='1' url={myVid} />
        </View>
        
        <View style={{bottom: 0, position: 'relative', marginTop: 30}}>
         <Text>Test</Text>
        </View>
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
      initialRouteName="Watch"
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
          tabBarLabel: 'Play',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="google-controller" color={color} size={size} />
          ),
          tabBarVisible: false,
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