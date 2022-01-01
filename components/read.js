import React, {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ReactPlayer from 'react-player';
import { Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import Header from './Header';

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
               <RowOfRectImages 
            title="Featured"
            subtitle="In-depth writings from KingdomPreppers.org"
            display="none"
            image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600292610410-V95YCP5UAZR2F9XFJ25C/day-of-atonement.jpg?format=300w"
            text1="I awoke from a dream in the morning and was struck by what I had dreamt. It was about the power of prayer. In the dream, I had been speaking to a group of people, but some of them did not believe in prayer and ridiculed the very act. I did my best to make my case but saw that my actions were futile, and so I walked away in silence. Someone else was waiting in the wings and they approached me with words of encouragement.

            I turned to this person and told them about a situation my wife was experiencing at work, involving a troublesome coworker who could not be easily fired. While the situation concerning my wife’s work environment was real, it had seeped into the dream, and I explained to the person how important and effective prayer is by revealing to them that I had prayed over my wife’s situation (as did her and her boss), and the very next day, the coworker decided to quit abruptly, leaving the company of her own volition, and thereby solving the problem of building a case for direct firing. The reality of the work situation, particularly its resolution, happened the day before I dreamt about it. I awoke from the dream with this article in my heart.
            
            I have written about prayer in other materials available on this site, most notably the fifth part in the five-part series, The List of Kingdom Preparedness. Prayer is a powerful component of our spiritual walk. It can be seen as an important financial institution (in the preparedness list video, I make the case that it is Yah’s spiritual banking system for instance) or it can be seen as a weapon for good, the business end of which can be wielded against our spiritual enemies. But in either analogy, our store of wealth, or accumulation of weaponry (depending on the scenario) will derive from the work we have put in during our walk along this narrow path."

            title2="Featured222"
            subtitle="In-depth writings from KingdomPreppers.org"
            image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600292610410-V95YCP5UAZR2F9XFJ25C/day-of-atonement.jpg?format=300w"
            text2="2I awoke from a dream in the morning and was struck by what I had dreamt. It was about the power of prayer. In the dream, I had been speaking to a group of people, but some of them did not believe in prayer and ridiculed the very act. I did my best to make my case but saw that my actions were futile, and so I walked away in silence. Someone else was waiting in the wings and they approached me with words of encouragement.

            I turned to this person and told them about a situation my wife was experiencing at work, involving a troublesome coworker who could not be easily fired. While the situation concerning my wife’s work environment was real, it had seeped into the dream, and I explained to the person how important and effective prayer is by revealing to them that I had prayed over my wife’s situation (as did her and her boss), and the very next day, the coworker decided to quit abruptly, leaving the company of her own volition, and thereby solving the problem of building a case for direct firing. The reality of the work situation, particularly its resolution, happened the day before I dreamt about it. I awoke from the dream with this article in my heart.
            
            I have written about prayer in other materials available on this site, most notably the fifth part in the five-part series, The List of Kingdom Preparedness. Prayer is a powerful component of our spiritual walk. It can be seen as an important financial institution (in the preparedness list video, I make the case that it is Yah’s spiritual banking system for instance) or it can be seen as a weapon for good, the business end of which can be wielded against our spiritual enemies. But in either analogy, our store of wealth, or accumulation of weaponry (depending on the scenario) will derive from the work we have put in during our walk along this narrow path."
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

    </View>
    
    )

    function RowOfRectImages (props)  

    {
        return (
        
                        <View style={{paddingLeft: 20, paddingTop: 10}}>
                            <Section title={props.title}subtitle={props.subtitle}/>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <TouchableOpacity onPress={() => setmyTitle(props.title), setmyImg(props.image1), setmyDisplay(props.display)} ><Img  image={props.image1} id={props.vid1} /></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setmyTitle(props.title2), setmyImg(props.image2), setmyText(props.text2)}><Img  image={props.image2} id={props.vid2}/></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setmyVid(props.vid3)}><Img  image={props.image3} id={props.vid3}/></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setmyVid(props.vid4)}><Img  image={props.image4} id={props.vid4}/></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setmyVid(props.vid5)}><Img  image={props.image5} id={props.vid5}/></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setmyVid(props.vid6)}><Img  image={props.image6} id={props.vid6}/></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setmyVid(props.vid7)}><Img  image={props.image7} id={props.vid7}/></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setmyVid(props.vid8)}><Img  image={props.image8} id={props.vid8}/></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setmyVid(props.vid9)}><Img  image={props.image9} id={props.vid9}/></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setmyVid(props.vid10)}><Img  image={props.image10} id={props.vid10}/></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setmyVid(props.vid11)}><Img  image={props.image11} id={props.vid11}/></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setmyVid(props.vid12)}><Img  image={props.image12} id={props.vid12}/></TouchableOpacity>
                            </ScrollView> 
                        </View >
                        )
                        
                    }
    
    
};



export default Video

