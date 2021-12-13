import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './Header';

import RowOfRectImages from './RowOfImages';


function Reader () {
    return(
    <View style={{flex: 1}}>
        <ScrollView>
            <RowOfRectImages 
            title="Featured"
            subtitle="In-depth writings from KingdomPreppers.org"
            image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600292610410-V95YCP5UAZR2F9XFJ25C/day-of-atonement.jpg?format=300w"
            image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600200651812-E7USP9MBDZNOQL9HVOVA/feast-of-trumpets.jpg?format=300w"
            image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600200618679-BCSL2FSRB4HKU8SJ39SY/death-burial-and-cremation.jpg?format=300w"
            image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597927107540-3QAT6XJZ1QH0KFIB0YA6/enemies-among-us.jpg?format=300w"
            image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597927034994-B0JVB722KXLW8NAP4KYZ/the-fifth-commandment.jpg?format=300w"
            image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926972584-22EV8SKQ8WA9MNBCABJI/spare-not-the-rod.jpg?format=300w"
            image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926972584-22EV8SKQ8WA9MNBCABJI/spare-not-the-rod.jpg?format=300w"
            image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926733062-A86S6ULSIUFUDF5NP7CV/should-we-observe-man-made-feasts.jpg?format=300w"
            image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926489327-PSHP4OIO7X0CR69A252Q/yah-the-father-and-yah-the-son.jpg?format=300w"
            />
            <RowOfRectImages 
            title="Recipes"
            subtitle="Find kosher recipes for your next meal"
            image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600292610410-V95YCP5UAZR2F9XFJ25C/day-of-atonement.jpg?format=300w"
            image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600200651812-E7USP9MBDZNOQL9HVOVA/feast-of-trumpets.jpg?format=300w"
            image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600200618679-BCSL2FSRB4HKU8SJ39SY/death-burial-and-cremation.jpg?format=300w"
            image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597927107540-3QAT6XJZ1QH0KFIB0YA6/enemies-among-us.jpg?format=300w"
            image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597927034994-B0JVB722KXLW8NAP4KYZ/the-fifth-commandment.jpg?format=300w"
            image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926972584-22EV8SKQ8WA9MNBCABJI/spare-not-the-rod.jpg?format=300w"
            image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926972584-22EV8SKQ8WA9MNBCABJI/spare-not-the-rod.jpg?format=300w"
            image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926733062-A86S6ULSIUFUDF5NP7CV/should-we-observe-man-made-feasts.jpg?format=300w"
            image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926489327-PSHP4OIO7X0CR69A252Q/yah-the-father-and-yah-the-son.jpg?format=300w"
            />
            <RowOfRectImages 
            title="Testimonials"
            subtitle="Real stories from Yah's servants"
            image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600292610410-V95YCP5UAZR2F9XFJ25C/day-of-atonement.jpg?format=300w"
            image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600200651812-E7USP9MBDZNOQL9HVOVA/feast-of-trumpets.jpg?format=300w"
            image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600200618679-BCSL2FSRB4HKU8SJ39SY/death-burial-and-cremation.jpg?format=300w"
            image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597927107540-3QAT6XJZ1QH0KFIB0YA6/enemies-among-us.jpg?format=300w"
            image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597927034994-B0JVB722KXLW8NAP4KYZ/the-fifth-commandment.jpg?format=300w"
            image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926972584-22EV8SKQ8WA9MNBCABJI/spare-not-the-rod.jpg?format=300w"
            image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926972584-22EV8SKQ8WA9MNBCABJI/spare-not-the-rod.jpg?format=300w"
            image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926733062-A86S6ULSIUFUDF5NP7CV/should-we-observe-man-made-feasts.jpg?format=300w"
            image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926489327-PSHP4OIO7X0CR69A252Q/yah-the-father-and-yah-the-son.jpg?format=300w"
            />
            <RowOfRectImages 
            title="Featured"
            subtitle="In-depth writings from KingdomPreppers.org"
            image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600292610410-V95YCP5UAZR2F9XFJ25C/day-of-atonement.jpg?format=300w"
            image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600200651812-E7USP9MBDZNOQL9HVOVA/feast-of-trumpets.jpg?format=300w"
            image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600200618679-BCSL2FSRB4HKU8SJ39SY/death-burial-and-cremation.jpg?format=300w"
            image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597927107540-3QAT6XJZ1QH0KFIB0YA6/enemies-among-us.jpg?format=300w"
            image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597927034994-B0JVB722KXLW8NAP4KYZ/the-fifth-commandment.jpg?format=300w"
            image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926972584-22EV8SKQ8WA9MNBCABJI/spare-not-the-rod.jpg?format=300w"
            image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926972584-22EV8SKQ8WA9MNBCABJI/spare-not-the-rod.jpg?format=300w"
            image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926733062-A86S6ULSIUFUDF5NP7CV/should-we-observe-man-made-feasts.jpg?format=300w"
            image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926489327-PSHP4OIO7X0CR69A252Q/yah-the-father-and-yah-the-son.jpg?format=300w"
            />
            <RowOfRectImages 
            title="Featured"
            subtitle="In-depth writings from KingdomPreppers.org"
            image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600292610410-V95YCP5UAZR2F9XFJ25C/day-of-atonement.jpg?format=300w"
            image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600200651812-E7USP9MBDZNOQL9HVOVA/feast-of-trumpets.jpg?format=300w"
            image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600200618679-BCSL2FSRB4HKU8SJ39SY/death-burial-and-cremation.jpg?format=300w"
            image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597927107540-3QAT6XJZ1QH0KFIB0YA6/enemies-among-us.jpg?format=300w"
            image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597927034994-B0JVB722KXLW8NAP4KYZ/the-fifth-commandment.jpg?format=300w"
            image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926972584-22EV8SKQ8WA9MNBCABJI/spare-not-the-rod.jpg?format=300w"
            image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926972584-22EV8SKQ8WA9MNBCABJI/spare-not-the-rod.jpg?format=300w"
            image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926733062-A86S6ULSIUFUDF5NP7CV/should-we-observe-man-made-feasts.jpg?format=300w"
            image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926489327-PSHP4OIO7X0CR69A252Q/yah-the-father-and-yah-the-son.jpg?format=300w"
            />
            <RowOfRectImages 
            title="Featured"
            subtitle="In-depth writings from KingdomPreppers.org"
            image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600292610410-V95YCP5UAZR2F9XFJ25C/day-of-atonement.jpg?format=300w"
            image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600200651812-E7USP9MBDZNOQL9HVOVA/feast-of-trumpets.jpg?format=300w"
            image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600200618679-BCSL2FSRB4HKU8SJ39SY/death-burial-and-cremation.jpg?format=300w"
            image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597927107540-3QAT6XJZ1QH0KFIB0YA6/enemies-among-us.jpg?format=300w"
            image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597927034994-B0JVB722KXLW8NAP4KYZ/the-fifth-commandment.jpg?format=300w"
            image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926972584-22EV8SKQ8WA9MNBCABJI/spare-not-the-rod.jpg?format=300w"
            image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926972584-22EV8SKQ8WA9MNBCABJI/spare-not-the-rod.jpg?format=300w"
            image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926733062-A86S6ULSIUFUDF5NP7CV/should-we-observe-man-made-feasts.jpg?format=300w"
            image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1597926489327-PSHP4OIO7X0CR69A252Q/yah-the-father-and-yah-the-son.jpg?format=300w"
            />
</ScrollView>  
    </View>)
}

export default Reader