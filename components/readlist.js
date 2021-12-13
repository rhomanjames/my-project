import  React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, Image, Button, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
function ReadImg (props) {return(
    <Image
    style={{width: 192, height:108, borderRadius: 10, marginHorizontal: 10, marginLeft: 0, marginVertical: 5}}
    source={props.image}
        />)}

function Section (props) {
    return (
        <View style={{marginTop: 20}}>
            <Text style={styles.bold}>{props.title}</Text>
            <Text style={styles.white}>{props.subtitle}</Text>
        </View>
    )
}

function ReadList () {

    return (
            <ScrollView style={styles.container}>
                    <Section title="History" subtitle="By KingdomPreppers.org"/>
                    <ScrollView horizontal={true} >
                            <ReadImg image='https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926354692-ZT19S8JZEOOWZ568SN2H/the-strictures-of-time.jpg' />
                            <ReadImg image='https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597925934747-RWPEE501EHTD63XJY5FW/flesh-inc.jpg?format=300w' />
                            <ReadImg image='https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597925934747-RWPEE501EHTD63XJY5FW/flesh-inc.jpg?format=300w' />
                            <ReadImg image='https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597925934747-RWPEE501EHTD63XJY5FW/flesh-inc.jpg?format=300w' />
                            <ReadImg image='https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597925934747-RWPEE501EHTD63XJY5FW/flesh-inc.jpg?format=300w' />
                    </ScrollView>    
                </ScrollView>
    );}

    


const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      paddingTop: 3,
      paddingBottom: 3,
      paddingHorizontal: 20,
      marginHorizontal: 10,
      borderRadius: 20,
      border: 2, 
      borderColor: 'white',
      borderWidth: 3,
      color: 'black',
      backgroundColor: 'gray'
    }, 
    scrolling :{
        
    },
    white:{
        color:'white',
        opacity: .7,
    }, 
    bold: {
        color: 'white',
        fontWeight: 'bold'
    }, 
    container: {
        paddingLeft: 20,
    }
  })

  export default ReadList
