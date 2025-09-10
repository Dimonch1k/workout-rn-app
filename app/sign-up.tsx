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
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export default function SignUpScreen() {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const handleSignUp = () => {
		router.replace('/(tabs)')
	}

	const handleSignIn = () => {
		router.push('/sign-in')
	}

	const handleSocialSignUp = (provider: 'apple' | 'facebook' | 'google') => {
		console.log(`Sign up with ${provider}`)
	}

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
			>
				<ImageBackground
					source={require('../assets/images/sign-up.png')}
					style={styles.backgroundImage}
					resizeMode='cover'
				>
					<LinearGradient
						colors={['transparent', '#062029', '#062029']}
						locations={[0, 0.4, 1]}
						style={styles.gradientOverlay}
					/>

					{/* Main Content */}
					<View style={styles.contentContainer}>
						<BrandTitle style={{ marginBottom: 20 }} />

						{/* Form Container */}
						<View style={styles.formContainer}>
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

							<View style={styles.inputContainer}>
								<Ionicons
									name='lock-closed-outline'
									size={20}
									color='#9ca3af'
									style={styles.inputIcon}
								/>
								<TextInput
									style={styles.textInput}
									placeholder='Confirmation password'
									placeholderTextColor='#9ca3af'
									value={confirmPassword}
									onChangeText={setConfirmPassword}
									secureTextEntry
								/>
							</View>

							<TouchableOpacity
								style={styles.signUpButton}
								onPress={handleSignUp}
								activeOpacity={0.8}
							>
								<Text style={styles.signUpButtonText}>Sign Up</Text>
							</TouchableOpacity>

							<View style={styles.dividerContainer}>
								<View style={styles.dividerLine} />
								<Text style={styles.dividerText}>Or</Text>
								<View style={styles.dividerLine} />
							</View>

							<View style={styles.socialButtonsContainer}>
								<TouchableOpacity
									style={styles.socialButton}
									onPress={() => handleSocialSignUp('apple')}
								>
									<Ionicons name='logo-apple' size={24} color='#000' />
								</TouchableOpacity>

								<TouchableOpacity
									style={styles.socialButton}
									onPress={() => handleSocialSignUp('facebook')}
								>
									<Ionicons name='logo-facebook' size={24} color='#1877f2' />
								</TouchableOpacity>

								<TouchableOpacity
									style={styles.socialButton}
									onPress={() => handleSocialSignUp('google')}
								>
									<Ionicons name='logo-google' size={24} color='#ea4335' />
								</TouchableOpacity>
							</View>

							<View style={styles.signInContainer}>
								<Text style={styles.signInText}>If you have an account? </Text>
								<TouchableOpacity onPress={handleSignIn}>
									<Text style={styles.signInLink}>Sign In here</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ImageBackground>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
	scrollView: {
		flex: 1,
	},
	scrollContent: {
		minHeight: screenHeight,
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
	signUpButton: {
		backgroundColor: '#FFF50A',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
	},
	signUpButtonText: {
		color: '#000',
		fontSize: 18,
		fontFamily: 'Poppins-Bold',
	},
	dividerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	dividerLine: {
		flex: 1,
		height: 1,
		backgroundColor: '#fff',
	},
	dividerText: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Poppins-Regular',
		marginHorizontal: 20,
	},
	socialButtonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 16,
		marginBottom: 24,
	},
	socialButton: {
		width: 56,
		height: 56,
		backgroundColor: 'white',
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	signInContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	signInText: {
		color: 'white',
		fontSize: 14,
		fontFamily: 'Poppins-Regular',
	},
	signInLink: {
		color: '#FFF50A',
		fontSize: 14,
		fontFamily: 'Poppins-Bold',
	},
})
