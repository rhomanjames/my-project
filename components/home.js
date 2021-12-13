import React, {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './Header';

import RowOfRectImages from './RowOfImages';
import RowOfSquareImages from './RowOfSquareImages';

function HomeTab () {

    
    return(
    <View style={{flex: 1}}>
        <ScrollView horizontal={true} style={{padding:20, height: 150, width: '100%'}}>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 100}}>
                    <View style={{backgroundColor: 'gold', width: 60, height: 60, alignItems: 'center', borderRadius: '50%', padding: 10, marginBottom: 10}}>
                        <MaterialCommunityIcons name="book-open-variant" color='white' size={36} />
                    </View>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Daily Read</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 100}}>
                    <View style={{backgroundColor: 'gold', width: 60, height: 60, alignItems: 'center', borderRadius: '50%', padding: 10, marginBottom: 10}}>
                        <MaterialCommunityIcons name="food" color='white' size={36} />
                    </View>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Recipes</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 100}}>
                    <View style={{backgroundColor: 'gold', width: 60, height: 60, alignItems: 'center', borderRadius: '50%', padding: 10, marginBottom: 10}}>
                        <MaterialCommunityIcons name="pencil" color='white' size={36} />
                    </View>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Journal</Text>
                </View>
        </ScrollView>
               <ScrollView showsVerticalScrollIndicator={false}>
        <RowOfRectImages 
        title="Top Reads"
        subtitle="Yah-inspired reads for you"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1623455291405-W0VH0EK0JZUZ6Z9HZ06H/youtube-thumbnail-a-people-scattered.jpg?format=750w"
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
        
        <RowOfRectImages 
        title="Top Videos"
        subtitle="Check out the most-viewed videos"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1623455291405-W0VH0EK0JZUZ6Z9HZ06H/youtube-thumbnail-a-people-scattered.jpg?format=750w"
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
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1623455291405-W0VH0EK0JZUZ6Z9HZ06H/youtube-thumbnail-a-people-scattered.jpg?format=750w"
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
    </ScrollView>    

    </View>)
}

export default HomeTab