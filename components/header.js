import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

function Header () {
    return(
    <View style={{ width:'100%', position: 'sticky', top: 0, zIndex: 1, backgroundColor:'#202020', flexDirection: 'row', justifyContent: 'space-between', padding: 5, }}>
        <View style={{ width:'10%', justifyContent: 'left'}}>
            <MaterialCommunityIcons name="menu" color='white' size={36} />
        </View>
        <View style={{ width:'80%', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
        <MaterialCommunityIcons name="crown" color='gold' size={36} />
        </
        View>
        <View style={{ width:'10%', justifyContent: 'right', flex: 1, flexDirection:'row'}}>
            <MaterialCommunityIcons name="" color='white' size={36} />
            <MaterialCommunityIcons name="" color='white' size={36} />
        </View>
        
    </View>)
}

export default Header