import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, FlatList } from 'react-native';
import { Audio } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function Music () {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Wade in the Water',
      subtitle: 'Sounds of Sinai',
      image: 'https://i1.sndcdn.com/artworks-N7VU9LcY2McWRhrj-kdDXeg-t240x240.jpg'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Praise Yah',
      subtitle: 'Lorvins',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Praise Yah',
        subtitle: 'Lorvins',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Praise Yah',
        subtitle: 'Lorvins',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Praise Yah',
        subtitle: 'Lorvins',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Praise Yah',
        subtitle: 'Lorvins',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Praise Yah',
        subtitle: 'Lorvins',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Praise Yah',
        subtitle: 'Lorvins',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Praise Yah',
        subtitle: 'Lorvins',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Praise Yah',
        subtitle: 'Lorvins',
      },
      {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Praise Yah',
          subtitle: 'Lorvins',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Praise Yah',
          subtitle: 'Lorvins',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Praise Yah',
          subtitle: 'Lorvins',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Praise Yah',
          subtitle: 'Lorvins',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Praise Yah',
          subtitle: 'Lorvins',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Praise Yah',
          subtitle: 'Lorvins',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Praise Yah',
          subtitle: 'Lorvins',
        },

  ];
  
  const Item = ({ title, subtitle, image}) => (
    <View style={styles.item}>
    <Image styles={{width: 50, height: 50}} source={image}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} subtitle={item.subtitle} image={item.image}/>
  

  return (
    <View style={{flex: 1}}>
        <View style={{flex: 1}}>
            <ScrollView horizontal={true}>
                <TouchableOpacity style={{backgroundColor: 'gold', borderRadius: 20, padding: 8, margin: 5, marginVertical: 10}}><Text>All</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: 'gold', borderRadius: 20, padding: 8, margin: 5, marginVertical: 10}}><Text>Choir</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: 'gold', borderRadius: 20, padding: 8, margin: 5, marginVertical: 10}}><Text>Rap/Hip Hop</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: 'gold', borderRadius: 20, padding: 8, margin: 5, marginVertical: 10}}><Text>RnB</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: 'gold', borderRadius: 20, padding: 8, margin: 5, marginVertical: 10}}><Text>Instrumentals</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: 'gold', borderRadius: 20, padding: 8, margin: 5, marginVertical: 10}}><Text>Chill</Text></TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: 'gold', borderRadius: 20, padding: 8, margin: 5, marginVertical: 10}}><Text>Piano</Text></TouchableOpacity>
            </ScrollView>
        </View>
        <View style={styles.container}>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
        </View>
        <View style={{backgroundColor: '#a6a6a6', flex: 1, bottom: 0, borderColor: 'black', width: '100%', flexDirection: 'row', alignItems:'center', justifyContent: 'center'}}>
            <View style={{width: '100%', flex: 1, flexDirection: 'row', paddingHorizontal:10}}>
            <Image style={{width: 30, height:30, marginLeft: 5}} source={{uri: 'https://i1.sndcdn.com/artworks-N7VU9LcY2McWRhrj-kdDXeg-t240x240.jpg'}}/>
                <View style={{textAlign: 'left', flex: 1, marginLeft: 5}}>
                    <Text style={{fontWeight:'bold', color: 'black', fontSize: 15}}>Prodigal Son</Text>
                    <Text style={{ color: 'black', fontSize: 12}}>NoNameServant</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'right', flex: 1, alignItems:'center', position: 'absolute', width: '98%', paddingRight: 10}}>
                    <TouchableOpacity title="Play Sound" onPress={playSound} >
                    <MaterialCommunityIcons name="skip-backward" color="black" size={36}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal: 5}} title="Play Sound" onPress={playSound} >
                    <MaterialCommunityIcons name="pause" color="black" size={36}/>
                </TouchableOpacity>
                <TouchableOpacity title="Play Sound" onPress={playSound} >
                    <MaterialCommunityIcons name="skip-forward" color="black" size={36}/>
                </TouchableOpacity>
                </View>
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: 'center',
    backgroundColor: '#0202',
    padding: 10,
    paddingBottom: 0,
  },
  item: {
    borderBottomWidth: 1,
    padding: 3,
  },
  title: {
      fontSize: 17,
    color: 'white'
  },
  subtitle: {
      color: 'gray'
  }
});
