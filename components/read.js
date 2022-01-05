import React, {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ReactPlayer from 'react-player';
import { Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import Header from './Header';
import RowOfRectImages from './RowOfImages';

function Img (props) {return(
    <Image
    style={{width: 192, height:108, borderRadius: 10, marginHorizontal: 10, marginLeft: 0, marginVertical: 5}}
    source={props.image}
        />)}

function Section (props) {
    return (
        <View style={{marginTop: 5 }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'gold'}}>{props.title}</Text>
            <Text style={{color: 'white'}}>{props.subtitle}</Text>
        </View>
    )
}

    

function Video () {

    const [myTitle, setmyTitle]= useState('');
    const [myImg, setmyImg]= useState('');
    const [myText, setmyText]= useState('');
    const [myDisplay, setmyDisplay]= useState('none');
    return(

        

    <View style={{flex: 1}}>
        <ScrollView>
            <Text style={{color: 'white'}}>{myTitle}</Text>
           <Text style={{color: 'white'}}>{myText}</Text>
            </ScrollView>
        <View style={{ width: '100%', position: 'absolute',  height: '100%', backgroundColor: 'green', zIndex: 2, display: `${myDisplay}`}}>
        <Image style={{height: 216, width: 384}} source={myImg}/>
        <View style={{flex: 1}}>
            <Button onPress={() => setmyDisplay('none')} ><Text>Close</Text></Button>
        </View>
            
        </View>
               <ScrollView showsVerticalScrollIndicator={false}>
              
    </ScrollView>    

    </View>
    
    )

function RowOfRectImages (props)  

    {
        return (
        
                        <View style={{paddingLeft: 20, paddingTop: 10}}>
                           <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }} />
                        </View >
                        )
                        
                    }
    
    
};



export default RowOfRectImages

