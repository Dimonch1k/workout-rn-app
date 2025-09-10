import BrandTitle from '@/components/shared/BrandTitle'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import {
	Dimensions,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export default function SignInScreen() {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSignIn = () => {
		router.replace('/(tabs)')
	}

	const handleSignUp = () => {
		router.push('/sign-up')
	}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<StatusBar barStyle='light-content' />

			{/* Background Image */}
			<ImageBackground
				source={require('../assets/images/sign-in.png')}
				style={styles.backgroundImage}
				resizeMode='cover'
			>
				{/* Gradient Overlay */}
				<LinearGradient
					colors={['transparent', '#062029', '#062029']}
					locations={[0, 0.5, 1]}
					style={styles.gradientOverlay}
				/>

				{/* Main Content */}
				<View style={styles.contentContainer}>
					<BrandTitle style={{ marginBottom: 20 }} />

					{/* Form Container */}
					<View style={styles.formContainer}>
						{/* Email Input */}
						<View style={styles.inputContainer}>
							<Ionicons
								name='mail-outline'
								size={20}
								color='#9ca3af'
								style={styles.inputIcon}
							/>
							<TextInput
								style={styles.textInput}
								placeholder='Email'
								placeholderTextColor='#9ca3af'
								value={email}
								onChangeText={setEmail}
								keyboardType='email-address'
								autoCapitalize='none'
							/>
						</View>

						{/* Password Input */}
						<View style={styles.inputContainer}>
							<Ionicons
								name='lock-closed-outline'
								size={20}
								color='#9ca3af'
								style={styles.inputIcon}
							/>
							<TextInput
								style={styles.textInput}
								placeholder='Password'
								placeholderTextColor='#9ca3af'
								value={password}
								onChangeText={setPassword}
								secureTextEntry
							/>
						</View>

						{/* Forgot Password */}
						<TouchableOpacity style={styles.forgotPasswordContainer}>
							<Text style={styles.forgotPasswordText}>Forgot Password</Text>
						</TouchableOpacity>

						{/* Sign In Button */}
						<TouchableOpacity
							style={styles.signInButton}
							onPress={handleSignIn}
							activeOpacity={0.8}
						>
							<Text style={styles.signInButtonText}>Sign In</Text>
						</TouchableOpacity>

						{/* Sign Up Link */}
						<View style={styles.signUpContainer}>
							<Text style={styles.signUpText}>Didn't have any account? </Text>
							<TouchableOpacity onPress={handleSignUp}>
								<Text style={styles.signUpLink}>Sign Up here</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ImageBackground>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#062029',
	},
	backgroundImage: {
		width: screenWidth,
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
		paddingHorizontal: 40,
		paddingBottom: 40,
	},
	formContainer: {
		width: '100%',
		flexDirection: 'column',
		gap: 20,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 15,
	},
	inputIcon: {
		marginRight: 12,
	},
	textInput: {
		width: '100%',
		fontSize: 16,
		fontFamily: 'Poppins-Regular',
		color: '#bababa',
		outlineWidth: 0,
	},
	forgotPasswordContainer: {
		alignItems: 'center',
		marginBottom: 12,
	},
	forgotPasswordText: {
		color: 'white',
		fontSize: 14,
		fontFamily: 'Poppins-Bold',
		fontWeight: '700',
	},
	signInButton: {
		backgroundColor: '#FFF50A',
		borderRadius: 10,
		height: 56,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	signInButtonText: {
		color: '#000',
		fontSize: 18,
		fontFamily: 'Poppins-Bold',
	},
	signUpContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	signUpText: {
		color: 'white',
		fontSize: 14,
		fontFamily: 'Poppins-Regular',
	},
	signUpLink: {
		color: '#FFF50A',
		fontSize: 14,
		fontFamily: 'Poppins-Bold',
	},
})
