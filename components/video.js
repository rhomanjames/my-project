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

    const [myVid, setmyVid] = useState('https://vimeo.com/298865698')
    
    function RowOfRectImages (props)  

{ 
    return (
    
                    <View style={{paddingLeft: 20, paddingTop: 10}}>
                        <Section title={props.title}subtitle={props.subtitle}/>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity onPress={() => setmyVid(props.vid1)}><Img  image={props.image1} id={props.vid1} /></TouchableOpacity>
                                <TouchableOpacity onPress={() => setmyVid(props.vid2)}><Img  image={props.image2} id={props.vid2}/></TouchableOpacity>
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

    return(

        

    <View style={{flex: 1}}>
        <View style={{ position: 'relative', paddingBottom: '56.25%' }}>
          <ReactPlayer style={{top: 0, left:0, position:'absolute', minWidth: '100%', marginBottom: 10}} width="100%" height="100%" controls='1' url={myVid} />
        </View>
               <ScrollView showsVerticalScrollIndicator={false}>
        <RowOfRectImages 
        title="History"
        subtitle="Learn all about the history of the Israelites"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482027043059-68AYKJXOWMG3M3FD3MUY/youtube-thumbnail-scattered1.jpg?format=300w"
        vid1="https://vimeo.com/298793818"

        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482027010834-SI0HEIHYM1V1A34F8SFD/youtube-thumbnail-scattered2.jpg?format=300w"
        vid2="https://vimeo.com/298796957"


        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482026927375-8BPA03D2RPGU0FMBNQQS/youtube-thumbnail-scattered3.jpg?format=300w"
        vid3="https://vimeo.com/298798501"

        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482025574027-OQ8UHXE4UE2THE6KF45A/youtube-thumbnail-a-history-of-the-true-hebrews.jpg?format=300w"
        vid4="https://vimeo.com/298865698"
        

        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1487189411811-NSNGLFQUNNOOS7D9AZX3/youtube-thumbnail-the-hebrew-calendar.jpg?format=300w"
        vid5="https://vimeo.com/299072410"

        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482025397202-VBC2ZEMNMYWNXHIWVEHR/youtube-thumbnail-israels-spiritual-blindness.jpg?format=300w"
        vid3="https://vimeo.com/462243397"

        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482026456299-FOR1G6HDDGZYGFI7Y2NO/youtube-thumbnail-understanding-sabbath.jpg?format=300w"
        vid3="https://vimeo.com/462243397"

        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1483726337467-BES6SQLU5C5HMP5HLJI3/youtube-thumbnail-video-the-pure-convocations.jpg?format=500w"
        vid3="https://vimeo.com/462243397"

        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1547141076062-PSFG3SGNEU1ADNOTVTA7/youtube-thumbnail-400-years-sentence-served.jpg?format=500w"
        vid3="https://vimeo.com/462243397"

        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1558454887484-PBB1A029JRMLNZBDKSGP/churchianity_PLAYLIST.jpg?format=1500w"
        vid3="https://vimeo.com/462243397"

            />
            <RowOfRectImages 
        title="Scripture Studies"
        subtitle="Dive into the scriptures"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1623455291405-W0VH0EK0JZUZ6Z9HZ06H/youtube-thumbnail-a-people-scattered.jpg?format=750w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1602521393221-9WXBWHXOMB2BKA9DIWJD/youtube-thumbnail-yahs-handiwork.jpg?format=750w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587252798799-QCFQRM5V87MWPTZ97S72/youtube-thumbnail-12-week-journey-01.jpg?format=750w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
            />
            <RowOfRectImages 
        title="12 Week Journey"
        subtitle="A 12-step series to help you build a closer connection with Yah"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1623455291405-W0VH0EK0JZUZ6Z9HZ06H/youtube-thumbnail-a-people-scattered.jpg?format=750w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1602521393221-9WXBWHXOMB2BKA9DIWJD/youtube-thumbnail-yahs-handiwork.jpg?format=750w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587252798799-QCFQRM5V87MWPTZ97S72/youtube-thumbnail-12-week-journey-01.jpg?format=750w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
            />
            <RowOfRectImages 
        title="Yah's Kids Academy"
        subtitle="Fun videos that the whole family will love"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1623455291405-W0VH0EK0JZUZ6Z9HZ06H/youtube-thumbnail-a-people-scattered.jpg?format=750w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1602521393221-9WXBWHXOMB2BKA9DIWJD/youtube-thumbnail-yahs-handiwork.jpg?format=750w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587252798799-QCFQRM5V87MWPTZ97S72/youtube-thumbnail-12-week-journey-01.jpg?format=750w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
            />
            <RowOfRectImages 
        title="Yah's Little Lambs"
        subtitle="Content specifically for kids under 6 "
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1623455291405-W0VH0EK0JZUZ6Z9HZ06H/youtube-thumbnail-a-people-scattered.jpg?format=750w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1602521393221-9WXBWHXOMB2BKA9DIWJD/youtube-thumbnail-yahs-handiwork.jpg?format=750w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587252798799-QCFQRM5V87MWPTZ97S72/youtube-thumbnail-12-week-journey-01.jpg?format=750w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
            />
            <RowOfRectImages 
        title="Little Kingdom Preppers"
        subtitle="Fun videos geared toward Yah's little servants"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1623455291405-W0VH0EK0JZUZ6Z9HZ06H/youtube-thumbnail-a-people-scattered.jpg?format=750w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1602521393221-9WXBWHXOMB2BKA9DIWJD/youtube-thumbnail-yahs-handiwork.jpg?format=750w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587252798799-QCFQRM5V87MWPTZ97S72/youtube-thumbnail-12-week-journey-01.jpg?format=750w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
            />
            <RowOfRectImages 
        title="Growing Up Hebrew"
        subtitle="A variety of videos for kids of different age groups"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1623455291405-W0VH0EK0JZUZ6Z9HZ06H/youtube-thumbnail-a-people-scattered.jpg?format=750w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1602521393221-9WXBWHXOMB2BKA9DIWJD/youtube-thumbnail-yahs-handiwork.jpg?format=750w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587252798799-QCFQRM5V87MWPTZ97S72/youtube-thumbnail-12-week-journey-01.jpg?format=750w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
            />
    </ScrollView>    

    </View>
    
    )
    
};



export default Video