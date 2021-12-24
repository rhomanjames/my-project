import React, {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ReactPlayer from 'react-player';
import * as Clipboard from 'expo-clipboard';
import { Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';

export default function Scripture (props) {
    const [copiedText, setCopiedText] = React.useState('');

    const copyToClipboard = () => {
      Clipboard.setString(props.verse + ' ' + props.location + ' -- ' + props.action + '-- Download the Serving Yah app today!');
    };
  
    const fetchCopiedText = async () => {
      const text = await Clipboard.getStringAsync();
      setCopiedText(text);
    };

    return (
        <View style={{ alignSelf:'center', width: '100%'}}>
            <View style={{backgroundColor: 'white', width: '80%', alignSelf: 'center', alignItems: 'center', padding: 20, borderRadius: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 15, textAlign: 'center', marginBottom: 10}}>{props.verse}</Text>
                <Text style={{fontWeight: 'bold', color: 'black', marginVertical: 5}}>{props.location}</Text>
                <Text style={{fontWeight: 'bold', color: 'grey', fontStyle: 'italic', textAlign: 'center', marginVertical: 15, }}>{props.action}</Text>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                <TouchableOpacity style={{padding: 10, borderRadius: '50%', backgroundColor: 'gold'}}><MaterialCommunityIcons name="twitter" color="black" size={24}/></TouchableOpacity>
                <TouchableOpacity style={{padding: 10, borderRadius: '50%', backgroundColor: 'gold', marginHorizontal: 10}}><MaterialCommunityIcons name="facebook" color="black" size={24}/></TouchableOpacity>
                <TouchableOpacity style={{padding: 10, borderRadius: '50%', backgroundColor: 'black'}}><MaterialCommunityIcons name="shuffle" color="gold" size={24}/></TouchableOpacity>
                <TouchableOpacity onPress={copyToClipboard}  style={{padding: 10, borderRadius: '50%', backgroundColor: 'gold', marginHorizontal: 10}}><MaterialCommunityIcons name="content-copy" color="black" size={24}/></TouchableOpacity>
                <TouchableOpacity style={{padding: 10, borderRadius: '50%', backgroundColor: 'gold'}}><MaterialCommunityIcons name="share" color="black" size={24}/></TouchableOpacity>
                </View>
                </View>
    
        </View>
    )

}