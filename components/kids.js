import React, {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ReactPlayer from 'react-player';
import { Text, View, Image, Button, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from './Header';

function Img (props) {return(
    <Image
    style={{width: 192, height:108, borderRadius: 10, marginHorizontal: 10, marginLeft: 0, marginVertical: 5}}
    source={props.image}
        />)}

function Section (props) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>{props.title}</Text>
            <MaterialCommunityIcons name={props.icon} color="black" size={24}/>
        </View>
    )
}

    

function Kid () {

    const [myVid, setmyVid] = useState('https://vimeo.com/556753538')
    
    function RowOfRectImages (props)  

{ 
    return (
    
                    <View style={{paddingLeft: 20, marginTop: 5, padding: 20, backgroundColor: `${props.color}`}}>
                        <Section title={props.title} icon={props.icon}/>
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

        

    <View style={{flex: 1, width: '100%', backgroundColor: 'black'}}>
            <View style={{ position: 'relative', paddingBottom: '56.25%', backgroundColor: '#7cfc00'}}>
            <ReactPlayer style={{position:'absolute', minWidth: '100%', marginTop: '30px', borderRadius: 20}} playing={true} width="80%" height="80%" controls='1' url={myVid} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
        <RowOfRectImages 
        title="Songs"
        subtitle="Learn all about the history of the Israelites"
        icon="music"
        color="#FF49B6"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482027043059-68AYKJXOWMG3M3FD3MUY/youtube-thumbnail-scattered1.jpg?format=300w"
        vid1="https://vimeo.com/556753538"

        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482027010834-SI0HEIHYM1V1A34F8SFD/youtube-thumbnail-scattered2.jpg?format=300w"
        vid2="https://vimeo.com/298796957"


        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482026927375-8BPA03D2RPGU0FMBNQQS/youtube-thumbnail-scattered3.jpg?format=300w"
        vid3="https://vimeo.com/298798501"

        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482025574027-OQ8UHXE4UE2THE6KF45A/youtube-thumbnail-a-history-of-the-true-hebrews.jpg?format=300w"
        vid4="https://vimeo.com/298865698"
        

        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1487189411811-NSNGLFQUNNOOS7D9AZX3/youtube-thumbnail-the-hebrew-calendar.jpg?format=300w"
        vid5="https://vimeo.com/299072410"

        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482025397202-VBC2ZEMNMYWNXHIWVEHR/youtube-thumbnail-israels-spiritual-blindness.jpg?format=300w"
        vid6="https://vimeo.com/462243397"

        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1482026456299-FOR1G6HDDGZYGFI7Y2NO/youtube-thumbnail-understanding-sabbath.jpg?format=300w"
        vid7="https://vimeo.com/462243397"

        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1483726337467-BES6SQLU5C5HMP5HLJI3/youtube-thumbnail-video-the-pure-convocations.jpg?format=500w"
        vid8="https://vimeo.com/298896085"

        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1547141076062-PSFG3SGNEU1ADNOTVTA7/youtube-thumbnail-400-years-sentence-served.jpg?format=500w"
        vid9="https://vimeo.com/462243397"

        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1558454887484-PBB1A029JRMLNZBDKSGP/churchianity_PLAYLIST.jpg?format=1500w"
        vid10="https://vimeo.com/462243397"

            />
            <RowOfRectImages 
        title="Books"
        subtitle="A loose, non-chronological series touching on the spiritual application of the Torah"
        icon="book"
        color="gold"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1496348754122-EY3P15IGVXTSTLLQDD47/youtube-thumbnail-spirit-of-the-law-01-tithing.jpg?format=750w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1501974591435-8ISP946RSRFNGHUPJFOR/youtube-thumbnail-spirit-of-the-law-02-sacrifices.jpg?format=750w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1530709414267-MITKGJ6DA5OF3FGIH04X/youtube-thumbnail-spirit-of-the-law-03-the-laver.jpg?format=750w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1601993790926-RPXL5DZ87H3KKAHGXW5F/youtube-thumbnail-spirit-of-the-law-04-kinsman-redeemer.jpg?format=750w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1605386300465-K6MFIK35HC42RYSU1EBV/youtube-thumbnail-spirit-of-the-law-05-the-tabernacle.jpg?format=750w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
            />
            <RowOfRectImages 
        title="12 Week Journey"
        subtitle="A 12-step series to help you build a closer connection with Yah"
        color="yellow"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587252798799-QCFQRM5V87MWPTZ97S72/youtube-thumbnail-12-week-journey-01.jpg?format=500w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587255009780-OEFLKA5Q9RNGSU1WFVQX/youtube-thumbnail-12-week-journey-02.jpg?format=500w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587255717375-IO4K50BXVWFY3DVJ4VTM/youtube-thumbnail-12-week-journey-03.jpg?format=500w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587257593491-CV4BVI1JJ36RV77VC3GM/youtube-thumbnail-12-week-journey-04.jpg?format=500w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587303410344-FQ9EA3SCTIZZGDTM2IAP/youtube-thumbnail-12-week-journey-05.jpg?format=500w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587304220422-3M85QW4MFPGD6BKX0RU0/youtube-thumbnail-12-week-journey-06.jpg?format=500w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587304627016-BVOUYGCAJV5G9WC47792/youtube-thumbnail-12-week-journey-07.jpg?format=500w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587305727985-CJAWH70EL9REM94PR2G3/youtube-thumbnail-12-week-journey-08.jpg?format=500w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587307805708-M7MBRSJZSN7MOU2DYVR2/youtube-thumbnail-12-week-journey-09.jpg?format=500w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587309700505-33BXT3TROEI86L8MBNMZ/youtube-thumbnail-12-week-journey-10.jpg?format=500w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587310751278-NODLYDXQHLOJNI6VCSWL/youtube-thumbnail-12-week-journey-11.jpg?format=500w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587311549886-5XGBF29AEDE1QDXAC0RD/youtube-thumbnail-12-week-journey-12.jpg?format=500w"
            />
            <RowOfRectImages 
        title="Yah's Kids Academy"
        subtitle="Fun videos that the whole family will love"
        color="#7fff00"
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
        color="#00ffff"
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
        title="Sprouts (Ages 3-6)"
        subtitle="Fun videos geared toward Yah's little servants"
        color="gold"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600339740831-I9CZKH95DIP0A58534Q5/There-is-Always+Time-to-Do-Good_Sprouts-Video-Cover.jpg?format=300w"
        vid1="https://vimeo.com/video/462243397"

        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1595414631321-4SLEGU22JXNO0DPWTLDF/Autumn-Rhythm_Sprouts-Video-Cover.jpg?format=300w"
        vid2="https://vimeo.com/video/440311324"

        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1572976414264-Y8M3G45JPM45O5TAJYQM/Sprouts-Media-Corner-02_Video+Cover.jpg?format=300w"
        vid3="https://vimeo.com/video/371195871"

        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1553006481793-S7L6B3MLF1B8U9N42A94/Spring-Time-Rhyme_Sprouts-Video-Cover.jpg?format=300w"
        vid4="https://vimeo.com/video/325215540"

        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1547000082927-R8N5U71AK1K3TGB6FQNP/The-Satisfied-Worm_Sprouts-Video-Cover.jpg?format=300w"
        vid5="https://vimeo.com/video/310245644"

        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1541081104388-07I6VN4P9AAR1HK4EGX3/Sprouts-Media-Corner-01_Video+Cover.jpg?format=300w"
        vid6="https://vimeo.com/video/299268212"

        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1535249054883-8YRBW3XKCN56Q6L0SF7N/123_Sprouts-Video-Cover.jpg?format=300w"
        vid7="https://vimeo.com/video/299266804"

        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1535248346158-3ZFB8AHZ400N62RF3LSU/ABC_Sprouts-Video-Cover.jpg?format=300w"
        vid8="https://vimeo.com/video/299266699"
            />
            <RowOfRectImages 
        title="Beets (Ages 7-10)"
        subtitle="A variety of videos for kids of different age groups"
        color="#ff00ff"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1608419958360-WN9QB3AAKP2HEFMYGDS5/Kindness-is-Contagious-Video-Cover.jpg?format=300w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1555525838566-9BKRDXLQLZ180A975G0M/Beets-Media-Corner-02_Video+Cover.jpg?format=300w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1538777975146-DDUR9G515RZ7865EAGH8/Cameron%27s+Choices.jpg?format=300w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1536369797584-S298CA1REFNK63T8OWJW/Beets-Media-Corner-01_Video+Cover.jpg?format=300w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1535249575768-IWRPPFDAUT8YNIVLKK32/The-Big-Storm.jpg?format=300w"
            />
            <RowOfRectImages 
        title="Carrots (Ages 11-14)"
        subtitle="Learn all about the history of the Israelites"
        icon="carrot"
        color="#FF49B6"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1601384180193-Y8IL3CK8KO62E4SI3LVV/Carrots-Nature-Walk01.jpg?format=300w"
        vid1="https://vimeo.com/556753538"

        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1601384110729-N7RSVNDG9DTPBBCSPFD4/Carrots-Nature-Walk02.jpg?format=300w"
        vid2="https://vimeo.com/298796957"


        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1601383971700-W905GGVIL2MPLA5X030R/Carrots-Nature-Walk03.jpg?format=300w"
        vid3="https://vimeo.com/298798501"

        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1538672611516-NN9PQ6MTQE6MIKEF2WCI/Carrots-Media-Corner-01_Video+Cover.jpg?format=300w"
        vid4="https://vimeo.com/298865698"
        

        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1600339287558-H1ZPZASJT1EC514N8K0A/Carrots-Media-Corner-02_Video+Cover.jpg?format=300w"
        vid5="https://vimeo.com/299072410"

            />
            <RowOfRectImages 
        title="Books"
        subtitle="A loose, non-chronological series touching on the spiritual application of the Torah"
        icon="book"
        color="orange"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1496348754122-EY3P15IGVXTSTLLQDD47/youtube-thumbnail-spirit-of-the-law-01-tithing.jpg?format=750w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1501974591435-8ISP946RSRFNGHUPJFOR/youtube-thumbnail-spirit-of-the-law-02-sacrifices.jpg?format=750w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1530709414267-MITKGJ6DA5OF3FGIH04X/youtube-thumbnail-spirit-of-the-law-03-the-laver.jpg?format=750w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1601993790926-RPXL5DZ87H3KKAHGXW5F/youtube-thumbnail-spirit-of-the-law-04-kinsman-redeemer.jpg?format=750w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1605386300465-K6MFIK35HC42RYSU1EBV/youtube-thumbnail-spirit-of-the-law-05-the-tabernacle.jpg?format=750w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1495204268042-BFFV0TO6QUHFEW409EP8/youtube-thumbnail-lifes-algorithm.jpg?format=750w"
            />
            <RowOfRectImages 
        title="12 Week Journey"
        subtitle="A 12-step series to help you build a closer connection with Yah"
        color="yellow"
        image1="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587252798799-QCFQRM5V87MWPTZ97S72/youtube-thumbnail-12-week-journey-01.jpg?format=500w"
        image2="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587255009780-OEFLKA5Q9RNGSU1WFVQX/youtube-thumbnail-12-week-journey-02.jpg?format=500w"
        image3="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587255717375-IO4K50BXVWFY3DVJ4VTM/youtube-thumbnail-12-week-journey-03.jpg?format=500w"
        image4="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587257593491-CV4BVI1JJ36RV77VC3GM/youtube-thumbnail-12-week-journey-04.jpg?format=500w"
        image5="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587303410344-FQ9EA3SCTIZZGDTM2IAP/youtube-thumbnail-12-week-journey-05.jpg?format=500w"
        image6="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587304220422-3M85QW4MFPGD6BKX0RU0/youtube-thumbnail-12-week-journey-06.jpg?format=500w"
        image7="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587304627016-BVOUYGCAJV5G9WC47792/youtube-thumbnail-12-week-journey-07.jpg?format=500w"
        image8="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587305727985-CJAWH70EL9REM94PR2G3/youtube-thumbnail-12-week-journey-08.jpg?format=500w"
        image9="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587307805708-M7MBRSJZSN7MOU2DYVR2/youtube-thumbnail-12-week-journey-09.jpg?format=500w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587309700505-33BXT3TROEI86L8MBNMZ/youtube-thumbnail-12-week-journey-10.jpg?format=500w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587310751278-NODLYDXQHLOJNI6VCSWL/youtube-thumbnail-12-week-journey-11.jpg?format=500w"
        image10="https://images.squarespace-cdn.com/content/v1/58535279e3df28f58aa0db40/1587311549886-5XGBF29AEDE1QDXAC0RD/youtube-thumbnail-12-week-journey-12.jpg?format=500w"
            />
            <RowOfRectImages 
        title="Yah's Kids Academy"
        subtitle="Fun videos that the whole family will love"
        color="#7fff00"
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
        color="#00ffff"
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



export default Kid