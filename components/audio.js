import React, {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './Header';

import RowOfSquareImages from './RowOfSquareImages';

function Audio () {

    
    return(
        
    <View style={{flex: 1}}>
               <ScrollView showsVerticalScrollIndicator={false}>
        <RowOfSquareImages 
        title="Trending"
        subtitle="New tracks to glorify Yah"
        image1="https://i1.sndcdn.com/artworks-ANJ5yMXRM4fRmBb6-wjNz3w-t500x500.jpg"
        image2="https://i1.sndcdn.com/artworks-000630834745-wujzzw-t500x500.jpg"
        image3="https://i1.sndcdn.com/artworks-Od0ZlFPaiQHB2dv5-GQxtzA-t500x500.jpg"
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

export default Audio