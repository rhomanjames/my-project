import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const audioBookPlaylist = [
	{
		title: 'Wade in the Water',
		author: 'Sounds of Sinai',
		source: 'Monotheism',
		uri:
			'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
		imageSource: 'https://m.media-amazon.com/images/I/51GZ+-0zGhL.jpg'
	},
	{
		title: 'Hamlet - Act II',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:
			'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act III',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri: 'http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act IV',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:
			'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act4_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	},
	{
		title: 'Hamlet - Act V',
		author: 'William Shakespeare',
		source: 'Librivox',
		uri:
			'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3',
		imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
	}
]

export default class App extends React.Component {
	state = {
		isPlaying: false,
		playbackInstance: null,
		currentIndex: Math.floor(Math.random() * (audioBookPlaylist.length - 1)),
		volume: 1.0,
		isBuffering: true,
		isLooping: true
	}

	async componentDidMount() {
		try {
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: false,
				interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
				playsInSilentModeIOS: true,
				interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
				shouldDuckAndroid: true,
				staysActiveInBackground: true,
				playThroughEarpieceAndroid: true
			})

			this.loadAudio()
		} catch (e) {
			console.log(e)
		}
	}



	async loadAudio() {
		const { currentIndex, isPlaying, volume } = this.state

		try {
			const playbackInstance = new Audio.Sound()
			const source = {
				uri: audioBookPlaylist[currentIndex].uri,
				imageSource: audioBookPlaylist[currentIndex].imageSource
			}

			const status = {
				shouldPlay: isPlaying,
				volume: volume
			}
			
			

			playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
			await playbackInstance.loadAsync(source, status, false)
			this.setState({
				playbackInstance
			})

			
			playbackInstance.setOnPlaybackStatusUpdate((playbackStatus) => {
				playbackStatus.didJustFinish ? console.log('done') : console.log('playing')
			})
			
			playbackInstance.setOnPlaybackStatusUpdate((playbackStatus) => {
				playbackStatus.didJustFinish ? this.loadAudio () : console.log('playing')
			})


			
		} catch (e) {
			console.log(e)
		}
	}




	onPlaybackStatusUpdate = status => {
		this.setState({
			isBuffering: status.isBuffering
		})
	}


	handlePlayPause = async () => {
		const { isPlaying, playbackInstance, currentIndex } = this.state
		isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()
		console.log(currentIndex)
		this.setState({
			isPlaying: !isPlaying
		})
	}
	

	handlePreviousTrack = async () => {
		let { playbackInstance, currentIndex } = this.state
		if (playbackInstance) {
			await playbackInstance.unloadAsync()
			currentIndex < audioBookPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 1)
			this.setState({
				currentIndex
			})
			this.loadAudio()
		}
	}
 
	handleNextTrack = async () => {
		let { playbackInstance, currentIndex } = this.state
		 
		if (playbackInstance) {
			await playbackInstance.unloadAsync()
			currentIndex = Math.floor(Math.random() * (audioBookPlaylist.length - 1))
			this.setState({
				currentIndex
			})
			this.loadAudio()
		}
	}

	renderFileInfo() {
		const { playbackInstance, currentIndex } = this.state
		return playbackInstance ? (
			<View style={styles.trackInfo}>
				<View style={{ alignItems: 'center'}}>
				<Image
					style={styles.albumCover}
					source={audioBookPlaylist[currentIndex].imageSource}
				/>
				</View>
				<Text style={[styles.trackInfoText, styles.largeText]}>
					{audioBookPlaylist[currentIndex].title}
				</Text>
				<Text style={[styles.trackInfoText, styles.smallText]}>
					{audioBookPlaylist[currentIndex].author}
				</Text>
				<Text style={[styles.trackInfoText, styles.smallText]}>
					{audioBookPlaylist[currentIndex].source}
				</Text>
			</View>
		) : null
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.largeText}>Serving Yah Radio 24/7</Text>
				{this.renderFileInfo()}
				<View style={styles.controls}>
					{/*<TouchableOpacity style={styles.control} onPress={this.handlePreviousTrack}>
					<MaterialCommunityIcons name="skip-backward" color="gold" size={48} />
		</TouchableOpacity>*/}
					<TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
						{this.state.isPlaying ? (
							<MaterialCommunityIcons name="pause" color="gold" size={48} />
						) : (
							<MaterialCommunityIcons name="play" color="gold" size={48} />
						)}
					</TouchableOpacity>
					<TouchableOpacity style={styles.control} onPress={this.handleNextTrack}>
					<MaterialCommunityIcons name="skip-forward" color="gold" size={48} />
						</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center'
	},
	albumCover: {
		width: 300,
		height: 300, 
		borderRadius: 20
	},
	trackInfo: {
		paddingBottom: 40,
		backgroundColor: 'transparent', 
		justifyContent: 'center',
		paddingHorizontal: 20,
	},

	trackInfoText: {
		textAlign: 'center',
		flexWrap: 'wrap',
		color: '#550088'
	},
	largeText: {
		fontSize: 22, 
		fontWeight: 'bold',
		color: 'white',
		marginBottom:10,
	},
	smallText: {
		fontSize: 16, 
		color: 'white'
	},
	control: {
		padding: 10
	},
	controls: {
		flexDirection: 'row'
	}
})
