import  React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, Image, Button, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Alert} from 'react-native';


function Img (props) {return(
    <Image
    style={{width: 192, height:108, borderRadius: 10, marginHorizontal: 10, marginLeft: 0, marginVertical: 5}}
    source={props.image}
        />)}

function Section (props) {
    return (
        <View style={{marginTop: 5 }}>
            <Text style={styles.bold}>{props.title}</Text>
            <Text style={styles.white}>{props.subtitle}</Text>
        </View>
    )
}


function RowOfRectImages (props)  

{ 
    return (
    
                    <View style={{paddingLeft: 20, paddingTop: 10}}>
                        <Section title={props.title}subtitle={props.subtitle}/>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity onPress={() => setmyVid("https://vimeo.com/489123665")}><Img  image={props.image1} id={props.vid1} /></TouchableOpacity>
                                <Img image={props.image2} />
                                <Img image={props.image3} />
                                <Img image={props.image4} />
                                <Img image={props.image5} />
                                <Img image={props.image6} />
                                <Img image={props.image7} />
                        </ScrollView> 
                    </View >
                    )
                }

    


const styles = StyleSheet.create({ 
    scrolling :{
        
    },
    white:{
        color:'white',
        marginBottom: 5,
    }, 
    bold: {
        color: 'gold',
        fontWeight: 'bold', 
        fontSize: 20
    }, 
    container: {
        paddingLeft: 20,
    }
  })

  export default RowOfRectImages
