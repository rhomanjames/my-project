import React, {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './Header';

import RowOfRectImages from './RowOfImages';
import RowOfSquareImages from './RowOfSquareImages';

function HomeIcon (props){
    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 100,}}>
            <View style={{backgroundColor: 'transparent', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginBottom: 10, borderWidth: 1, borderColor: 'gold', borderStyle: 'solid'}}>
                <MaterialCommunityIcons name={props.icon} color='gold' size={20} />
            </View>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{props.title}</Text>
        </View>)
}

function HomeTab () {
    
    return(
    <View style={{flex: 1}}>
       {/*} <ScrollView horizontal={true} style={{padding:5, paddingVertical: 20, width: '100%'}}>

        `       <HomeIcon icon='account-child' title='Kids'/>
                <HomeIcon icon='book' title='Quick Read'/>
                <HomeIcon icon='calendar-search' title='Calendar'/>
                <HomeIcon icon='food' title='Recipes'/>
                <HomeIcon icon='dumbbell' title='Workout'/>
                <HomeIcon icon='pencil' title='Journal'/>
                
    </ScrollView>*/}
               <ScrollView showsVerticalScrollIndicator={false}>
        <RowOfRectImages 
        title="Top Reads"
        subtitle="Yah-inspired reads for you"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1619880134596-3FAXME07X39WU9652MBD/the-compound-interest-of-prayer.jpg?format=750w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926370317-A320XP2RMM59Q5L5QIYQ/the-strictures-of-time.jpg?format=1500w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926354692-ZT19S8JZEOOWZ568SN2H/the-strictures-of-time.jpg?format=500w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
            />
        
        <RowOfRectImages 
        title="Top Videos"
        subtitle="Check out the most-viewed videos"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482356629662-2BEX7NJUV4KY5BNAEAGL/youtube-thumbnail-understanding-sabbath.jpg?format=750w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1602521393221-9WXBWHXOMB2BKA9DIWJD/youtube-thumbnail-yahs-handiwork.jpg?format=750w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926354692-ZT19S8JZEOOWZ568SN2H/the-strictures-of-time.jpg?format=500w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
            />
            <RowOfSquareImages 
        title="Top Songs"
        subtitle="Truth music for you and your family"
        image1="https://i1.sndcdn.com/artworks-ANJ5yMXRM4fRmBb6-wjNz3w-t500x500.jpg"
        image2="https://i1.sndcdn.com/artworks-GCCrwQ5xcsgyQJ05-ZCXAxQ-t500x500.jpg"
        image3="https://i1.sndcdn.com/artworks-itYdey2r7g4s8Mub-7dNeUQ-t500x500.jpg"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
            />
    </ScrollView>    

    </View>)
}

export default HomeTab