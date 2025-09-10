import BrandTitle from '@/components/shared/BrandTitle'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import {
	Dimensions,
	ImageBackground,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export default function OnboardingScreen() {
	const router = useRouter()

	const handleGetStarted = () => {
		router.push('/sign-in')
	}

	return (
		<View style={styles.container}>
			<StatusBar barStyle='light-content' />

			{/* Background Image */}
			<ImageBackground
				source={require('../assets/images/onboarding.png')}
				style={styles.backgroundImage}
				resizeMode='cover'
			>
				{/* Gradient Overlay */}
				<LinearGradient
					colors={['transparent', '#062029', '#062029']}
					locations={[0, 0.8, 1]}
					style={styles.gradientOverlay}
				/>

				{/* Main Content */}
				<View style={styles.contentContainer}>
					<Text style={styles.welcomeText}>Welcome to</Text>

					<BrandTitle />

					<Text style={styles.subtitleText}>
						Achieve your body goals with us
					</Text>

					{/* Get Started Button */}
					<TouchableOpacity
						style={styles.getStartedButton}
						onPress={handleGetStarted}
						activeOpacity={0.8}
					>
						<Text style={styles.buttonText}>Get Started</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
	backgroundImage: {
		width: screenWidth,
		height: screenHeight,
		flex: 1,
	},
	gradientOverlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 40,
	},
	welcomeText: {
		color: 'white',
		fontSize: 24,
		fontFamily: 'Poppins-Regular',
		textAlign: 'center',
	},
	subtitleText: {
		color: '#d1d5db',
		fontSize: 16,
		fontFamily: 'Poppins-Regular',
		textAlign: 'center',
		marginBottom: 40,
	},
	getStartedButton: {
		width: 244,
		backgroundColor: '#FFF50A',
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		padding: 15,
	},
	buttonText: {
		color: '#000',
		fontSize: 22,
		fontFamily: 'Poppins-Bold',
		fontWeight: '700',
	},
})
